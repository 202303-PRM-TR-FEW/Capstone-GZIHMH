import React from 'react';
import GetStarted from './GetStarted';
import { useRouter } from 'next/navigation';
const SignInModal = ({ open, onClose }) => {
   const router = useRouter()
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className='modalRight'>
            <p className='closeBtn text-gray-800 font-bold' onClick={onClose}>
              X
            </p>
            <div className='content'>
                        <GetStarted routers={router} popup={true } />
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
export default SignInModal;