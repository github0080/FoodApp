import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PinDropIcon from '@material-ui/icons/PinDrop';
import IconButton from '@material-ui/core/IconButton';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { Typography } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
 root: {
 flexGrow: 1,
 },
 paper: {
 padding: theme.spacing(1),
 textAlign: 'center',
 color: theme.palette.text.primary,
 //backgroundColor: '#635ee7',
 //display:'inline-list-item'
 },
}));


 
export default function NestedGrid({phone, location, seat}) {
 const classes = useStyles(); 
 
 
 function FormRow({pindrop,phoneicon}) {
 
 return (
 <React.Fragment>
 <Grid item xs={6} >
        <Paper className={classes.paper}>
            <IconButton aria-label="seats direction">
              { pindrop ? <PinDropIcon fontSize="small" style={{color:'#FF0000'}} /> : <AirlineSeatReclineNormalIcon  fontSize="small" style={{color:'#ff9800'}}/>}
            </IconButton> 
              {pindrop?
            <Typography >
            From: Office2
          
            </Typography>
            :
            <Typography >
            Seats:{seat}
            </Typography>
        }
        </Paper>
 </Grid>

 <Grid item xs={6}>
        <Paper className={classes.paper}>
                <IconButton aria-label="location phone" >
                     { phoneicon ? <PhoneIcon  fontSize="small" style={{color:'#81c784'}}/> : <LocationCityIcon fontSize="small" style={{color:'#2196f3'}}/> }
                </IconButton> 
                {phoneicon?
                <Typography >
               {phone}
                </Typography>
                :
                <Typography >
                To:{location}
                </Typography>
        }
        </Paper>
 </Grid>
 </React.Fragment>
 );
 }
 
 return (
 <div className={classes.root}>
 <Grid container spacing={1}>
 <Grid container item xs={12} spacing={1}>
 <FormRow pindrop/>
 </Grid>
 <Grid container item xs={12} spacing={1}>
 <FormRow phoneicon/>
 </Grid>
 </Grid>
 </div>
 );
}