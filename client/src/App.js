import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Opportunities from './pages/Opportunities';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Notifications from './pages/Notifications';
import Schedule from './pages/Schedule';
import Connect from './pages/Connect';
import Profile from './pages/Profile';
import Logout from './pages/Logout'
import RSVP from './pages/RSVP'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route 
        path="/about" 
        element={
          <>
          <Navbar />
        <About />
        <Footer />

        </>
        } 
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route 
        path="/signin" 
        element={
          <>
              <Navbar />
              <SignIn />
              
          </>
        } 
        />
        <Route 
        path="/signup" 
        element={
          <>
          <Navbar />
          <SignUp />
          
      </>
        } 
        />
        <Route path="/opportunity" element={<Opportunities />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/profile" element={<Profile />} />
        <Route 
        path="/rsvp" 
        element={
          <>
          <Navbar /> 
          <RSVP/>
        </>
        }/>
        <Route 
        path="/logout" 
        element={
          <>
            <Navbar /> 
            <Logout />
            <Footer />
          </>
        } 
        />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
