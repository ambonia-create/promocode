import React, { useState } from 'react';
import Modal from 'react-modal';
import "./PromoCodeModal.css";

Modal.setAppElement('#root');

const PromoCodeModal = ({ key, description, promocode, link, isOpen, onRequestClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promocode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenIherbSite = () => {
    window.open(link, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Забирай свій промокод для iHerb</h2>
        <button onClick={onRequestClose} className="close-button">✖</button>
      </div>
      <div className="modal-body">
        <div className="promo-code-container">
          <span className="promo-code">{promocode}</span>
          <button onClick={handleCopyCode} className="copy-button">Копіювати код</button>
        </div>
        {copied && <div className="copy-notification">код скопійовано</div>}
        <div className="discount-info">
          {description}
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={handleOpenIherbSite} className="visit-site-button">Перейти на сайт iHerb</button>
      </div>
    </Modal>
  );
};

export default PromoCodeModal;