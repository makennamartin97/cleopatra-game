import './App.css';
import React from 'react';
import Pyramid from './components/Pyramid';
import Navbar from './components/Navbar';
import CodeSubmission from './components/CodeSubmission';
import Products from './components/Products';
import PurchaseForm from './components/PurchaseForm';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router} from '@reach/router';




function App() {

  //using @reach/router to give a path to each component 
  //that may be chosen from the navbar
  
      return (
        <div className="App">
          <Navbar/>

          <Router>
            <Pyramid path="/"/>
            <CodeSubmission path="codesubmission"/>
            <Products path="products"/>
            <ProductDetails path="products/:productID"/>
            <PurchaseForm path="purchase"/>
          </Router>
       

        </div>
      );
}

export default App;
