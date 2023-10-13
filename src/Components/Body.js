import { createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import SignUp from "./SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";


const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/sign-up",
            element: <SignUp/>
        }
      ]);
      //using useEffect because we have to setup this type of event listener once
    //   useEffect(() =>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //           const {uid, email, displayName} = user;
    //           dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
    //           // redirect to browse page
             
    //         } else {
    //           // User is signed out
    //           dispatch(removeUser());
    //           //redirect to main page
            
    //         }
    //       });
    //   }, [])

    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
    );
    
};





export default Body;