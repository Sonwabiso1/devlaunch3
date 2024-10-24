// src/Modal.js
import React from 'react';
import '../styles/modal.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
