// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props)

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        //console.log(Date.now());
        this.state = {
            pdate: Date.now(),
            product: '',
            price: '0'
        }
    }

    onChangePdate = (e) => {

    this.setState({ pdate: e.target.value })
    }

    onChangeProductDate(e) {

        this.setState({ pdate: e.target.value })
    }
    onChangeProductName(e) {
        this.setState({ product: e.target.value })
    }

    onChangeProductPrice(e) {
        this.setState({ price: e.target.value })
    }

    FormatDate(iDate) {
        var inputDate= new Date(iDate);
        
        var formattedDate = new Date(inputDate.getUTCDate(), (inputDate.getUTCMonth() + 1), inputDate.getUTCFullYear());
        return formattedDate;
    }

    
    onSubmit(e) {
        e.preventDefault()

        
        const productObject = {
            //this.moment().format(),  
            pdate: this.FormatDate(this.state.pdate),
            product: this.state.product,
            price: this.state.price
        };

        axios.post('/api/sales', productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  pdate: Date.now(), product: '', price: '0' })
        window.location.href='/products';
    }


    render() {
        return (
            <div className="wrapper col-md-4 mt-5">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Current Date</label>
                        <input type="date" id="Pdate" name="Pdate" value={this.state.pdate} onChange={this.onChangePDate} className="form-control"></input>
                    </div>
                    
                    <div className="form-group">
                        <label>Add Product Name</label>
                        <input type="text" value={this.state.product} onChange={this.onChangeProductName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Product Price</label>
                        <input type="text" value={this.state.price} onChange={this.onChangeProductPrice} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}