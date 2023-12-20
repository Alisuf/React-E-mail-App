import React, { useState } from 'react'
import inbox from "../Assests/inbox.svg"
import compose from "../Assests/compose.svg"
import sent from "../Assests/sent.svg"
import draft from "../Assests/draft.svg"
import Modal from '../Modal/Modal'
function LeftBar() {
  const [open,setOpen]=useState(false);
  const handleOpen = ()=>{
    setOpen(true)
  }

  return (
    <>
      <nav style={{justifyContent:"center",position:'relative',left:'0',width:'8.69rem',height:'50rem',marginTop:'10px'}}>
        <ul style={{textDecoration:'none',listStyle:'none',margin:"0",padding:'0'}}>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
                <button type="button" onClick={handleOpen} style={{borderRadius:'16px',height:'40px',border:'none',backgroundColor:'#eaf1fb',display:'flex',alignItems:'center',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >
                  <div>   
                    <img style={{height:"21px",width:'25px'}} src={compose} alt=''/> 
                  </div>   
                    Compose
                </button>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
            <a style={{display:'flex',alignItems:'center'}}>
                   <img style={{height:'35px'}} src={sent} alt=''/>
                    Sent
                </a>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
            <a style={{display:'flex',alignItems:'center'}}>
              <img style={{height:'35px',alignContent:'center'}} src={draft} alt=''/>   
               Draft
                </a>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
                <a style={{display:'flex',alignItems:'center'}}>
                 <div> <img style={{height:'40px'}} src={inbox} alt=''/></div> All Mails
                </a>
            </li>
        </ul>
      </nav>
      <Modal isOpen={open}>
        <div style={{marginLeft:'1em',fontSize:'20px',fontWeight:'lighter'}}>to: </div>
        <form>
        <div><textarea style={{width:'700px',height:'5rem',borderRadius:'4px',border:'none',outline:'none',marginLeft:'5px',resize:'none',overflow:'hidden',fontSize:'15px',fontFamily:'sans-serif'}}></textarea></div>
        <div style={{display:'flex',gap:'1em',position:'absolute',alignItems:'center'}}><button style={{width:'6rem',height:'2rem',borderRadius:'12px',marginLeft:'1em',backgroundColor:'#0b57d0',color:'white',border:'none'}}>send</button>
        <div style={{alignItems:"center"}}>
        <button style={{border:'none',outline:'none',backgroundColor:"rgb(255,255,255)"}}>
        <img style={{height:'36px',width:'40px'}} />
        <input style={{color:'white'}} type='file' name='file' />
        </button>
        </div>
       </div>
       </form>
      </Modal></>
  )
}

export default LeftBar
