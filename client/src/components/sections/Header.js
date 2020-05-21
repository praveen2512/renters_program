import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../resources/images/logo-light.png';

export default class Header extends Component {
    render() {

        const { logout } = this.props;

        return (
            <div>
                <AppBar position="static" >
                    <Toolbar>

                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <a href="https://solartis.com" target="_blank">
                                <img src={Logo}></img>
                            </a>
                        </Typography>
                        <Button color="inherit" onClick={logout} title="Logout">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
