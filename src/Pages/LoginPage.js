import React from 'react'

function LoginPage() {
  return (
    <div>
      <div style={{direction:'ltr',left:'0',right:'0',top:'0',zIndex:'1',position:'center',textAlign:'center',height:'75vh',padding:'40px',background:'#fff',borderWidth:'1px',borderStyle:'solid',boxSizing:'border-Box',borderColor:'#dadce0',borderRadius:'10px',overflow:'hidden',margin:"5rem 35rem 35rem "}}>
        <div style={{fontSize:'14px',marginTop:'1em',fontWeight:'bold',height:"24"}}>
            Peigen
        </div>
        <div style={{fontWeight:'400',fontSize:'24px', lineHeight:'1.333',color:'#202124',fontFamily:"serif"}}>
            Sign In 
        </div>
        <div>
            to continue to your mail
        </div>
        <div >
          <label>Email or Phone</label>
        </div>
        <input style={{height:'28px',borderRadius:'4px',fontSize:'16px', margin:'1px 1px 0 1px', padding:'13px 15px',zIndex:'1',border:" 1px solid rgb(218 220 224)"}} placeholder='Enter Your Email or Phone'/>
      
      </div>
      <div style={{display:'flex',position:'absolute',bottom:"0px"}}>
      <div>
      English
      </div> 
      <div>
      Help
      </div> 
      <div>
      Privacy
      </div> 
      <div>
      Terms
      </div> 
      </div>
    </div>
  )
}

export default LoginPage
