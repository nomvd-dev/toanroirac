import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarSection from './components/NavbarSection';
import Logic from './pages/Logic';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <BrowserRouter>
      <NavbarSection />
      <Switch>
        <Route path="/toanroirac/logic" component={Logic} />
        <Route path="/toanroirac" component={Home} />
      </Switch>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
