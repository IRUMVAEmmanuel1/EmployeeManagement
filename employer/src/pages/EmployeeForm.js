// import React,{ useState,useEffect} from 'react'
// import Grid from '@material-ui/core/Grid';
// import {useForm, Form} from '../components/useForm';
// import Controls from './../components/controls/Controls'
// import * as employeeServices from './../services/employeeServices'
// const genderItems = [
//     {id:'male',title:'Male'},
//     {id:'female',title:'Female'},
//     {id:'other',title:'Other'},
// ]

// const initialFValues ={
//     id:0,
//     fullName:'',
//     email:'',
//     mobile:'',
//     city:'',
//     gender:'',
//     departmentId:'',
//     hireDate:'',
//     isPermanent:false,

// }
// export default function EmployeeForm() {
//    const validate =()=>{
//        let temp={}
//        temp.fullName = values.fullName?"":"This field is required"
//        temp.email = (/$|.+@.+..+/).test(values.email)?"":"Email is not valid"
//        temp.mobile = values.length>9?"":"Minimum 10 is Numbers"
//        temp.departmentId = values.departmentId.length != 0 ?"":"This field is required"
//      setErrors({
//          ...temp
//      })
   
//      return Object.values(temp).every(x => x== "")


//     }
//     const {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange
//     } = useForm(initialFValues); 

//     const handleSubmit = e =>{
//         e.preventDefault()
//         if(validate())
//      window.alert('testing...')   
//     }
    
//     return (
        
//     <Form onSubmit={handleSubmit}>
//     <Grid container>
//         <Grid item xs={6}>
//             <Controls.Input 
//               name="FullName"
//               label="Full Name"
//               value={values.FullName}
//               onChange = {handleInputChange} />
             
//               <Controls.Input 
//              label="Email" 
//              name="email"
//              value={values.email}
//              onChange = {handleInputChange} 
//              />
//               <Controls.Input 
//              label="Mobile"
//              name="mobile"
//              value={values.mobile}
//              onChange = {handleInputChange} 
//              />
//              <Controls.Input 
//              label="City" 
//              name="city"
//              value={values.city}
//              onChange = {handleInputChange} 
//              />
//             </Grid>
//            <Grid item xs={6}>
//        <Controls.RadioGroup 
//           name="gender"
//           label="Gender"
//           value={values.gender}
//           onChange={handleInputChange}
//           items={genderItems}
//        />        
               
//       <Controls.Select
//       name="departmentId"
//       label="Department"
//       value={values.departmentId}
//       onChange={handleInputChange}
//       options={employeeServices.getDepartmentCollection()}
//       />      
       
//        <Controls.DatePicker 
//       name="HireDate"
//       label="Hire Date"
//     //   type="datetime-local"
//       value={values.hireDate}
//       onChange={handleInputChange}
//            />

//       <Controls.Checkbox
//       name="isPermanent"
//       label="Permanent Employee"
//       value={values.isPermanent}
//       onChange={handleInputChange}
//            />
       
//        <div>
//            <Controls.Button
//            type="submit"
//            text="Submit"
          
//            />
//            <Controls.Button
//            text="Reset"
//            color="default"
          
//            />
//        </div>

//            </Grid>
//         </Grid>
//     </Form>    
//     )
// }
