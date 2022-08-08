import React from "react";
import axios from "axios";

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
                    localStorage.setItem("token",data.data.response.token);
                    localStorage.setItem('userId',data.data.response.userId);
                    localStorage.setItem('userAvatar',data.data.response.userAvatar);
                    window.location.href = "/home";
                }else{
                    alert("Incorrect Password");
                }
                
                
            }
        }
        


    }


    return (
        <body className="html">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <div className="fadeIn first">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725335.png" id="icon" alt="User Icon" />
                </div>
                <form onSubmit={loginClickHandler}>
                <input type="email" id="email" className="fadeIn second" name="email" placeholder="email" />
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
                
                <input type="submit" className="fadeIn fourth" value="Log in"/>
                

                </form>
                <div id="formFooter">
                <a className="underlineHover" href="/register">Register</a> <br></br>
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
           </div>
           </body>
    );
}
export default login;