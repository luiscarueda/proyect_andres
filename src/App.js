import './App.css';
import { Navbar, Header, Aboutme, Video, Programming, Gallery, Contact, Calendar} from './containers';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Aboutme/>
      <Calendar/>
      <Video/>
      <Programming/>
      <Gallery/>
      <Contact/>

    </div>
  );
}

export default App;
