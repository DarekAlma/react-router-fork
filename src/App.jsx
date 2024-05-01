import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import {Home,Contact,Login,Overview} from './pages'
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
       <Routes>    
        <Route path="/" element={<Home/>} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/404" element={<div>Not found</div>} />
        <Route path= "*" element={<Navigate to="/404" replace/>} />    
       </Routes>   
     </Router>
    </AuthProvider>
  )
}

export default App
