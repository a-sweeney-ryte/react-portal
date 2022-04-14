import { useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { portalHook, renderModalContent, usePortalHook } from './usePortalHook';
import './App.css';

function App() {
  return (
    <div className='component'>
      <ChildComponent/>
    </div>
  );
}

function ModalContentComponent() {
  return (
    <p>Modal Content Component</p>
  )
}

function ChildComponent() { 
  const portalModalContent = <p>Portal modal content const</p>;
  const portalModalContentRef = useRef();
  // console.log('portalModalContent', portalModalContent)
  // console.log('portalModalContentRef', portalModalContentRef)
  const { isOpen, setIsOpen } = usePortalHook(<ModalContentComponent/>);

  const handleModalButtonClick = () => {
    setIsOpen(oldVal => !oldVal)
  }

  return (
    <div>
      <h2>Child Component</h2>
      
      <p ref={portalModalContentRef}>Portal Modal Content Ref</p> 

      <button onClick={handleModalButtonClick}>Toggle Modal</button>

      <PortalModal 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

function PortalModal({ isOpen }) { 
  const portalContainer = useRef(); 
  const content = renderModalContent(portalContainer.current);

  const thisStyle = isOpen ? 
    {border: '2px solid green', } : 
    {border: '2px solid green', opacity: '0'}
    
  return (
    <div ref={portalContainer} className="portal-hook-content-wrapper" style={thisStyle}> 
      { content }
    </div>
  )
}

// function Modal({ isOpen, onClose, container, children }) {
//   if(!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className='modal'>
//       <button onClick={onClose}>Close</button>
//       {children}
//     </div>,
//     container
//   ) 
// }

export default App;
