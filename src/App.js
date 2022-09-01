
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App(props) {
  return (
    <div>
        <Navbar title="Demo"/>
        <div className="container"><Textform heading="Enter Your Text"/></div>
    </div>
    
  );
}

export default App;
