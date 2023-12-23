import React, { useEffect, useState } from 'react'
import profile from "../Assests/profile.png"
import menu from "../Assests/menu.svg"
import searchIcon from "../Assests/searchIcon.svg"
function TopBar() {
  const [show,setShow] = useState(true)
  const handleClose=()=>{
    setShow(false)
  }
console.log(show)
  return (
    <div>
      <nav style={{height:'2rem',width:'100%',alignItems:'center',display:"flex",justifyContent:'space-between'}} >
            <img src={menu} alt='' onClick={handleClose} style={{width:'25px',height:'25px',marginLeft:'1rem'}}></img>  
        <ul style={{display:'flex',textDecoration:"none",listStyle:"none",alignItems:'center',gap:'2em'}}>
            <li >
                <a style={{textDecoration:"none",color:'inherit',alignItems:"center",display:'flex',width:"10em"}} href='/'>
                    React E-mail App
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
