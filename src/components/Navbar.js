import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
        <ul>
         <li>
         <ul>
         <Link to="/register">Register</Link> 
         </ul>
         
         </li>
         <li>
         <ul>
         <Link to="/login">Login</Link>
         </ul>
         
         </li>
         <li>
         <ul>
         <Link to="/employee">Employee</Link>
         </ul>
         
         </li>
         <li>
         <ul>
         <Link to="/product/create">Add Product</Link> 
         </ul>
         
         </li>
         <li>
         <ul>
         <Link to="/product/list">Products</Link>
         </ul>
         
         </li>
        
        </ul>
             
          
          
          
        </div>
    );
}

export default Navbar;