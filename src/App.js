import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Review from './pages/mainReview.jsx';
import BootcampWidgets from './pages/BootcampWidgets.jsx';
import BootcampDetails from './pages/Bootcamp.jsx';  // Import the Bootcamp details page
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/bootcamps" element={<BootcampWidgets />} />
        {/* Add dynamic route for bootcamp details */}
        <Route path="/bootcamps/:bootcampId" element={<BootcampDetails/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
