import React from 'react'
import profile from "../Assests/profile.png"
import menu from "../Assests/menu.svg"
import searchIcon from "../Assests/searchIcon.svg"
function TopBar() {
  return (
    <div>
      <nav style={{height:'2rem',width:'100%',alignItems:'center',display:"flex"}} >
      <a style={{textDecoration:"none",color:'inherit',display:'flex'}} href='/'>
            <img src={menu} alt='' style={{width:'25px',height:'25px'}}></img>  
        </a>
        <ul style={{display:"flex",position:"relative",boxSizing:'border-box',width:"100%",textDecoration:"none",listStyle:"none",alignItems:'center',justifyContent:'left',gap:'10px'}}>
            <li >
                <a style={{textDecoration:"none",color:'inherit',alignItems:"center",display:'flex'}} href='/'>
                    Pigeon Mail
                </a>
            </li>
            <li>
                <a style={{textDecoration:"none"}} href='/search'>
                   <button style={{borderRadius:"20px",border:'none',display:'flex',alignItems:'center'}}>
                    <div><img style={{width:"30px",height:'20px'}} src={searchIcon} alt='' /></div>
                    <input  style={{alignItems:'center',borderRadius:"20px",border:'none',boxSizing:'border-box',height:'25px',width:"250px",maxWidth:"350px",backgroundColor:'#eaf1fb'}}  type='search' placeholder='search mail' />
                    </button>
                </a>
            </li>
          
        </ul>
        <a style={{textDecoration:"none",float:'right'}} href='/profile'>
            <img src={profile} alt='' style={{width: "25px", height: "25px", borderRadius: "25/ 2"}} />
        </a>
      </nav>
    </div>
  )
}

export default TopBar
