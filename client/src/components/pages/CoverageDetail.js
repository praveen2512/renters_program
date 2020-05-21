import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core/';
import Footer from '../sections/Footer';

export default class CoverageDetail extends React.Component {

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
          <CardHeader title="Coverage Details" >
          </CardHeader>
          <hr className="card-title-hr" />
          <CardContent>
            <h5 className="subheading">Plan</h5>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl className="custom-form-control">
                  <InputLabel id="demo-simple-select-label">Select a Plan you prefer</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={values.plan}
                    onChange={handleChange('plan')}
                  >
                    <MenuItem value="Standard">Standard</MenuItem>
                    <MenuItem value="Preferred">Preferred</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <h5 className="subheading">Personal Property Coverage</h5>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl className="custom-form-control">
                  <InputLabel id="demo-simple-select-label">How much Personal Property Coverage do you need?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={values.personalPropertyCoverage}
                    onChange={handleChange('personalPropertyCoverage')}
                  >
                    <MenuItem value="50,000">50,000</MenuItem>
                    <MenuItem value="75,000">75,000</MenuItem>
                    <MenuItem value="100,000">100,000</MenuItem>
                    <MenuItem value="125,000">125,000</MenuItem>
                    <MenuItem value="150,000">150,000</MenuItem>
                    <MenuItem value="200,000">200,000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl className="custom-form-control">
                  <InputLabel id="demo-simple-select-label">What is the construction of the Building you live in?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={values.constructionType}
                    onChange={handleChange('constructionType')}
                  >
                    <MenuItem value="Frame">Frame</MenuItem>
                    <MenuItem value="Brick">Brick</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl className="custom-form-control">
                  <InputLabel id="demo-simple-select-label">What deductible would you like for your Personal Property Coverage?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={values.personalPropertyCoverageDeductible}
                    onChange={handleChange('personalPropertyCoverageDeductible')}
                  >
                    <MenuItem value="100">100</MenuItem>
                    <MenuItem value="250">250</MenuItem>
                    <MenuItem value="500">500</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <h5 className="subheading">Liability Coverage</h5>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl className="custom-form-control">
                  <InputLabel id="demo-simple-select-label">How much Liability coverage do you want?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={values.liabilityCoverageLimit}
                    onChange={handleChange('liabilityCoverageLimit')}
                  >
                    <MenuItem value="100,000">100,000</MenuItem>
                    <MenuItem value="300,000">300,000</MenuItem>
                    <MenuItem value="500,000">500,000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  placeholder="What is your current age? "
                  label="Age"
                  onChange={handleChange('age')}
                  defaultValue={values.age}
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
