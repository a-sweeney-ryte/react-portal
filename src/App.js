import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='component'>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
  );
}

function Modal({ isOpen, onClose, children }) {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal'>
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.body
  )
}

export default App;
