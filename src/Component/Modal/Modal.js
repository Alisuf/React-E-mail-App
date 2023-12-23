// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
			
			<div onClick={onClose}  style={{boxSizing:"border-box",height:'27rem',width:"25rem",border:'none',float:'inline-end',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 20px",marginLeft:'6em',position:'fixed',wordWrap:'break-word',backgroundColor:"white",zIndex:'3',bottom:'0'}}>

				{children}
			</div>
		
	);
};

export default Modal;
