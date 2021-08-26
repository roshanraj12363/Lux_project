
import './App.css';
import TextEditor from "./components/TextEditor";
import Stylesheet from './components/Stylesheet';
import Images from './image';



function App() {
  return (
    <div className="App">

      <Stylesheet />
      <div className="editor">
        <TextEditor/>
        <Images />
      </div>
      
      
    </div>

  );
}

export default App;
