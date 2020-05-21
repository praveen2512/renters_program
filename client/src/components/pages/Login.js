import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Paper, Grid } from '@material-ui/core/';
import Logo from '../../resources/images/login-logo.png'

export default class Login extends React.Component {

  render() {
    const { values, handleChange, login } = this.props;

    return (

      <div className="">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper style={{ height: "100vh", backgroundColor: "#132c51" }}>
                <div className="col-md-6 login-aside" style={{ backgroundImage: "URL(../../resources/images/login-bg-1.jpg)" }}>
                  <div className="row">
                    <div className="col-md-5 ">
                      <a className="kt-login__logo">
                        <img alt="Solartis" src={Logo} className="login-logo-big" width="171" />
                      </a>
                    </div>
                  </div>
                  <div className="row grid-item">
                    <div className="item-middle">
                      <h3 className="title">Welcome to Solartis Insure!</h3>
                      <h4 className="subtitle">We Transform Your Insurance Policy Administration.</h4>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="login-copyright col-md-6">
                      © 2020 Solartis. All Rights Reserved.
                </div>
                    <span className="login-copyright col-md-6">
                      <a href="https://www.solartis.com/privacy-policy/" className="pull-right" target="_blank">Privacy</a>
                      <a href="https://www.solartis.com/legal/" className="pull-right" target="_blank">Terms</a>
                    </span>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              {/*<Card>*/}
              <CardHeader title="Login" >
              </CardHeader>
              <CardContent className="">
                <TextField
                  placeholder="Username"
                  label="Username"
                  onChange={handleChange('userName')}
                  defaultValue={values.userName}
                  margin="normal"
                  fullWidth
                  required
                />
                <br />
                <TextField
                  placeholder="Password"
                  label="Password"
                  type="password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  margin="normal"
                  fullWidth
                  required
                />

                <br />
                <div>
                  <a href="/quote">Login</a>
                  <Button
                    className="pull-right"
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={login}
                  >Login</Button>
                </div>
              </CardContent>
              {/*</Card>*/}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
