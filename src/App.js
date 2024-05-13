import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Banner } from './component/Banner';
import { Markting } from './component/Markting';
import { Companys } from './component/Companys';
import { Influencer } from './component/Influencer';
import { Smartools } from './component/Smartools';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Markting/>
    <Companys/>
    <Influencer/>
    <Smartools/>

    </>
  );
}

export default App;
