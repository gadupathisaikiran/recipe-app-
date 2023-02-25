
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './components/login';
import Siginup from './components/siginup';
import Home from './components/home';
import Post from './components/post';
import View from './components/view';
import Show from './components/view';

function App() {
  return (
 
     <div className='App'>
     
    
       <BrowserRouter>

        <Routes>
        
           <Route path='/' element={<Login/>} />
           <Route path='/user/signup' element={<Siginup/>} />
           <Route path='/user/home' element={<Home/>} />
           <Route path='/user/post' element={<Post/>}/>

           <Route path='/user/post' element={<Post/>}/>
           <Route path='/user/view' element={<Show/>}/>
        
        
        </Routes>





</BrowserRouter>

       

    
</div>

  );
}

export default App;
