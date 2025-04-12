import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";
import { LOGIN_PAGE_BACKGROUND, USER_AVATAR } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMesssage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Used to reference
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        //Validate the form data
        
        const message = checkValidData(
            email?.current?.value, 
            password?.current?.value);
        setErrorMesssage(message);
        // console.log("button clicked");
        // console.log(message);

        if(message) return;

        if(!isSignInForm){
            //Sign Up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR
                  }).then(() => {
                    // Profile updated! navigate
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
            );
                  }).catch((error) => {
                    // An error occurred
                   setErrorMesssage(error.message);
                  });
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMesssage(errorCode + "-" + errorMessage);
            });

        }
        else{
             //Sign-In Logic
             signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMesssage(errorCode + "-" + errorMessage);
            });   
        }
    }

    const toggleSignUpForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return (
    <div>
        
        <Header/>

        <div className="absolute" >
            <img
            className="h-screen w-screen object-cover"
            src={LOGIN_PAGE_BACKGROUND}
            alt="logo" /> 
        </div>
         <div>
            <form 
            onSubmit={(e)=>e.preventDefault()} className="w-[80%] md:w-3/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-36 right-0 left-0 text-white">

                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && 
                (
                <input 
                ref={name}
                type="text" 
                placeholder="Full Name" 
                className="w-full py-2 px-2 my-2 bg-gray-600 rounded md"
                />
                )}

                <input 
                ref={email} 
                type="text" 
                placeholder="Email or phone number" 
                className="w-full py-2 px-2 my-2 bg-gray-600 rounded-md"
                />

                <input 
                ref={password} 
                type="password" 
                placeholder="password" 
                className="w-full py-2 px-2 my-2 bg-gray-600 rounded md"
                />

                <p className="text-red-600 text-lg py-2">{errorMessage}</p>
                <button 
                className="py-4 my-4 w-full h-14 text-center bg-red-700 rounded-md" 
                onClick={handleButtonClick}
                >
                {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-gray-500 cursor-pointer" onClick={toggleSignUpForm}>
                    {isSignInForm 
                    ? "New to Netflix? Sign up now" 
                    : "Already a user? Sign in now"}
                </p>  

                <div className="border-t border-gray-600 my-4"></div>
                
                <button 
                    className="py-4 w-full h-14 text-center bg-gray-600 hover:bg-gray-700 rounded-md"
                    onClick={() => navigate('/demo')}
                >
                    Try Demo Version
                </button>

            </form>  
         </div>
         
    </div>
  
    );
}

export default Login;
