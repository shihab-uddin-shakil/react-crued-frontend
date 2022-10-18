import React, { Component } from 'react'
import axios from 'axios'
//import { Table, Button, Alert } from 'react-boot'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pdata:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/product')
        .then(respnse =>{
            this.setState({
                pdata: respnse.data.products
            })
            console.log(respnse.data.products)
        })
    }
     deleteEmployee(id,e) {
        const url = `http://127.0.0.1:8000/api/product/destroy/${id}`;

    axios
      .delete(url)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        // const edata = this.state.pdata.products.filter(item => item.id !== id);
        // this.setState({ pdata: edata });
        this.componentDidMount();
      })
 
    }
   
    render() {
        const {pdata}=this.state
        return (
            <div>

            <h2>Product List</h2>
            <table>
            <tr>
                <th>#</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                
        
              </tr><tbody>
              {pdata.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.category}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>  <button className="btn btn-danger" onClick={(e) => this.deleteEmployee(product.id, e)}>Delete</button>
                </td>
                  
                </tr>
              ))}

            </tbody></table>
          
               
            </div>
        )
    }
}
