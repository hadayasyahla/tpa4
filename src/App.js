import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './componens/Navigation';
import Home from './componens/Home';
import About from './componens/About';
import Myskil from './componens/Myskil';
// import Profile from './componens/Profile';
import Artikel from './componens/Artikel';
import Footer from './componens/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='myskil' element={<Myskil/>}/>
      <Route path='artikel' element={<Artikel/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
