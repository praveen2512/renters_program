import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Footer from '../sections/Footer';
import { Grid } from '@material-ui/core/';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

export default class PolicyDetail extends React.Component {

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
          <CardHeader title="Policy Details" >
          </CardHeader>
          <hr className="card-title-hr"/>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="What Type of Insurance do you need?"
                  label="Insurance Type"
                  onChange={handleChange('insuranceType')}
                  defaultValue={values.insuranceType}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="When would you like the policy to start? "
                  label="Policy Start Date"
                  type="date"
                  onChange={handleChange('policyStartDate')}
                  defaultValue={values.policyStartDate}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
            </Grid>
            {/*<TextField
              placeholder="What Type of Insurance do you need?"
              label="Insurance Type"
              onChange={handleChange('insuranceType')}
              defaultValue={values.insuranceType}
              margin="normal"
              fullWidth
            />
            <br />
            {/*<TextField
            placeholder="When would you like the policy to start? "
            label="Policy Start Date"
            onChange={handleChange('policyStartDate')}
            defaultValue={values.policyStartDate}
            margin="normal"
            fullWidth
          />
            <TextField
              placeholder="When would you like the policy to start? "
              label="Policy Start Date"
              type="date"
              onChange={handleChange('policyStartDate')}
              defaultValue={values.policyStartDate}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={values.policyStartDate}
                onChange={handleChange('policyStartDate')}
                
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>*/}
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
