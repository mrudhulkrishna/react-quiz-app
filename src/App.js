import { BrowserRouter, Link, Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       {/* <Home/> */}
       <Link to="quiz">
       <button className='start'>
            Start
         </button>
        </Link>
        <Link to="">
       <button className='start'>
            Home
         </button>
        </Link>
      
        <Routes>
        <Route path='' element={<Home/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
        </Routes>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
