import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://www.facebook.com/ahmed.hamza.3950178/" target="_blank" >FACEBOOK</Footer.Link>
          <Footer.Link href="https://www.linkedin.com/in/ahmed-hamza-879010206/" target="_blank">LINKED IN</Footer.Link>
          {/* <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://www.instagram.com/ahmedhamzasaifi/?hl=en" target="_blank">INSTAGRAM</Footer.Link>
          {/* <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://github.com/AhmedHamzaSaifi" target="_blank">GITHUB</Footer.Link>
          {/* <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://drive.google.com/drive/u/0/my-drive" target="_blank">GOOGLE DRIVE</Footer.Link>
          {/* <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link> */}
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Break></Footer.Break>
      <Footer.Text>Streamix Originals</Footer.Text>
    </Footer>
  );
}
