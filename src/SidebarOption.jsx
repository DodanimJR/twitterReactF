import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon,}) {
  const user = JSON.parse(localStorage.getItem('user')).user;
  const clickHandler = () => {
    console.log("clicked", text);
    if(text==='Profile'){
      window.location.href = "/profile/"+ user.id.toString();
    }else{
      window.location.href = `/${text.toLowerCase()}`
    }
  
  }
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} onClick={clickHandler}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
