import React,{useState} from "react";
//import Button from 'react-bootstrap/Button';

const PurchaseForm = () => {
    /* saving input as state */
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [address, setaddress] = useState("")
    const [state, setstate] = useState("")
    const [country, setcountry] = useState("")
    const [city, setcity] = useState("")
    const [zipcode, setzipcode] = useState("")


    /* form styles */
    const formStyles = {
        container: {
            marginTop: "170px",
            background: "white",
            boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
            display:"flex",
            flexDirection: "row",
            justifyContent:"space-around",
            width: "685px",
            height: "430px",
        }
    }
    /* submit method */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(fname.trim()==="" || lname.trim() == "" || address.trim() == "" || zipcode.trim() == "" || city.trim() == "" || country.trim() == "" || state.trim() == ""){
            alert("All fields are required.");
        }
        else{
            alert("Your order has been placed, " + fname+ " " + lname);
        }
    }
    const onChangeHandler = (fieldName, value)=>{
        if(fieldName === "fname"){
          setfname(value);
        }
        if(fieldName === "lname"){
            setlname(value);
        }
        if(fieldName === "address"){
            setaddress(value);
        }
        if(fieldName === "zipcode"){
            setzipcode(value);
        }
        if(fieldName === "city"){
            setcity(value);
        }
        if(fieldName === "state"){
            setstate(value);
        }
        if(fieldName === "country"){
            setcountry(value);
        }
      }



    return (
        <div className="section">
            <div id="purchaseform" style={formStyles.container}>
                <div id="cart">
                    <h3>Your Cart</h3>
                </div>
                <form id="form" className="form-group" onSubmit={handleSubmit}>
                    <h3>Checkout</h3>
                        <div className="names">
                            <input onChange={(e) => {onChangeHandler("fname",e.target.value)}} placeholder="First Name" type="text" name="fname" className="form-control"/>
                            <input onChange={(e) => {onChangeHandler("lname",e.target.value)}} placeholder="Last Name" type="text" name="lname" className="form-control"/>
                        </div>
                        <div className="formRow">
                            <input onChange={(e) => {onChangeHandler("address",e.target.value)}} placeholder="Street" type="street" name="address" className="form-control" />
                            <input onChange={(e) => {onChangeHandler("city",e.target.value)}} placeholder="City" type="city" name="city" className="form-control" />
                        </div>
                        <div className="formRow">
                            <input onChange={(e) => {onChangeHandler("state",e.target.value)}} placeholder="State" type="state" name="state" className="form-control" />
                            <input onChange={(e) => {onChangeHandler("zipcode",e.target.value)}} placeholder="Zip Code" type="zip" name="zipcode" className="form-control" />
                            <input onChange={(e) => {onChangeHandler("country",e.target.value)}} placeholder="Country" type="text" name="country" className="form-control" />
                        </div>
                      
                        <input onClick={handleSubmit} type="submit" className="checkout-btn" value="Place Order"/>
                </form>
            </div>
        </div>

    );
}
export default PurchaseForm;