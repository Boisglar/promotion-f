import './App.css';
// import NewsRender from './components/news/NewsRender';
import AddFighter from './components/fighters/AddFighter';
import PostNews from './components/news/PostNews';
// import NewsAdd from './components/news/NewsAdd';
// import NewsGet from './components/news/NewsGet';

function App() {
  return (
    <div className="App">
      {/* <NewsGet/>
      <NewsRender/> */}
      <AddFighter/>
      <PostNews/>
      {/* <NewsAdd/> */}
    </div>
  );
    }


export default App;
