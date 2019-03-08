import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Table.scss';

export default ({ rows, columns }) => {
    return (
        <ReactTable
            data={rows}
            columns={columns}
            defaultPageSize={10}
            minRows={5}
        />
    );
};
