import React, { useState } from 'react'
import inbox from "../Assests/inbox.svg"
import compose from "../Assests/compose.svg"
import sent from "../Assests/sent.svg"
import draft from "../Assests/draft.svg"
import Modal from '../Modal/Modal'
import cross from "../Assests/cross.svg"
import paperclip from "../Assests/paperclip.svg"
import {  useNavigate } from 'react-router-dom';

function LeftBar() {
  const [open,setOpen]=useState(false);
  const navigate = useNavigate();

  const [file,setFile]=useState()
  const [post,setPost]=useState({
    sender:"",
  subject:"",
  body:"",
  })
  const handleOpen = ()=>{
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
};

function handleFile (event){
  setFile(event.target.files[0])
  console.log(event.target.files[0])
}

const handleChange = (e) =>{
const {name,value}=e.target;
setPost((prev)=>{
  return{...prev,[name]:value};
});
};
const handleSubmit=(e)=>{
  e.preventDefault();

  handleClose(true)
console.log(post)

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
            <button  onClick={()=>navigate(`/`)} style={{textDecoration:'none',listStyle:'none',border:'none',backgroundColor:'inherit'}}>
                <a style={{display:'flex',alignItems:'center'}}>
                 <div> <img style={{height:'40px'}} src={inbox} alt=''/></div> All Mails
                </a>
            </button>
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
            
        </ul>
      </nav>
      <Modal isOpen={open}  >
        <div >
         <button onClick={handleClose} style={{border:'none',backgroundColor:'inherit',float:'right'}}><img style={{height:'19px',width:'20px',float:'right',marginTop:'10px'}} src={cross}/></button>
        <div style={{height:"auto",fontWeight:'500',paddingBottom:"10px",paddingTop:"10px",marginLeft:'16px',backgroundColor:"#f2f6fc"}}>Message</div>
        </div> 
        <form onSubmit={handleSubmit}>
        <input style={{fontSize:'20px',fontWeight:'lighter',boxShadow:'inset 0 -1px 0 0 rgba(100,121,143,1)',border:"none",borderBottom:"inset 0 -1px 0 0 rgba(100,121,143,0.122)",outline:"none",width:'93%',marginLeft:'16px'}} placeholder="to" type='email' name='sender' onChange={handleChange}/>
        <input style={{fontSize:'20px',fontWeight:'lighter',boxShadow:'inset 0 -1px 0 0 rgba(100,121,143,1)',border:"none",borderBottom:"inset 0 -1px 0 0 rgba(100,121,143,0.122)",outline:"none",width:'93%',marginLeft:'16px'}} placeholder="subject" type='name' name='subject' onChange={handleChange}/>
        <div>
          <textarea name='body' onChange={handleChange} style={{marginLeft:'16px',width:'382px',height:'17rem',borderRadius:'4px',border:'none',outline:'none',resize:'none',overflow:'hidden',fontSize:'15px',fontFamily:'sans-serif'}}>
          </textarea>
        </div>
        <div style={{display:'flex',gap:'1em',position:'absolute',alignItems:'center',bottom:'6px'}}>
          <button style={{width:'6rem',height:'2rem',borderRadius:'12px',marginLeft:'1em',backgroundColor:'#0b57d0',color:'white',border:'none'}}>
            send
          </button>
        <div style={{alignItems:"center"}}>
        <button style={{border:'none',outline:'none',backgroundColor:"rgb(255,255,255)"}}>
        <img style={{height:'36px',width:'40px'}} src={paperclip}/>
        <input style={{color:'white'}} type='file' name='file' onChange={handleFile}/>
        </button>
        </div>
       </div>
       </form>
      </Modal></>
  )
}

export default LeftBar
