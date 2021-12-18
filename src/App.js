import { BrowserRouter, Route, Switch, Router, useNavigate } from 'react-router-dom'
import Home from './pages/home';
import { createBrowserHistory } from 'history';  

function App() {
const history = createBrowserHistory()
  return (
    <Router   history = {history} basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route  path='/' component={Home } />        
      </Switch>
    </Router>
  );
}

export default App;
