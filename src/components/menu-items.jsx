import React from 'react';
import './menu-items.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuItems = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
