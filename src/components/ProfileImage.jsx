import React from 'react';
import PropTypes from 'prop-types';
import './ProfileImage.css';

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="profile-image-container">
      <img src={src} alt={alt} className="profile-image" />
    </div>
  );
};

export default ProfileImage;