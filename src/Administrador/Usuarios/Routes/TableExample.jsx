import React from 'react';
import { MDBDataTable } from 'mdbreact';


const TableExample = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Position',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Office',
                field: 'office',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320'
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170'
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'San Francisco',
                age: '66',
                date: '2009/01/12',
                salary: '$86'
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '22',
                date: '2012/03/29',
                salary: '$433'
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '33',
                date: '2008/11/28',
                salary: '$162'
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '61',
                date: '2012/12/02',
                salary: '$372'
            },
            {
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: '59',
                date: '2012/08/06',
                salary: '$137'
            },
            {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2010/10/14',
                salary: '$327'
            },

            {
                name: 'Lael Greer',
                position: 'Systems Administrator',
                office: 'London',
                age: '21',
                date: '2009/02/27',
                salary: '$103'
            },
            {
                name: 'Jonas Alexander',
                position: 'Developer',
                office: 'San Francisco',
                age: '30',
                date: '2010/07/14',
                salary: '$86'
            },
            {
                name: 'Shad Decker',
                position: 'Regional Director',
                office: 'Edinburgh',
                age: '51',
                date: '2008/11/13',
                salary: '$183'
            },
            {
                name: 'Michael Bruce',
                position: 'Javascript Developer',
                office: 'Singapore',
                age: '29',
                date: '2011/06/27',
                salary: '$183'
            },
            {
                name: 'Donna Snider',
                position: 'Customer Support',
                office: 'New York',
                age: '27',
                date: '2011/01/25',
                salary: '$112'
            }
        ]
    };

    return (
        <div className='box-table'>
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
        </div>
    );
}

export default TableExample;