import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {
    const rows = [
        {
            id: 1,
            name: "Shishir Karki",
            dob: "1994-11-11",
            gender: "M",
            address: "Kirtipur, Kathmandu",
            image: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
            type:"EMERGENCY"
        },
        {
            id: 2,
            name: "Shishir Karki",
            dob: "1994-11-11",
            gender: "M",
            address: "Kirtipur, Kathmandu",
            image: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
            type:"OUT-PATIENT"
        },
        {
            id: 3,
            name: "Shishir Karki",
            dob: "1994-11-11",
            gender: "M",
            address: "Kirtipur, Kathmandu",
            image: "https://cdn4.buysellads.net/uu/1/122891/1662660010-carbon.jpg",
            type:"IN-PATIENT"
        }
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">DOB</TableCell>
                        <TableCell className="tableCell">Gender</TableCell>
                        <TableCell className="tableCell">Image</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}>
                            <TableCell >{row.id}</TableCell>
                            <TableCell className="tableCell">{row.name}</TableCell>
                            <TableCell className="tableCell">{row.dob}</TableCell>
                            <TableCell className="tableCell">{row.gender}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.image} className="image" />
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.type}`}>{row.type}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableList