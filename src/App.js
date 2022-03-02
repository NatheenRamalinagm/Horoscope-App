import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Horoscope from './components/Horoscope';


function App() {
  return (
    <div className='App'>
    <ToastContainer position='top-center'/>
     <Horoscope/>
    </div>
  );
}

export default App;
