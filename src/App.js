import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Screens';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enquery from './Screens/Enquery';
import PageNotFound from './Screens/PageNotFound/Components/PageNotFound';
import ValidationForm from './Screens/Enquery/components/ValidationForm';
import LocalStorage from './Screens/Enquery/components/LocalStorage';
function App() {
  return (
    <>
      {/* <Home/>
   <Enquery/> */}


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/ContactForm" element={<Enquery />} />
          <Route path="/ValidationForm" element={<ValidationForm />} />
          <Route path="/LocalStorage" element={<LocalStorage/>} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
