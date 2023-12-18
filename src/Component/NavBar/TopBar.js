import React from 'react'
import profile from "../Assests/profile.png"
import menu from "../Assests/menu.svg"
import searchIcon from "../Assests/searchIcon.svg"
function TopBar() {
  return (
    <div>
      <nav style={{height:'2rem',width:'100%',alignItems:'center',display:"flex",justifyContent:'space-between'}} >
      <a style={{textDecoration:"none",color:'inherit',display:'flex'}} href='/'>
            <img src={menu} alt='' style={{width:'25px',height:'25px',marginLeft:'1rem'}}></img>  
        </a>
        <ul style={{display:'flex',textDecoration:"none",listStyle:"none",alignItems:'center',gap:'58px'}}>
            <li >
                <a style={{textDecoration:"none",color:'inherit',alignItems:"center",display:'flex'}} href='/'>
                    Pigeon Mail
                </a>
            </li>
            <li>
                <a style={{textDecoration:"none"}} href='/search'>
                   <button style={{borderRadius:"20px",border:'none',display:'flex',alignItems:'center',boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <div><img style={{width:"30px",height:'20px'}} src={searchIcon} alt='' /></div>
                    <input  style={{alignItems:'center',borderRadius:"20px",border:'none',boxSizing:'border-box',height:'25px',width:"250px",maxWidth:"350px",backgroundColor:'#eaf1fb'}}  type='search' placeholder='search mail' />
                    </button>
                </a>
            </li>
            <a style={{textDecoration:"none",float:'right'}} href='/profile'>
            <img src={profile} alt='' style={{width: "25px", height: "25px", borderRadius: "25/ 2"}} />
        </a>
        </ul>
        
      </nav>
    </div>
  )
}

export default TopBar
