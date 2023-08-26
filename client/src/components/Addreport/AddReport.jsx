import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {Button, FormControl, FormGroup, Input, InputLabel, Typography, styled} from '@mui/material'
import { generateReport } from '../../service/api';
// import styled from '@emotion/styled'
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 10px;
  }
  h5{
    margin-top:20px
  }
`;
const AddReport = () => {

    const def = {
        name : '',
        reportname: '',
        rbc:'',
        hemoglobin:'',
        wbc:''
    }
    
    const [user,setUser] = useState(def)

    const onValueChange = (e) => {
        // console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const generatereport = async () => {
      await generateReport(user);
    };


  return (
    <div>
      <Navbar />
      <Typography variant="h2">Enter your report details</Typography>
      <Container>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Report name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='reportname'/>
        </FormControl>
        <Typography variant="h5">
          Please fill up your general reporting attributes
        </Typography>
        <FormControl>
          <InputLabel>RBC</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='rbc'/>
        </FormControl>
        <FormControl>
          <InputLabel>Hemoglobin</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='hemoglobin'/>
        </FormControl>
        <FormControl>
          <InputLabel>WBC</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='wbc'/>
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=>generatereport()}>Get Report</Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default AddReport