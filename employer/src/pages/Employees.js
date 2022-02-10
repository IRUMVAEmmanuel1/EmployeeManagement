import React from 'react'
import {paper, makeStyles} from '@material-ui/core'
import EmployeeForm from './EmployeeForm'
import PageHeader from "../components/PageHeader"
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
 const useStyles = makeStyles(theme =>({
    root:{
     pageContent:{
         margin:theme.spacing(5),
         padding: theme.spacing(3)
     }
    }
}))

export default function Employees() {
    const classes = useStyles();
    return (
        <>
        <PageHeader 
      title="New Employee"
      subTitle="Form Design With Validation"
      icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <paper className={classes.pageContent}>
        <EmployeeForm />
        </paper>
        </>
    )
}
