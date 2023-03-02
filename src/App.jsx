import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ForgotPassword from 'src/screens/auth/ForgotPassword';
import Login from 'src/screens/auth/Login';
import SignUp from 'src/screens/auth/SignUp';
import Dashboard from 'src/screens/Dashboard';
import HomePage from 'src/screens/HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/password-reset' element={<ForgotPassword />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App
