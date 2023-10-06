import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import FeaturePost from './pages/FeaturePost';
import Footer from './pages/Footer';
import GiveAHand from './pages/GiveAHand';
import Home from './pages/Home'
import Photoss from './pages/Photoss';
import Testimonials from './pages/Testimonials';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <AboutUs/>
        <FeaturePost/>
        <Photoss/>
        <Testimonials/>
        <GiveAHand/>
        <Footer/>
    </div>
  );
}

export default App;
