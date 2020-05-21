import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';

import {CheckCircle, PlaylistAddCheck } from '@material-ui/icons';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export default function Navigation(props) {

    let navList = [{step:1, title: 'Policy Details', icon: PlaylistAddCheck, visited: true},
               {step:2, title: 'Insured Details', icon: PlaylistAddCheck, visited: false},
            //    {step:3, title: 'Location Details', icon: NearMe, visited: false},
               {step:3, title: 'Coverage Details', icon: PlaylistAddCheck, visited: false},
               {step:4, title: 'Summary', icon: CheckCircle, visited: false}];

    return (
        <div className="container">
            <Breadcrumbs aria-label="breadcrumb">
                    {
                        navList.map((nav) => {
                            //var disabled = false
                            console.log("STEP ", props.step);
                            if(nav.step > props.step){
                                //disabled = true;
                                return (
                                    <StyledBreadcrumb key={nav.step} icon={<HomeIcon fontSize="small" />} component="a" href="#" label={nav.title} onClick={() => props.jumpToStep(nav.step)} 
                                    disabled/>
                                )
                            }
                            else{
                                return (
                                    <StyledBreadcrumb key={nav.step} icon={<HomeIcon fontSize="small" />} component="a" href="#" label={nav.title} onClick={() => props.jumpToStep(nav.step)} 
                                    />
                                )
                            }
                            
                        })
                    }
                
            </Breadcrumbs>
        </div>
    );
}
