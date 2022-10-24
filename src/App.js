import './App.css';
import AnimatorRoutes from './components/AnimatorRoutes';
import Header from './components/Header';
import Language from './components/Language'
import { BrowserRouter as Router} from 'react-router-dom';
import Background from './components/Background';
import db from './firebase'

function App()
{

  return (
    <div className="App">
      <Router>
        <Header/>
        <Language/>
        <AnimatorRoutes/>
        <Background/>
      </Router>
    </div>
  );
}

export default App;
