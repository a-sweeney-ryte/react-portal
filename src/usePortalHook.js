import { useState } from "react";
import { createPortal } from "react-dom";

let renderContent; 

export const usePortalHook = (modalContent) => {
  const [isOpen, setIsOpen] = useState(false);

  renderContent = modalContent;

  return { isOpen, setIsOpen };
}

export const renderModalContent = (container) => { 
  if(!container) return null;

  return createPortal(
    renderContent,
    container
  )
}