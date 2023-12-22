import React, { useEffect, useState } from 'react'
import Mails from "../Component/Assests/Mails.json"
import moment from 'moment';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'

function HomePage() {

  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(Mails);
let filter = ["primary","promotional","social"]
 
const handleFilterButtonClick = (selectedCategory) => {
  if (selectedFilters.includes(selectedCategory)) {
    let filters = selectedFilters.filter((el) => el !== selectedCategory);
    setSelectedFilters(filters);
  } else {
    setSelectedFilters([...selectedFilters, selectedCategory]);
  }
};

useEffect(() => {
  filterItems();
}, [selectedFilters]);

const filterItems = () => {
  if (selectedFilters.length > 0) {
    let tempItems = selectedFilters.map((selectedCategory) => {
      let temp = Mails.filter((item) => item.category === selectedCategory);
      return temp;
    });
    setFilteredItems(tempItems.flat());
  } else {
    setFilteredItems([...Mails]);
  }
};
  return (
    <>
     

      <div style={{boxSizing:"border-box",height:'50em',width:"-webkit-fit-content",border:'none',float:'inline-end',marginTop:'10px',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",top:'50px',left:'124px',position:'absolute'}}>

       <div> <input style={{width:'75rem'}} type='text' onChange={(e)=>setData(e.target.value)} placeholder='Search'/></div>
         <div style={{display:'flex',justifyContent:"space-around",height:'2em',paddingTop:'10px'}}>{filter.map((category,id)=>(
          <button onClick={()=>handleFilterButtonClick(category)}  className={`button ${
            selectedFilters?.includes(category) ? "active" : ""
          }`}
          key={`filters-${id}`}>{category}</button>
         ))}</div>
          {filteredItems.filter((item)=>{
            return data===''?item:item.sender.includes(data);
          }).map((item,id)=>{
            return(
         <button key={id}  style={{display:"flex",boxSizing:'border-box',border:'none',boxShadow:"rgba(0, 0, 0, 0.24) 0px 1px 0px",height:"auto",fontSize:"20px",gap:"1em",alignItems:'center',width:'75rem'}} onClick={()=>navigate(`mails/${item.id}`)}>   <div key={item.id}  style={{display:"flex",boxSizing:'border-box',border:'none',boxShadow:"rgba(0, 0, 0, 0.24) 0px 1px 0px",height:"auto",fontSize:"20px",gap:"1em",alignItems:'center',width:'75rem',justifyContent:'space-between'}}>
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
