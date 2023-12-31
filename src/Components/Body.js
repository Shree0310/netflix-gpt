import { createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";


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

    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
    );
    
};





export default Body;