import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = { productsCollection: [] };
    }

    componentDidMount() {
        axios.get('api/sales')
            .then(res => {
                this.setState({ productsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.productsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
          <>
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Date</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Actions</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
        )
    }
}