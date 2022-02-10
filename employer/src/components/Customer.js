import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '47ch',
    },
    
  },
  display:{
      // fontFamily:'arial',
  },
}));
function Customer() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div className="container-fluid p-0" bgcolor="background.paper">
    <h1 className="display">   APPLICATION FOR USE OF UR KCEV SPACE</h1>
    <h5>Application's Information</h5>
    {''}{''}
    
      <div className="row">
        <div className="col-5">
        <TextField
          required
          id="outlined-required"
          label="Client Name"
          defaultValue="Emmanuel IRUMVA"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue="Muhima"
          variant="outlined"
        />
       <h5>Applicant's Information</h5>
      <p>Akagera Hall<Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Kigali Hall<Checkbox
      defaultChecked
      color="primary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
      <br />
      Virunga Hall <Checkbox
        // defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> 
      </p> 
      
        </div>
        <div className="col-5">
        {''} {''}
          <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="emmanuelirumva1@gmail.com"
          variant="outlined"
        />
        
          <TextField
          required
          id="outlined-required"
          label="Telephone"
          defaultValue="+250788204546"
          variant="outlined"
        />
        <p>Akagera Hall<Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Kigali Hall<Checkbox
      defaultChecked
      color="primary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
      <br />
      Virunga Hall <Checkbox
        // defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> 
      </p> 
        {''} {''}
        </div>
      </div>
     
      
    </div>
    </form>
  )
}

export default Customer
