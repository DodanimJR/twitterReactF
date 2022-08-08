import React from "react";
import axios from "axios";
import TwitterIcon from "@mui/icons-material/Twitter";
const SignUp = () => {
    const postData = async (url,data) => {
        console.log('url',url);
        const response = await axios.post(url, {
            "username":data["username"],
            "name":data["name"],
            "email":data["email"],
            "password":data["password"],
          });
        return response;
    }
    const signupClickHandler = async(e) => {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        let name = document.getElementById("name").value;
        let data = {
            "username":username,
            "name":name,
            "email":email,
            "password":password
        }
        console.log(data);
        let response = await postData("https://twitter-junior-backend.herokuapp.com/signup",data);
        
        if(response){
            console.log(response.status);
            window.location.href = "/login";
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
                    <div className="dodiGuapa">
                        <TwitterIcon sx={{color:"#1d9bf0",fontSize:"150px"}}/>
                    </div>
                <form onSubmit={signupClickHandler} >
                    <div className="dodiBueno">
                    <input type="text" id="username"  name="username" placeholder="username" />
                    <br></br>
                    <input type="text" id="name"  name="name" placeholder="name" />
                    <br/>
                    <input type="text" id="email"  name="email" placeholder="email" />
                    <br/>
                    <input type="password" id="password" name="password" placeholder="password"/>
                    <br/>
                    <input type="submit"  value="Sign Up"/><br/>
                    </div>
                </form>
                    <div id="formFooter">
                    <a className="underlineHover" href="/login">Login</a> <br></br>
                </div>
            </div>
          </div>
            </div>
    )

}
export default SignUp;