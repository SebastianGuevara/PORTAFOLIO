import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import Language from './components/Language';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Body/>
      <Language/>
    </div>
  );
}

export default App;
