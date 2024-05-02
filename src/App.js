import React ,{useContext}from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Startuppage from './components/Startuppage/Startuppage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login'
import { AuthProvider,AuthContext } from './components/context/AuthContext';
//import SignUp from './components/signup/Signup'
import UserRegistration from './components/userRegisteration/UserRegistration'
import Objectives from './components/Objectives/Objectives'
import StartupProfiles from './components/investor/Investor'
import InvestorLogin from './components/Login/InvestorLogin'
import InvestorRegistration from './components/userRegisteration/InvestorRegistration'
import InvestorProfiles from './components/Startuppage/Startuppage'
import StartupProfile from './components/StartupFrontPage/StartupProfilepage'
import InvestorProfile from './components/InvestorProfilePage/InvestorProfilePage'
import AboutUs from './components/Aboutus/About'
const App = () => {
  return (
    <div className='app'>
      {" "}
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={ <Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/startup" element={<Startuppage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ilogin" element={<InvestorLogin />} />
          {/*<Route path="/signup" element={<SignUp />} />*/}
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/objectives" element={<Objectives/>}/>
          <Route path="/startup/register" element={<UserRegistration />} />
          <Route path="/investor/register" element={<InvestorRegistration />} />
          <Route path="/investors" element={<InvestorProfiles />} />
          <Route path="/startups" element={<StartupProfiles />} />
          <Route path="/startup/me" element={<StartupProfile/>}/>
          <Route path="/investor/me" element={<InvestorProfile/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App
