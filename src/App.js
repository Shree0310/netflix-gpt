import './App.css';
import Body from './Components/Body';
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
import Browse from './Components/Browse';
import Login from './Components/Login';


function App() {


  return (
    <div className="App">
      <Body/>
    </div>
  );
}



export default App;
