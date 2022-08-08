import React from "react";
import axios from "axios";

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
        let response = await postData("http://localhost:8000/signup",data);
        
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
                <form onSubmit={signupClickHandler} style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <input type="username" id="username"  name="username" placeholder="username" />
                    <input type="name" id="name"  name="name" placeholder="name" />
                    <input type="email" id="email"  name="email" placeholder="email" />
                    <input type="password" id="password" name="password" placeholder="password"/>
                    <input type="submit"  value="Sign Up"/>
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