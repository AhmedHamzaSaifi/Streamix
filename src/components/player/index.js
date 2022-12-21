import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import { PlayButton } from '../header/styles/header';
import Web3 from 'web3';
import { CONTRACT_ABI , CONTRACT_ADDRESS } from './abiConfig';
import { db } from 'firebase';



export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

Player.CryptoButton = function PlayerCryptoButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const [account , setAccount ] = useState(null);
  const [bal , setBalance ] = useState(null);
  const [contract , setContract] = useState(null)
  const AsharAddr = '0x3E4bC186534b2a28caA117c331d738F2EDB4C469';
  const [owner , setOwner] = useState('0x3E4bC186534b2a28caA117c331d738F2EDB4C469');

  const loadWeb3=async()=>{
    const web3 = new Web3(Web3.givenProvider || "http://https://matic-mumbai.chainstacklabs.com:7545");  
     
        if (window.ethereum) {

        window.ethereum.enable();
        let accs = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
       // console.log(contract)
        console.log(accs);
        const bal = await contract.methods.balanceOf(accs[0]).call();
        console.log(bal / (Math.pow(10,18)));
        // console.log(localStorage.getItem('currentUser'));
        setBalance(bal / (Math.pow(10,18)))
        setContract(contract);
        setAccount(accs[0]);
  }
}
  const onRentClick=async()=>{
    
        loadWeb3()
        .then(()=>{
          if(bal < 5)
            {
                window.alert('An Error Occured Or You Have Insufficient Balance');
                return;
            }
            else
            {
                const returnValue = contract.methods.transfer(owner ,'5000000000000000000').send({from : account})
                .once('receipt' , (receipt)=>{
                    console.log(receipt.events)
                    console.log(returnValue)
                    window.alert('Transaction Successfull');
                    //db queries
                  //   db.collection("abc").add({
                  //     first: "Ada",
                  //     last: "Lovelace",
                  //     born: 1815
                  // })
                  // .then((docRef) => {
                  //     console.log("Document written with ID: ", docRef.id);
                  // })
                  // .catch((error) => {
                  //     console.error("Error adding document: ", error);
                  // });
                })
            }
        })
             
        
  }

  return (
    <PlayButton onClick={onRentClick}  {...restProps}>
      Rent-IT
    </PlayButton>
  );
};