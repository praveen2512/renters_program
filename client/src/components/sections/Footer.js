import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

export default class Footer extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        return (
            <div>
                <Button
                    className="pull-left"
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                    startIcon={<ArrowBackIos />}
                >Back</Button>

                <Button
                    className="pull-right"
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    endIcon={<ArrowForwardIos />}
                >Next</Button>
            </div>
        )
    }
}
