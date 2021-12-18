import { BrowserRouter, Route, Routes, Router, useNavigate } from 'react-router-dom'
import Home from './pages/home';
import { createBrowserHistory } from 'history';  

function App() {
const history = createBrowserHistory()
  return (
    <BrowserRouter   history = {history} basename={"/"}  >
      <Routes>
        <Route  path='/' element={<Home/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
