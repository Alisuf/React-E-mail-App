import React from 'react'
import inbox from "../Assests/inbox.svg"
import compose from "../Assests/compose.svg"
import sent from "../Assests/sent.svg"
import draft from "../Assests/draft.svg"
function LeftBar() {
  return (
    <div >
      <nav style={{justifyContent:"center",position:'fixed',left:'0',width:'150px',height:'100%',marginTop:'10px'}}>
        <ul style={{textDecoration:'none',listStyle:'none',margin:"0",padding:'0'}}>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
                <button style={{borderRadius:'16px',height:'40px',border:'none',backgroundColor:'#eaf1fb',display:'flex',alignItems:'center',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
             <div>   <img style={{height:"21px",width:'25px'}} src={compose} alt=''/> </div>   Compose
                </button>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
            <a style={{display:'flex',alignItems:'center'}}>
                   <img style={{height:'35px'}} src={sent} alt=''/>
                    Sent
                </a>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
            <a style={{display:'flex',alignItems:'center'}}>                <img style={{height:'35px',alignContent:'center'}} src={draft} alt=''/>    Draft
                </a>
            </li>
            <li style={{textDecoration:'none',listStyle:'none',margin:"10px"}}>
                <a style={{display:'flex',alignItems:'center'}}>
                 <div> <img style={{height:'40px'}} src={inbox} alt=''/></div> All Mails
                </a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftBar
