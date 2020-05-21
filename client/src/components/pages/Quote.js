import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
import PolicyDetail from './PolicyDetail';
import InsuredDetail from './InsuredDetail';
import LocationDetail from './LocationDetail';
import CoverageDetail from './CoverageDetail'
import Success from './Success';
import Navigation from '../sections/Navigation';
import { CircularProgress }  from '@material-ui/core';

export default class Quote extends Component {

  state = {
    step: 1,
    loading: false,
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
    this.setState({
      loading: true
    });
    const { step } = this.state;
    this.setState({
      step: step + 1,
      loading: false
    });
  };

  // Go back to prev step
  prevStep = () => {
    console.log("inside preivous step");
    this.setState({
      loading: true
    });
    
    const { step } = this.state;
    this.setState({
      step: step - 1,
      loading: false
    });
  };

  jumpToStep = (step) => {
    this.setState({
      step: step
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {

    if (!this.props.isLoggedIn) {
      // return <Redirect to="/login"/>
    }
    if(this.state.loading){
      return <CircularProgress />
    }

    const { step } = this.state;
    const {
      insuranceType, policyStartDate, firstName, lastName, email, phone, address1, address2, city, state, zipcode, plan, personalPropertyCoverage, constructionType, personalPropertyCoverageDeductible, liabilityCoverageLimit, age
    } = this.state;
    const values = {
      insuranceType, policyStartDate, firstName, lastName, email, phone, address1, address2, city, state, zipcode, plan, personalPropertyCoverage, constructionType, personalPropertyCoverageDeductible, liabilityCoverageLimit, age
    };



    switch (step) {
      case 1:
        return (
          <React.Fragment>
            <Navigation step={this.state.step} jumpToStep={this.jumpToStep} />
            <PolicyDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Navigation step={this.state.step} jumpToStep={this.jumpToStep} />
            <InsuredDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case 0:
        return (
          <React.Fragment>
            <Navigation step={this.state.step} jumpToStep={this.jumpToStep} />
            <LocationDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <Navigation step={this.state.step} jumpToStep={this.jumpToStep} />
            <CoverageDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <Navigation step={this.state.step} jumpToStep={this.jumpToStep} />
            <Success prevStep={this.prevStep} values={values} />;
          </React.Fragment>
        )  
      default:
        return <h1>404 Page Not Found!!!</h1>
    }
  }
}
