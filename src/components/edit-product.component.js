// ** create-user.component.js ** //

import React, { Component } from 'react';

import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props)
       
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
                         

        this.state = {
            dateTime: Date.now(),
            product: '',
            price: '0'
        }
       // console.log(this.state);
        
    }

    componentDidMount() {
        

        console.log("I am here")
   
        console.log(this.props.match.params.id);
           
        if (this.props.match && this.props.match.params.id) {

            const id = this.props.match.params.id;
            console.log(id);


            axios.get(`/api/sales/${id}`)
            .then(res => {
            
                console.log(res.data);
                this.setState({ 
                    id:res.data.id,
                    dateTime: Date.now(),
                    product: res.data.product,
                    price: res.data.price 
                });
               
            //   this.state = {
            //      id:res.data.id,
            //      dateTime: res.data.dateTime,
            //      product: res.data.product,
            //      price: res.data.price
            //  }
            // 
            console.log(this.state);
           
            })
            .catch(function (error) {
                console.log(error);
            })




                // .then(res => {
                //     this.setState({
                //     post: res.data
                //     });
                // })
            //}
        }else{
            console.log("I am out of if");
        }
    }


    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     console.log(id);
    //     axios.get(`/api/sales/${id}`)
    //     .then(res => {
        
    //         this.setState({ 
    //             id:res.data.id,
    //             dateTime: res.data.dateTime,
    //             product: res.data.product,
    //             price: res.data.price 
    //         });
           
    //     // this.state = {
    //     //     id:res.data.id,
    //     //     dateTime: res.data.dateTime,
    //     //     name: res.data.product,
    //     //     email: res.data.price
    //     // }
    //     // 
    //     console.log(this.state);
       
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }


    // obtenerUser= async() => {
        
    //     const id = this.props.match.params.id;
    //     //console.log(id);
    //     const respuesta = await axios.get(`http://localhost:4000/users/get-user/${id}`)
    //     this.user = {
    //         id:respuesta.data._id,
    //         name: respuesta.data.name,
    //         email: respuesta.data.email
    //     }
        
    //     console.log(this.state);
    //     return (this.state);

    // }


    onChangeProductName(e) {
        this.setState({ product: e.target.value })
    }

    onChangeProductPrice(e) {
        this.setState({ price: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const id = this.props.match.params.id;
        const productObject = {
            id:id,
            dateTime: Date.now(),
            product: this.state.product,
            price: this.state.price
        };
        console.log(productObject);

        axios.put(`/api/sales?id=${id}`, productObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ dateTime:Date.now(), product: '', precio: '0' })
        window.location.href='/products';
    }


    render() {
        return (
            <div className="wrapper col-md-4 mt-5">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Edit Product Name</label>
                    <input type="text" value={this.state.product} onChange={this.onChangeProductName} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Edit Product Price</label>
                    <input type="text" value={this.state.price} onChange={this.onChangeProductPrice} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Product" className="btn btn-success btn-block" />
                </div>
            </form>
        </div>
        )
    }
}