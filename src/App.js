import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import Habits from './pages/Habits/Habits';
import Today from './pages/Today/Today';
import History from './pages/History/History';
import GlobalStyle from './assets/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='cadastro' element={ <Register/> }/>
        <Route path='habitos' element={ <Habits/> }/>
        <Route path='hoje' element={ <Today/> }/>
        <Route path='historico' element={ <History/> } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
