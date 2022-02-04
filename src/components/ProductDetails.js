import React from "react";
import {Link} from '@reach/router';
import Button from 'react-bootstrap/Button';


  
//passed in state within the @reach/router link through 'location'
const ProductDetails = ({location}) => {


    //styles



    

    return (
        <div className="section">
                <div id="product">
                    <img src={location.state.imgsrc} alt="product"/>
                    <div className="details">
                        <h1>{location.state.title}</h1>
                        <h5>{location.state.text}</h5>
                        <h2>{location.state.price}</h2>
                        <div className="buybtns">
                            <Button>Add to Cart</Button>
                            <Link to="/purchase"><Button>Checkout</Button></Link>
                        </div>
                    </div>
                </div>
        </div>

    );
}
export default ProductDetails;