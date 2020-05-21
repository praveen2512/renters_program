import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core/';
import Footer from '../sections/Footer';

export default class LocationDetail extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <Card>
          <CardHeader title="Location Details" >
          </CardHeader>
          <hr className="card-title-hr" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="Enter your Address 1"
                  label="Address 1"
                  onChange={handleChange('address1')}
                  defaultValue={values.address1}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="Enter your Address 2"
                  label="Address 2"
                  onChange={handleChange('address2')}
                  defaultValue={values.address2}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="Enter your City"
                  label="City"
                  onChange={handleChange('city')}
                  defaultValue={values.city}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="Select your State"
                  label="State"
                  onChange={handleChange('state')}
                  defaultValue={values.state}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="Select your Zipcode"
                  label="Zipcode"
                  onChange={handleChange('zipcode')}
                  defaultValue={values.zipcode}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>

            <br />

            <Footer
              nextStep={this.props.nextStep}
              prevStep={this.props.prevStep} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
