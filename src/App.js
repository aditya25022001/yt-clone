import './App.css';
import { Navigation } from './components/Navigation';
import { SideBar } from './components/SideBar';
import { Videos } from './components/Videos';
import { SearchPage } from './components/SearchPage';
import { Dropdown } from './components/Dropdown';
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
