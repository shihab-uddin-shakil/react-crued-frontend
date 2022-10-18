import React, { Component } from 'react'
import axios from 'axios'
//import ProductList from './ProductList'
export default class ProductCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            category: "" ,
            name: "",
            price:0,
            quantity: ""
        }
        this.change=this.change.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    change = e => {
        this.setState({
          category: e.target.value,
          
        });
      };
      onNameChange = e => {
        this.setState({
          name: e.target.value
        });
      };
      onPriceChange = e => {
        this.setState({
          price: e.target.value
        });
      };
      onQuantityChange = e => {
        this.setState({
          quantity: e.target.value
        });
      };
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            category: this.state.category ,
            name: this.state.name,
            price:this.state.price,
            quantity: this.state.quantity
        };
        axios
          .post("http://127.0.0.1:8000/api/product/create", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };
    
    render() {
        return (
            <div>
            <h1>Add Product</h1>
            <form className="post" onSubmit={this.handleSubmit}>
            <input  defaultValue={this.state.category} name="category" onChange={this.change} required />
            <input  defaultValue={this.state.name} onChange={this.onNameChange} required />
            <input type="number"  defaultValue={this.state.price}  onChange={this.onPriceChange} required />
            <input  defaultValue={this.state.quantity} name="quantity" onChange={this.onQuantityChange} required />

            <button type="submit">Create Product</button>
          </form>
        
            </div>
        )
    }
}
