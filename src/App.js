import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import pages
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Review from './pages/mainReview.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SignUp from './pages/SignUp.jsx';
//import styles
import './styles/index.css'

// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/sign-in' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
