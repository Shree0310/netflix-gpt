import { Link } from "react-router-dom";
import Header from "./Header";
import SignUp from "./SignUp";
import { useState } from "react";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState();

    const toggleSignUpForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return (
    <div>
        
        <Header/>

        <div className="absolute" >
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo" /> 
        </div>
         <div>
            <form className="w-3/12  absolute p-12 bg-black bg-opacity-80 mx-auto my-36 right-0 left-0 text-white">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="w-full py-2 px-2 my-2 bg-gray-600 rounded md"/>)}
                <input type="text" placeholder="Email or phone number" className="w-full py-2 px-2 my-2 bg-gray-600 rounded-md"/>
                <input type="password" placeholder="password" className="w-full py-2 px-2 my-2 bg-gray-600 rounded md"/>
                <button className="py-4 my-4 w-full h-14 text-center bg-red-700 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-gray-500 cursor-pointer">{isSignInForm ? "New to Netflix? " : "Already a user? "}<span className="text-white" onClick={toggleSignUpForm}>{isSignInForm ? "Sign up now" : "Sign in now"}</span></p>

            </form>  
         </div>
         
    </div>
  
    );
}

export default Login;
