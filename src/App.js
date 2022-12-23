import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import Layot from './components/Layot';
import AboutUs from './components/HomePage/About/AboutUs';
import NewsFull from './components/News/newsFull/NewsFull';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layot/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/news' element={<NewsFull/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
