import Dashboard  from './pages/dashboard';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
     <Routes>
      <Route path="/" element={<Dashboard />} />
     </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
