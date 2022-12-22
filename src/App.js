import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Chemp from './components/chemp/Chemp';
import Merch from './components/merch/Merch';
import Life from './components/life/Life';
import Gallery from './components/gallery/gallery';

function App() {
 
  return (
    <div className="App">
      <div className='fon'>
        <Header/>
        <Main/>
      </div>
      <Chemp/>
      <Merch/>
      <Life/>
      <Gallery/>

    </div>
  );
    }


export default App;
