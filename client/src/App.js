import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Wrapper from './components/wrapper';
import Landing from './pages/Landing';
import FindAFriend from './pages/FindAFriend';
import International from './pages/International'
import MyWallet from './pages/MyWallet';
// import CurrencyConverter from './pages/CurrencyConverter';
import Reset from '../src/pages/ResetPwd'
import CancelAccount from './pages/CancelAccount';
import RequestData from './pages/RequestData';
import AdminLogin from './pages/AdminLogin';
import AdminSignUp from './pages/AdminSignUp';
import AdminSummary from './pages/AdminSummary';
import TransactionHistory from './pages/TransactionHistory';
import AllUsers from './pages/AllUsers';
import TotalFundsStored from './pages/TotalFundsStored';
import TotalIncome from './pages/TotalIncome';
import Settings from './pages/Settings';

function App(item) {
   
  return (
    <>
    <div>
    <Router>
    <div>
      <Wrapper>
        {/* Unathenticated Pages */}
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/home" component={Landing}/>
        <Route exact path="/reset" component={Reset}/>
        </div>

        {/* Authenticated Pages */}
        <div>
        <Route exact path="/findafriend" component={FindAFriend}/>
        <Route exact path="/mywallet" component={MyWallet}/>
        <Route exact path="/international-payments" component={International}/>
        {/* <Route exact path="/currencyconverter" component={CurrencyConverter}/> */}
        <Route exact path="/cancelaccount" component={CancelAccount}/>
        <Route exact path="/requestdata" component={RequestData}/>
        <Route exact path="/settings" component={Settings}/>
        </div>

        {/* Admin routes */}
        <div>
        <Route exact path="/admin-12152011" component={AdminLogin}/>
        <Route exact path="/admin-sign-up-02121986" component={AdminSignUp}/>
        <Route exact path="/admin-summary" component={AdminSummary}/>
        <Route exact path="/transaction-history" component={TransactionHistory}/>
        <Route exact path="/all-users" component={AllUsers}/>
        <Route exact path="/total-funds-stored" component={TotalFundsStored}/>
        <Route exact path="/total-income" component={TotalIncome}/> 
        </div>
      </Wrapper>
    </div>
    </Router>
    </div>
    </>
  );
}

export default App;