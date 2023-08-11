import React from 'react';
import Modal from 'react-modal';
import GetStarted from './GetStarted';

const SignInModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
     <GetStarted/>
    </Modal>
  );
};

export default SignInModal;