
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import MoreService from './components/Moreservice';

function App() {
  
  return(

     <Router>
      <Routes>
         <Route path="/" element={<Homepage />} />
          <Route path="/service/:serviceName" element={<MoreService />} />
       </Routes>
       </Router>


  )
}

export default App
