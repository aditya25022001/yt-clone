import './App.css';
import { Navigation } from './components/Navigation';
import { SideBar } from './components/SideBar';
import { Videos } from './components/Videos';
import { SearchPage } from './components/SearchPage';
import { Dropdown } from './components/Dropdown';
import { VideoPage } from './components/VideoPage';
import { Feedback } from './components/Feedback';
import { Help } from './components/Help';
import { Report } from './components/Report'
import { Settings } from './components/Settings';
import { Account } from './components/Account';
import { Notification } from './components/Notification';
import { Playback } from './components/Playback';
import { Privacy } from './components/Privacy';
import { ConnectedApps } from './components/ConnectedApps';
import { ConnectGameTemplate } from './components/ConnectGameTemplate';
import { Advanced } from './components/Advanced';
import { Billing } from './components/Billing';
import { Premium } from './components/Premium';
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
              totalComments="5"
            />  
          </Route>

          <Route path="/feedback">
            <div className="AppBody_feedback">
              <SideBar className="AppSidebar"/>
              <Videos className="AppVideos"/>
            </div>
            <div className="feedback_box">
              <Feedback className="feedback_box_main" />
            </div>
          </Route>

          <Route path="/help">
            <div className="AppBody_help">
              <SideBar className="AppSidebar"/>
              <Videos className="AppVideos"/>
            </div>
              <Help className="help_box_main" />
          </Route>

          <Route path="/report">
            <div className="AppBody_report">
              <div className="AppSidebar_report" ><SideBar/></div>
              <Report />
            </div>
          </Route>

          <Route path="/settings/account">
              <Account className="account_main_div"
                  email="adityaubale63@gmail.com"
                  name="Aditya Uday Ubale"
                  chImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              />
          </Route>

          <Route path="/settings/notifications">
            <Notification email="adityaubale63@gmail.com"/>
          </Route>

          <Route path="/settings/playback_and_performance">
            <Playback />
          </Route>

          <Route path="/settings/privacy">
            <Privacy />
          </Route>

          <Route path="/settings/connected_apps/connect">
            <div className="connect_to_game_back">
              <ConnectedApps />
            </div>
            <div className="connect_to_game">
              <ConnectGameTemplate
              gameImage="https://desktopwalls.net/wp-content/uploads/2016/06/EA%20Games%20Logo%20Dragon%20Blood%20Desktop%20Wallpaper.jpg"
              accountImage="https://lh3.googleusercontent.com/ogw/ADGmqu9k6epTjqzx9EQlSABN8mVjuuBPLlWPfJD2V8Yhhg=s32-c-mo"
              name="Aditya Uday Ubale"
              />
            </div>
          </Route>
          
          <Route path="/settings/connected_apps">
            <ConnectedApps />
          </Route>

          <Route path="/settings/advanced_settings">
            <Advanced />
          </Route>

          <Route path="/settings/billing_and_payments">
            <Billing />
          </Route>
          
          <Route path="/settings">
            <Settings />
          </Route>

          <Route path="/buy_premium">
            <Premium />
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
