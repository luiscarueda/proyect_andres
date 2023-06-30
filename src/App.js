import './App.css';
import { Navbar, Aboutus ,Aboutme, Video, Programming, Gallery, Contact} from './containers';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutus/>
      <Aboutme/>
      <Video/>
      <Programming/>
      <Gallery/>
      <Contact/>

    </div>
  );
}

export default App;
