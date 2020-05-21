import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import Footer from '../sections/Footer';

export default class Success extends React.Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { firstName, lastName, email, occupation, city, bio } = this.props.values;

    return (

      <div className="container">
        <Card>
          <CardHeader title="Summary" >
          </CardHeader>
          <hr className="card-title-hr"/>
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem><ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
            </List>

            <br />

            <Footer 
              nextStep={this.props.nextStep}
              prevStep={this.props.prevStep}/>
          </CardContent>
        </Card>
      </div>
    );
  }
}
