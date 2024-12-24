import React from 'react';
import LinkButton from './components/LinkButton';
import ProfileImage from './components/ProfileImage';
import Images from './assets/profile.jpg';
import AppleIcon from './assets/apple2.png';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <main>
        <h1>
          Apple Link Bio
          <img src={AppleIcon} alt="Apple Icon" className="icon" />
        </h1>
        <ProfileImage src={Images} alt="Profile" />
        <h1>Our business class</h1>
        <LinkButton url="https://www.profitablecpmrate.com/yxcyzke636?key=b74984025e127997fa0a076f38e1c292" text="play video" />
        <LinkButton url="https://www.profitablecpmrate.com/yxcyzke636?key=b74984025e127997fa0a076f38e1c292" text="download videi" />
        <LinkButton url="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb" text="Join group" />
        {/* Menambahkan DirectLink yang disembunyikan */}
        <iframe
          src="https://www.profitablecpmrate.com/yxcyzke636?key=b74984025e127997fa0a076f38e1c292"
          style={{ display: 'none' }}
          title="profitablecpmrate-directlink"
        ></iframe>
        <h2>Apple Link Bio © By Idin Code</h2>
      </main>
    </div>
  );
};

export default App;
