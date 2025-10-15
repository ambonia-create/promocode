import React, { useState } from 'react';
import PromoCodeModal from './PromoCodeModal';
import "./PromoCard.css";


export const PromoCard = ({ key, discount, type, description, buttonText, promocode, link }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleButtonClick = () => {
        if (promocode) {
            setIsModalOpen(true)
        } else {
          window.open(link, '_blank');
        }
      };
    return (
      <div className="promo-card">
        <div className="promo-info">
          <span className="promo-percentage">{discount}</span>
          <div className="promo-description">
            <span className="promo-type">{type}</span>
            <p>{description}</p>
          </div>
        </div>
        <button className="promo-button" onClick={handleButtonClick}>{buttonText}</button>
        <PromoCodeModal key={key} description={description} promocode={promocode} link={link} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
      </div>
    );
  } 