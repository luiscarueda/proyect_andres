import './App.css';
import { Navbar, Header, Aboutme, Video, Programming, Gallery, Contact, Calendar} from './containers';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Video/>
      <Header/>
      <Calendar/>
      <Programming/>
      <Gallery/>
      <Aboutme/>
      <Contact/>

    </div>
  );
}

export default App;
