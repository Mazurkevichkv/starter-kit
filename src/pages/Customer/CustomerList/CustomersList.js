import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../components/Table/Table';
import './CustomersList.scss';
import routes from '../../../components/Routes/Routes.const';

let i = 0;
function createData(name, calories, fat, carbs, protein) {
    i += 1;
    return { id: i, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const columns = [
    {
        Header: 'Dessert (100g serving)',
        accessor: 'name',
        Cell: ({ original, value }) => (
            <Link to={`${routes.CUSOMERS_LIST}/${original.id}`}>{value}</Link>
        )
    },
    {
        Header: 'Calories',
        accessor: 'calories'
    },
    {
        Header: 'Fat',
        accessor: 'fat'
    },
    {
        Header: 'Carbs',
        accessor: 'carbs'
    }
];

class CustomersList extends Component {
    render() {
        return (
            <section>
                Customer List
                <Table rows={rows} columns={columns} />
            </section>
        );
    }
}

export default CustomersList;
