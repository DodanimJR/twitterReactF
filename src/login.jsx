import React from "react";
import axios from "axios";
import './App.css';

const login = () => {
    const postData = async (url,data) => {
        console.log('url',url);
        const response = await axios.post(url, {
            "email":data["email"],
            "password":data["password"],
          });
        return response;
    }
    const loginClickHandler = async(e) => {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let data = await postData("http://localhost:8000/login",{"email":email,"password":password});
        console.log(data);
        if(data){
            if(data.data){
                console.log(data.data);
                if(data.data.response!='Incorrect Password'){
                    console.log(data.data.response);
                    localStorage.setItem('user',JSON.stringify(data.data.response));
                    
                    window.location.href = "/home";
                }else{
                    alert("Incorrect Password");
                }
                
                
            }
        }
        


    }


    return (
            <div className="app" style={{
                display: "flex",
            }}>
                <div style={{
                    display: "flex",
                    width: "100%",
                }}>
                    <div className="fadeIn first" style={{
                        maxWidth:"50%"
                    }}>
                    <img src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/logos/htc-summary-card.jpg.twimg.768.jpg" id="icon" alt="User Icon" style={{
                        width:"100%",
                        height:"100%"
                    }} />
                    </div >
                <div style={{
                    marginRight: "4px",
                    fontSize: "16px",
                    letterSpacing: "2px",
                    color: "#000000",
                    border: "2px solid #50b7f5",
                    padding: "0.25em 0.5em",
                    width: "100%",
                    }}>
                    <form onSubmit={loginClickHandler}>
                    <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
                    <input type="submit" className="fadeIn fourth" value="Log in"/>               
                    </form>
                    <div id="formFooter">
                    <a className="underlineHover" href="/signup">Register</a> <br></br>
                    <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
              </div>
           </div>
    );
}
export default login;