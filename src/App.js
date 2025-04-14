
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Pages/Home/Home';
import Hero from './Components/Herosection/Hero';


function App() {
  return (
    <div className="App">
      <Home />
      <Hero />
      {/* Add other components here */}
    </div>
  );
}

export default App;