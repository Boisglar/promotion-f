import './App.css';
import Registration from './components/auth/Authorization';
import Users from './components/users/Users';
import AddFighter from './components/fighters/AddFighter';
import NewsGet from './components/news/newsGet/NewsGet';
import NewsFull from "./components/news/newsFull/NewsFull"

function App() {
 
  return (
    <div className="App">

      <Registration/>
      <Users/>  
      <NewsFull/>
    </div>
  );
    }


export default App;
