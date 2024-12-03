import logo from './logo.svg';
import './App.css';
import Lamp from './Components/Lamp';
import Cart from './Components/Cart';
import UseEff1 from './Components/UseEff1';
// import UseEff2 from './Components/UseEff2';
import UseEff3 from './Components/UseEff3';
import Header from './Components/Header';
import Layout from './Components/Layout';
import UseRef from './Components/UseRef';
import UseRef2 from './Components/UseRef2';
import RandomGift from './Components/RandomGift';
import Memo from './Components/Memo';
import CouterSate from './Components/CouterState';
import CouterReducer from './Components/CouterReducer';

function App() {
  return (
    <div className="App">
      <Lamp />
      <hr />

      <Cart />
      <hr />

      <UseEff1 />
      <hr />

      {/* <UseEff2 /> */}
      <UseEff3 />
      <hr />

      {/* <Layout /> */}
      <UseRef />
      <hr />

      <UseRef2 />
      <hr />

      <RandomGift />
      <hr />

      <Memo />
      <hr />

      <CouterSate />
      <hr />

      <CouterReducer />
    </div>
  );
}

export default App;
