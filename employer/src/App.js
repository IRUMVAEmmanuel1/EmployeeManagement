import React from 'react'
import Icon from '@material-ui/core/Icon';
import Header from './components/Header'
import Customer from './components/Customer'
import Try from './components/Try'
// import SideMenu from './components/SideMenu'
// import { CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core';
// import Employees from './pages/Employees' 
// import customerInfo from './customer/customerInfo'
// import './App.css';
// import {makeStyles} from '@material-ui/core'
// const theme = createMuiTheme({
//   palette:{
//     primary:{
//       main:"#333996",
//       light:'#3c44b126'
//     },
//     secondary:{
//       main:'#f8324526'
//     },
//     background:{
//       default:'#f4f5fd'
//     },
//     overrides:{
//       MuiAppBar:{
//         root:{
//           transform:'translateZ(0)'
//         }
//       }
//     },
//     props:{
//       MuiIconButton:{
//         disableRipple:true
//       }
//     }
//   }
// })
// const useStyles = makeStyles({
//   appMain:{
//     paddingLeft: '320px',
//     width:'100%'
//   }
// })
function App() {
  // const classes = useStyles();
  return (
   <>
   <div>
    {/* <div className={classes.appMain}> */}
       <Try/>
      {/* <Header/>
     <Customer/> */}
      {/* <Employees /> */}
      </div> 
    {/* <CssBaseline/>  */}
 
   </>
     
    
    
   
  );
  }

export default App;
