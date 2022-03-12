import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';


let ListProducts = [];

class DataTable extends Component {

    state = {
        data: this.props.obj,

        form: {
          id: "",
          dateTime: "",
          product: "",
          price: "0"
        },
      };
    

    getProducts= async() => {
        
        const response = await axios.get(`api/sales`)
      
        console.log(response.data);
        ListProducts = response.data;
        console.log(response.data);
        window.location.reload(false);
        //this.render();
    }


    eliminar =  async (dato) => {
        var opcion = window.confirm("Are sure to delete this product:? "+dato.id);
        var lista = this.state.data;
        console.log(lista);
        if (opcion === true) {
          
            const response = await axios.delete(`api/sales/?id=${dato.id}`)
    
            .then((res) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            });
         
            this.getProducts();
          
            this.setState(ListProducts);


        }
      };

    render() {
        return (
           <> 
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.dataTime}
                </td>
                <td>
                    {this.props.obj.product}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                
                {/* <Button title="Edit" onPress={() => {this.props.navigation.navigate('Details', {id: 4 , otherParam: 'anything you want here',});}}/> */}
                    
                    <Link to={`/edit-product/${this.props.obj.id}`}  className="btn btn-primary"> Edit </Link>
                    
                </td>

                <td> <button className="btn btn-danger" onClick={()=> this.eliminar(this.props.obj)}> Delete</button> </td>
            </tr>
          
          </>
        );
    }
}

export default DataTable;