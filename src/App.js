import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Review from './pages/mainReview.jsx';
import ContactUs from './pages/ContactUs.jsx';
import SignUp from './pages/SignUp.jsx';
import BootcampWidgets from './pages/BootcampWidgets.jsx';
import BootcampDetails from './pages/Bootcamp.jsx';  // Import the Bootcamp details page
import './styles/index.css';

function App() {
  // Location must be inside the BrowserRouter context
  const location = useLocation();  // Get the current path

  // Define routes where the Header should not be displayed
  const hideHeaderRoutes = ['/sign-in'];

  return (
    <>
      {/* Conditionally render the Header */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/bootcamps" element={<BootcampWidgets />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignUp />} />
        {/* Add dynamic route for bootcamp details */}
        <Route path="/bootcamps/:bootcampId" element={<BootcampDetails/>} />
      </Routes>

      {/* Conditionally render the Footer */}
      {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
