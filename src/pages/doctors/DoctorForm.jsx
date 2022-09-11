import React from 'react'
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import axios from 'axios';
import { getBearerHeaderValue } from '../../service/userservice';
import { DOCTORS_CREATE_API, USER_INFO_STORAGE_KEY } from '../../components/constants';

const DoctorForm = () => {
    const [gender, setGender] = useState('M');
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [bloodGroup, setBloodGroup] = useState(null);
    const [alternatePhone, setAlternatePhone] = useState(null);
    const status = 'TRUE';
    const type = 'DOCTOR';

    function save() {
        let item = { type, gender, name, email, phone, address, bloodGroup, alternatePhone, status };
        const response = axios.post(DOCTORS_CREATE_API, item,
            {
                headers: {
                    'Authorization': getBearerHeaderValue()
                }
            }).then(
                res => {
                    console.log('Doctor created');
                }
            ).catch(err => {
                console.log(err);
            });
    }

    const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textStyle = { paddingBottom: 20, marginTop: 20 }
    return (
        <div className="loginContainer">
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>

                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender"
                        label="Gender"
                        onKeyUp={(e) => {
                            setGender(e.target.value)
                        }}
                    >
                        <MenuItem value='M'>Male</MenuItem>
                        <MenuItem value='F'>Female</MenuItem>
                        <MenuItem value='O'>Other</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>

                <TextField label='Full Name' placeholder='Enter full name' variant='standard' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setName(e.target.value)
                    }} />
                <TextField label='Phone' placeholder='Enter phone' variant='standard' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setPhone(e.target.value)
                    }}
                />
                <TextField label='Alternate Phone' placeholder='Enter alt phone' variant='standard' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setAlternatePhone(e.target.value)
                    }}
                />
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>

                <TextField label='Email' placeholder='Enter email' variant='standard' type='email' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setEmail(e.target.value)
                    }} />
                <TextField label='Address' placeholder='Enter address' variant='standard' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setAddress(e.target.value)
                    }}
                />
                <TextField label='Blood Group' placeholder='Enter blood grp' variant='standard' style={textStyle} fullWidth
                    onKeyUp={(e) => {
                        setBloodGroup(e.target.value)
                    }}
                />

            </FormControl>

            <Button type='submit' color='primary' fullWidth variant='contained' onClick={save}
            >Register</Button>
        </div>
    )
}

export default DoctorForm