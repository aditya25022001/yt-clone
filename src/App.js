import './App.css';
import { Navigation } from './components/Navigation';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <body>
      <div className="AppHeader">
        <Navigation />
      </div>
      <div className="AppSidebar">
        <SideBar />
      </div>
    </body>
  );
}

export default App;
