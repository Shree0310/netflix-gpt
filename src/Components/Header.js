import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { useSelector } from "react-redux";
import { LOGO } from "../Utils/Constants";




const Header = () =>{
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    const handleSignOut = ()=>{     
        signOut(auth)
        .then(() => {})
        .catch((error) => {
        // An error happened.
        navigate("/error");
        });

    }

    //Putting it here, because Header component will be present throughout the app 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsiubscribe when component unmounts
        return () => unsubscribe();
      }, []);

    return (

        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
            className="w-44"
            src={LOGO}
            alt="Netflix-logo"
            />
            {user &&(
                <div className="flex">
                <img 
                className="w-10 h-10 my-5 mx-2"
                src={user?.photoURL}
                alt="profile-icon"
                />
                <button className="text-white" onClick={handleSignOut} >Sign Out</button>
             </div>

            )}
             
        </div>
       
    );
}

export default Header;