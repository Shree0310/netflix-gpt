import Header from "./Header";
import { LOGIN_PAGE_BACKGROUND } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    // Store demo mode in session storage
    sessionStorage.setItem('isDemoMode', 'true');
    navigate("/browse");
  };

  return (
    <div>
      <Header />
      <div className="pt-[30%] md:pt-[10%] flex flex-col items-center">
        <h1 className="text-white text-center text-3xl md:text-5xl font-bold">
          Welcome to Netflix Demo
        </h1>
        <p className="text-white text-center text-lg mt-4 px-4">
          This is a preview version. Some features may be limited.
        </p>
        <div className="flex gap-4 mt-8">
          <button
            className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
          <button
            className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
            onClick={handleBrowseClick}
          >
            Browse Content
          </button>
        </div>
      </div>
      <div className="absolute -z-10 top-0">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_PAGE_BACKGROUND}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Demo; 