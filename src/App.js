import './App.css';
import { Navigation } from './components/Navigation';
import { SideBar } from './components/SideBar';
import { Videos } from './components/Videos';

function App() {
  return (
    <body>
      <div className="AppHeader">
        <Navigation />
      </div>
      <div className="AppBody">
        <SideBar className="sidebar"/>
        <Videos />
      </div>
    </body>
  );
}

export default App;
