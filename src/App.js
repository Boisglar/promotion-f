import './App.css';
<<<<<<< HEAD
import Registration from './components/auth/Authorization';
import Users from './components/users/Users';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import NewsRender from './components/news/NewsRender';
// import AddFighter from './components/fighters/AddFighter';
// import PostNews from './components/news/PostNews';
// import NewsAdd from './components/news/NewsAdd';
import NewsGet from './components/news/newsGet/NewsGet';
import NewsFull from "./components/news/newsFull/NewsFull"
import SimpleSlider from './components/Carousel/Carousel';
=======
import Main from './components/main/Main';
import Header from './components/header/Header';
import Chemp from './components/chemp/Chemp';
import Merch from './components/merch/Merch';
import Life from './components/life/Life';
import Gallery from './components/gallery/gallery';
>>>>>>> main

function App() {
 
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Registration/>
      <Users/> */}
      {/* <NewsGet/>
      <NewsRender/> */}
      {/* <AddFighter/>
      <PostNews/> */}
      {/* <NewsAdd/> */}
      <SimpleSlider/>
      {/* <NewsFull/> */}
=======
      <div className='fon'>
        <Header/>
        <Main/>
      </div>
      <Chemp/>
      <Merch/>
      <Life/>
      <Gallery/>
>>>>>>> main

    </div>
  );
    }


export default App;
