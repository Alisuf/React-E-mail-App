import React, { useState } from 'react'
import Mails from "../Assests/Mails.json"
import { useParams } from 'react-router-dom'
import profile from "../Assests/profile.png"
import Reply from '../Modal/Reply'
import paperclip from "../Assests/paperclip.svg"
import cross from "../Assests/cross.svg"

function DetailMail() {
const {id} = useParams();
const DetailMail = Mails?.find( item => item.id===Number(id))
const [open,setOpen]=useState(false)
const [file,setFile]=useState()
const [post,setPost]=useState({
body:"",
})

const handleOpen=()=>{
  setOpen(true)
}
const handleClose = () => {
  setOpen(false);
};

function handleFile (event){
   setFile(event.target.files[0])
   console.log(event.target.files[0])
}
function handleUpload () {
 const formData = new FormData()
 formData.append('file',file)
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
    
      <div style={{boxSizing:"border-box",height:'80%',width:"55rem",border:'none',float:'inline-end',marginTop:'10px',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",top:'50px',left:'124px',position:'absolute',wordWrap:'break-word'}}>
      <div style={{marginTop:"1em",marginLeft:"2em",fontSize:'20px',fontWeight:"400"}}>{DetailMail.subject}</div>
      <div style={{display:"flex",gap:'1em',marginTop:"1em",alignItems:'center',marginLeft:'1em'}}><img src={profile} alt='' style={{width: "25px", height: "25px", borderRadius: "25/ 2"}} />{DetailMail.sender}</div>
      <div style={{marginLeft:'3em',marginTop:'1em',wordWrap:"break-word"}}>{DetailMail.body}</div>

     
      
    { !open  ? <button style={{marginLeft:'3em',marginTop:'1em'}} type='button' onClick={handleOpen}>Reply</button>:null}

      <Reply isOpen={open}>
      <button onClick={handleClose} style={{border:'none',backgroundColor:'inherit',float:'right'}}><img style={{height:'19px',width:'20px',float:'right',marginTop:'10px'}} src={cross}/></button>

        <div style={{marginLeft:'1em',fontSize:'20px',fontWeight:'lighter'}}>to: {DetailMail.sender}</div>
        <form onSubmit={handleSubmit}>
        <div><textarea name='body' onChange={handleChange} style={{width:'700px',height:'5rem',borderRadius:'4px',border:'none',outline:'none',marginLeft:'5px',resize:'none',overflow:'hidden',fontSize:'15px',fontFamily:'sans-serif'}}></textarea></div>
        <div style={{display:'flex',gap:'1em',position:'absolute',alignItems:'center'}}><button style={{width:'6rem',height:'2rem',borderRadius:'12px',marginLeft:'1em',backgroundColor:'#0b57d0',color:'white',border:'none'}}>send</button>
        <div style={{alignItems:"center"}}>
        <button style={{border:'none',outline:'none',backgroundColor:"rgb(255,255,255)"}}>
        <img style={{height:'36px',width:'40px'}} src={paperclip}/>
        <input style={{color:'white'}} type='file' name='file' onChange={handleFile}/>
        </button>
        </div>
       </div>
       </form>
      </Reply>
      </div>
      
   
   
  )
}

export default DetailMail
