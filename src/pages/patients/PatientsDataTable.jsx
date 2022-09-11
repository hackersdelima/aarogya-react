import { width } from '@mui/system';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Datatable from '../../components/datatable/Datatable'

import { rows, columns } from '../../datatablesource.js'
import axios from 'axios'
import {PATIENTS_ALL_API} from '../../components/constants.js'
import { getBearerHeaderValue } from '../../service/userservice';

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
        field: 'bloodGroup',
        headerName: 'Blood Group',
        width: 90
    },
    {
        field: 'dob',
        headerName: 'Date Of Birth',
        width: 130
    }
];

const PatientsDataTable = () => {
    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
            const response = axios.get(PATIENTS_ALL_API,
            {headers:{
                'Authorization' : getBearerHeaderValue()
            }}).then(
                res => {
                    setPatients(res.data.data);
                }
            ).catch(err =>{
                console.log(err);
            });
    }

    useEffect(() => {
        getPatients()
    }, []);

    return (
        <div className='patientDataTable'>
            <Datatable columns={tableHeaders} rows={patients} />
        </div>
    )
}

export default PatientsDataTable