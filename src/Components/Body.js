import { createBrowserRouter, createHashRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Demo from "./Demo";

const Body = ()=>{
    // Using HashRouter for GitHub Pages compatibility
    const appRouter = createHashRouter([
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
        },
        {
            path: "/demo",
            element: <Demo/>
        }
    ]);

    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;