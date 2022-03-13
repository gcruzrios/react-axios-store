// ** create-user.component.js ** //

import React, { Component } from 'react';
import DatepickerComponent from "./datepicker.component";

import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props)

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        console.log(date);
        //selectedDate:"2015-04-14"
        this.state = {
            //selectedDate:"2022-03-14",
            selectedDate:date.toString,
            pdate: date.toString,
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

    // handleClick() {
    //     this.setState({ count: this.state.count + 1 })
    //   }
    
    // handleClick = () => {
    // this.setState({ count: this.state.count + 1 })
    //   }

    handleOnChange = (e) => {
        this.setState({ pdate: e.target.value })
    }
    

    // handleOnChange(e) {
    //     this.setState({ selectedDate: e.target.value })
    //   }
      
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
        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
        const productObject = {
           
            pdate: this.state.pdate,
            product: this.state.product,
            price: this.state.price
        };

        axios.post('/api/sales', productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  doa: date, product: '', price: '0' })
        window.location.href='/products';
    }

    

    render() {
        return (
            <div className="wrapper col-md-4 mt-5">
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                            <DatepickerComponent selectedValue={this.state.selectedDate} onChange={this.handleOnChange}/>
                    </div> */}
                    <DatepickerComponent selectedValue={this.state.selectedDate} onChange={this.handleOnChange}/>
                    <div className="form-group">
                        <label>Add Product Date Arrival</label>
                        <input type="text" value={this.state.pdate} onChange={this.onChangeProductDate} className="form-control" />
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