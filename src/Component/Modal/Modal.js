// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div onClick={onClose} style={{position: "fixed",top: 0,left: 0,width: "100%",height: "100%",background: "rgba(0, 0, 0, 0.5)",display: "flex",alignItems: "center",justifyContent: "center",}}>
			
            <div
				style={{
					maxWidth: "800px",
    display: "inline-grid",
    textAlign: "left",
    verticalAlign: "middle",
    boxShadow: "0 12px 15px 0 rgba(0,0,0,.25)",
    margin: "1.2rem",
    padding: "1.2rem",
    position: "relative",
    overflowY: "auto",
	background:'white',
	height:'20rem',
	width:'20rem'
	,position:'relative'
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
