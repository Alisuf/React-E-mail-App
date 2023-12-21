import React from 'react'
import TopBar from '../Component/NavBar/TopBar'
import LeftBar from '../Component/NavBar/LeftBar'
import { EMails } from '../Component/Emails/Mails'
import moment from 'moment';
import {  useNavigate } from 'react-router-dom';
function HomePage() {

  const navigate = useNavigate();

  return (
    <>
     

      <div style={{boxSizing:"border-box",height:'50em',width:"-webkit-fit-content",border:'none',float:'inline-end',marginTop:'10px',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",top:'50px',left:'124px',position:'absolute'}}>
          {EMails.map((item)=>{
            return(
         <button  style={{display:"flex",boxSizing:'border-box',border:'none',boxShadow:"rgba(0, 0, 0, 0.24) 0px 1px 0px",height:"auto",fontSize:"20px",gap:"1em",alignItems:'center',width:'75rem'}} onClick={()=>navigate(`mails/${item.id}`)}>   <div key={item.id}  style={{display:"flex",boxSizing:'border-box',border:'none',boxShadow:"rgba(0, 0, 0, 0.24) 0px 1px 0px",height:"auto",fontSize:"20px",gap:"1em",alignItems:'center',width:'75rem',justifyContent:'space-between'}}>
               <div style={{fontWeight:"700",padding:"7px",wordWrap:'break-word'}}> {item.sender}</div>
               <div style={{fontWeight:'500'}}>{item.subject}</div>
               <div style={{fontWeight:'550'}}>{moment(item.timestamp).format('MMMM Do YYYY, h:mm a')}</div>
                </div></button>  
            )
          }
          )}
        </div>
        </>
  )
}

export default HomePage
