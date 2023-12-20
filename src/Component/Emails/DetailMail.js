import React, { useState } from 'react'
import { EMails } from './Mails'
import { useParams } from 'react-router-dom'
import profile from "../Assests/profile.png"
import Reply from '../Modal/Reply'
import paperclip from "../Assests/paperclip.svg"

function DetailMail() {
const [open,setOpen]=useState(false)
const [file,setFile]=useState()
const handleOpen=()=>{
  setOpen(true)
}

function handleFile (event){
   setFile(event.target.files[0])
   console.log(event.target.files[0])
}
function handleUpload () {
 const formData = new FormData()
 formData.append('file',file)
}
const {id} = useParams();
const DetailMail = EMails?.find( item => item.id===Number(id))
  return (
    
      <div style={{boxSizing:"border-box",height:'80%',width:"55rem",border:'none',float:'inline-end',marginTop:'10px',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",top:'50px',left:'124px',position:'absolute',wordWrap:'break-word'}}>
      <div style={{marginTop:"1em",marginLeft:"2em",fontSize:'20px',fontWeight:"400"}}>{DetailMail.subject}</div>
      <div style={{display:"flex",gap:'1em',marginTop:"1em",alignItems:'center',marginLeft:'1em'}}><img src={profile} alt='' style={{width: "25px", height: "25px", borderRadius: "25/ 2"}} />{DetailMail.sender}</div>
      <div style={{marginLeft:'3em',marginTop:'1em',wordWrap:"break-word"}}>{DetailMail.body}</div>
      
    { !open  ? <button style={{marginLeft:'3em',marginTop:'1em'}} type='button' onClick={handleOpen}>Reply</button>:null}

      <Reply isOpen={open}>
        <div style={{marginLeft:'1em',fontSize:'20px',fontWeight:'lighter'}}>to: {DetailMail.sender}</div>
        <form>
        <div><textarea style={{width:'700px',height:'5rem',borderRadius:'4px',border:'none',outline:'none',marginLeft:'5px',resize:'none',overflow:'hidden',fontSize:'15px',fontFamily:'sans-serif'}}></textarea></div>
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
