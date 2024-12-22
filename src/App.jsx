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
        <LinkButton url="https://www.profitablecpmrate.com/ipqxesfjj?key=69bf0e1d7d2296a296c2cb3f36698cc7" text="digital marketing" />
        <LinkButton url="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb" text="online business" />
        <LinkButton url="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb" text="business idea" />
        {/* Menambahkan DirectLink yang disembunyikan */}
        <iframe
          src="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb"
          style={{ display: 'none' }}
          title="profitablecpmrate-directlink"
        ></iframe>
        <h2>Apple Link Bio © By Idin Code</h2>
      </main>
    </div>
  );
};

export default App;