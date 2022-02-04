import React, {useState} from "react";
import {Link} from '@reach/router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import prod1 from '../images/weed1.jpg';
import prod2 from '../images/sweatshirt.jpg';
import prod3 from '../images/hat.jpg';

function Products() {
  const data = [
    {
      title: "Cleopatra Weed",
      productID: "1",
      text: "Weed details",
      imgsrc:`${prod1}`,
      price: "300 $CLEO"
    },
    {
      title: "Cleopatra Hoodie",
      productID: "2",
      text: "This Hanes classic is a comfortable classic. King of versatility, the men's hooded sweatshirt has become a staple in any wardrobe. Kangaroo-style front pocket is perfect for your phone, keys or anything else you want to stash.",
      imgsrc:`${prod2}`,
      price: "800 $CLEO"
    },
    {
      title: "Cleopatra Hat",
      productID: "3",
      text: "Hat details",
      imgsrc:`${prod3}`,
      price: "500 $CLEO"
    }
  ]


    //creating a card to house each product for sale
    const CardView = (
        data
      ) => (
        <Card style={productStyles.card}>
          <Card.Img variant="top" src={data.imgsrc} alt="nope"></Card.Img>
          <Card.Body>
            <Link to={`/products/${data.productID}`} state={{title: data.title, text: data.text, imgsrc: data.imgsrc, price: data.price}}><Button variant="primary" className="btn">{data.title}</Button></Link>
            <Card.Text>{data.price}</Card.Text>
          </Card.Body>
        </Card>
      );

    //styling for page
    const productStyles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        card: {
            width: "15rem",
            margin: "10px",
        },
    }
      

    return (
        <div className="section">
            <div className="bg">
                <div id="products" style={productStyles.container}>
                    <h1>Products</h1>
                    <div className="row" style={productStyles.row}>
                    {data.map((i,index) => <CardView className="item" key={index} {...i} />)}
                    </div>
                </div>
            </div>
        </div>
    );
    
    
}
export default Products;
