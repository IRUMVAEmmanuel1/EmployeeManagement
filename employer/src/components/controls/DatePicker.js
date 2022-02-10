import 'date-fns';
import React,{useStates} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker(props) {
  // The first commit of Material-UI
  const {name, label, value, onChange} = props
  const [selectedDate, handleDateChange] = React.useState(new Date('2021-06-18T21:11:54'));

  const convertToDefEventPara = (name, value) => ({
    target:{
        name,value
    }
  })

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker  variant="inline" 
          inputVariant="outlined"
          autoOk
          margin="normal"
    
          label="Hired Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
    </MuiPickersUtilsProvider>
  );
}