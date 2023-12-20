import React from 'react'

function Reply({isOpen, onClose, children}) {
    if (!isOpen) return null ;
  return (
    <div  style={{boxSizing:"border-box",height:'25vh',width:"45rem",border:'none',float:'inline-end',marginTop:'9em',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 20px",marginLeft:'6em',position:'absolute',wordWrap:'break-word',borderRadius:'16px'}}>
      {children}
    </div>
  )
}

export default Reply
