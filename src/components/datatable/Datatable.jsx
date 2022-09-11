import React from 'react'

import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';


const Datatable = (props) => {
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
           return <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        }
    }];

    return (
        <div className="datatable" style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={props.columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}


export default Datatable