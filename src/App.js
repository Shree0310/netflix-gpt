import './App.css';
import Body from './Components/Body';
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
import Browse from './Components/Browse';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore';


function App() {


  return (
    <div className="App">
      <Provider store={AppStore}>
        <Body/>
      </Provider>
      
    </div>
  );
}



export default App;
