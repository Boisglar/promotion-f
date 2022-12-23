import './App.css';
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

function App() {
 
  return (
    <div className="App">
      {/* <Registration/>
      <Users/> */}
      {/* <NewsGet/>
      <NewsRender/> */}
      {/* <AddFighter/>
      <PostNews/> */}
      {/* <NewsAdd/> */}
      <SimpleSlider/>
      {/* <NewsFull/> */}

    </div>
  );
    }


export default App;
