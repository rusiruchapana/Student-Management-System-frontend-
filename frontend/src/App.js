import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FormEntry from './components/FormEntry';


function App() {
  return (
    <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Student />} />
                <Route path='/new' element={<FormEntry />} />
                
            </Routes>
        </BrowserRouter>
        
        
    </>
  );
}

export default App;
