import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarSection from './components/NavbarSection';
import Logic from './pages/Logic';
// import FooterSection from './components/FooterSection';
import Quanhe from './pages/Quanhe';
import Search from './pages/Search';
import Boole from './pages/Boole';
import BaiTap from './pages/BaiTap';
import DeThi from './pages/DeThi';

function App() {
  return (
    <BrowserRouter>
      <NavbarSection />
      <Switch>
        <Route path="/toanroirac/logic" component={Logic} />
        <Route path="/toanroirac/quanhe" component={Quanhe} />
        <Route path="/toanroirac/boole" component={Boole} />
        <Route path="/toanroirac/baitap" component={BaiTap} />
        <Route path="/toanroirac/search" component={Search} />
        <Route path="/toanroirac/dethi" component={DeThi} />
        <Route path="/toanroirac" component={Home} />
      </Switch>
      {/* <FooterSection /> */}
    </BrowserRouter>
  );
}

export default App;
