import Graphic from './components/Graphic.jsx';
import Nav from './components/Nav.jsx'
import Statics from './components/Statics.jsx';
import SubMenu from './components/SubMenu.jsx';
import Tasks from './components/Tasks.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <SubMenu />
      <Tasks />
      <Statics />
      <Graphic />
    </div>
  );
}

export default App;
