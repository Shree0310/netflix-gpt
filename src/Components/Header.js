import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { toggleGptSearchView } from "../Utils/GPTSlice";
import { changeLanguage } from "../Utils/ConfigSlice";




const Header = () =>{
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = ()=>{     
        signOut(auth)
        .then(() => {})
        .catch((error) => {
        // An error happened.
        navigate("/error");
        });

    }



    const handleGPTSerachClick = ()=>{
      //Toggle GPT Search
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange =(e)=>{
      console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
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

        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b
         from-black z-10 flex flex-col md:flex-row md:justify-between ">
            <img 
            className="w-44 mx-auto md:mx-0"
            src={LOGO}
            alt="Netflix-logo"
            />
            {user &&(
                <div className="flex">
                  
                  {showGptSearch && (<div className=" px-2 py-6 rounded-md md:rounded-md">
                    <select className="h-8 bg-gray-900 text-white " onChange={handleLanguageChange}>
                      {SUPPORTED_LANGUAGES.map((lang)=>(
                          <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                      ))}
                      {/* <option value="en">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="spanish">Spanish</option> */}
                    </select>
                  </div>
                  )}
                  
                  <div className="pt-4">
                    <button className="w-32 h-12 text-white bg-purple-700 rounded-md cursor-pointer" onClick={handleGPTSerachClick}>
                      {showGptSearch ? "Home Page" : "GPT Search"}</button>
                  </div>
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