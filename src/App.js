import './App.css';
import { Navigation } from './components/Navigation';
import { SideBar } from './components/SideBar';
import { Videos } from './components/Videos';
import { SearchPage } from './components/SearchPage';
import { Dropdown } from './components/Dropdown';
import { VideoPage } from './components/VideoPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <div className="AppHeader">
          <Navigation className="AppNavigation" />
        </div>
        
        <Switch>
          
          <Route path="/search/:searchTerm">
            <div className="AppBody">
              <SideBar className="AppSidebar"/>
              <SearchPage className="AppSearchPage"/>
            </div>
          </Route>
          
          <Route path="/hello">
            <Dropdown />
          </Route>
          
          <Route path="/watch">
            <VideoPage 
              thumbnailMain="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg"
              titleMain="How to get fit in 30 days"
              details="get fit in 30 days as hell"
              viewsMain="2.3 M views"
              whenMain="5 days ago"
              likes="5.6k"
              dislikes="973"
              channelNameMain="AdiFitness"
              channelImage="https://images.outlookindia.com/public/uploads/articles/2020/1/23/Hrithik_Roshan_570_850.jpg"
              subscribers="1.3M"
            />  
          </Route>

          <Route path="/">
            <div className="AppBody">
              <SideBar className="AppSidebar"/>
              <Videos className="AppVideos"/>
            </div>
          </Route>  

        </Switch>
      </Router>
    </div>
  );
}

export default App;
