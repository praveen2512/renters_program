import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Quote from './components/pages/Quote';
import Login from './components/pages/Login';
import Header from './components/sections/Header';

const initialState = {};

export default class App extends React.Component {

  state = {
    isLoggedIn: true,
    userName: '',
    password: '',
    step: 1,
    insuranceType: '',
    policyStartDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    plan: '',
    personalPropertyCoverage: '',
    constructionType: '',
    personalPropertyCoverageDeductible: '',
    liabilityCoverageLimit: '',
    age: '',
    annualPremium: ''
  };

  // Proceed to next step
  nextStep = () => {
    console.log("inside next step");
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    console.log("inside preivous step");
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  login = () => {
    console.log("logging in");
    if(this.state.userName === 'praveen' && this.state.password === 'welcome1'){
      console.log("authentication success")
      this.setState({isLoggedIn: true});
      return <Redirect to="/"/>
    }
    else{
      console.log("invalid username or password!!!")
    }
  }

  logout = () => {
    console.log("logging out")
    this.setState({isLoggedIn: false});
    //this.setState(initialState);
    // this.props.history.push('/login');
    return <Redirect to="/login"/>
  }

  render() {

    const {
      isLoggedIn, userName,password, insuranceType, policyStartDate, firstName, lastName, email, phone, address1, address2, city, state, zipcode, plan, personalPropertyCoverage, constructionType, personalPropertyCoverageDeductible, liabilityCoverageLimit, age
    } = this.state;
    const values = {isLoggedIn, userName, password,
      insuranceType, policyStartDate, firstName, lastName, email, phone, address1, address2, city, state, zipcode, plan, personalPropertyCoverage, constructionType, personalPropertyCoverageDeductible, liabilityCoverageLimit, age
    };

    return (
      <div className="App">

        {this.state.isLoggedIn ? <Header logout={this.logout} /> : null }
        <BrowserRouter>
          <Switch>
            <Route path="/login" render={props => <Login login={this.login} values={values} handleChange={this.handleChange}/>} />
            <Route path="/quote" render={props => <Quote isLoggedIn = {this.state.isLoggedIn} />} />
            <Route path="/" component={Quote} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

