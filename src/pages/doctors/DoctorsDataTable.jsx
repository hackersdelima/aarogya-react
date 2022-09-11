import { width } from '@mui/system';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Datatable from '../../components/datatable/Datatable'

import { rows, columns } from '../../datatablesource.js'
import axios from 'axios'
import {PATIENTS_ALL_API} from '../../components/constants.js'
import { getBearerHeaderValue } from '../../service/userservice';
import { DOCTORS_ALL_API } from '../../components/constants.js';

const tableHeaders = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Full name', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        sortable: false,
        width: 130,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 90
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 180
    },
    {
        field: 'dob',
        headerName: 'Date Of Birth',
        width: 130
    }
];

const DoctorsDataTable = () => {
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
            const response = axios.get(DOCTORS_ALL_API,
            {headers:{
                'Authorization' : getBearerHeaderValue()
            }}).then(
                res => {
                    setDoctors(res.data.data);
                }
            ).catch(err =>{
                console.log(err);
            });
    }

    useEffect(() => {
        getDoctors()
    }, []);

    return (
        <div className='patientDataTable'>
            <Datatable columns={tableHeaders} rows={doctors} />
        </div>
    )
}

export default DoctorsDataTable