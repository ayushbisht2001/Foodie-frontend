import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Home from './pages/home';
function App() {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route  path='/' element={<Home/>}/>        
      </Routes>
    </Router>
  );
}

export default App;
