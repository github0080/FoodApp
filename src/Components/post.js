import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState(0);
  const [seat, setSeat] = React.useState(0);
  //const [date, setDate] = React.useState();
  const [location, setLocation] = React.useState('');
  const handleChangeName = (event) => {
      event.preventDefault();
      setName(event.target.value);
  };



  const handleSubmit = () => {
   // setDate(new Date())
   let date = new Date();
   
   
    const data = {
        name,
        phone,
        seat,
        location,
        date 
    }
  
    fetch( "http://localhost:3000/api/v1/stats", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

  }
  

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <div>
        <TextField
          id="filled-name"
          label="Name"
          placeholder='Enter Name'
          value={name}
          onChange={handleChangeName}
          variant="filled"

        />
        <TextField
          id="filled-uncontrolled"
          label="Phone"
          //defaultValue="foo"
          placeholder = "Phone"
          variant="filled"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
         // label="Seat"
          placeholder='Enter seats'
          value={seat}
          onChange={(e) => {setSeat(e.target.value)}}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
         // label="Location"
         placeholder='Enter Location'
          value={location}
          onChange={(e) => {setLocation (e.target.value)}}
        //  defaultValue="foo"
          variant="outlined"
        />

        <Button onClick={handleSubmit} 
        variant="contained" 
        color="primary"
        > Save form </Button>
      </div>
    </form>
  );
}