import React from 'react'
import TopBar from '../Component/NavBar/TopBar'
import LeftBar from '../Component/NavBar/LeftBar'

function HomePage() {
  return (
    <div>
      <TopBar/>
      <LeftBar/>
      <div style={{boxSizing:"border-box",height:'100vh',width:'85%',textAlign:'center',margin:'0',border:'none',float:'inline-end',marginTop:'10px',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'16px'}}>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage
