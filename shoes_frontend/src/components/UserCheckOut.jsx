import React from 'react'
import '../styles/userCheckOut.css'


const UserCheckOut = () => {
  return (
    <>
    <h1 className='text_checkout'>CheckOut</h1>
    <div className='userCheckOutContainer'>
        
    <div className='second_container'>
        <div className='Order_summery'>
            <h1>ORDER Summary</h1>
            
            <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>white t-shirt(from mavrick joos)</td>
                        <td>$400</td>
                    </tr>

                    <tr>
                        <td>white t-shirt(from mavrick joos)</td>
                        <td>$400</td>
                    </tr>

                    <tr>
                        <td>white t-shirt(from mavrick joos)</td>
                        <td>$400</td>
                    </tr>

                    <tr>
                        <td>white t-shirt(from mavrick joos)</td>
                        <td>$400</td>
                    </tr>

                    <tr>
                        <td>white t-shirt(from mavrick joos)</td>
                        <td>$400</td>
                    </tr>
                    <hr />
                    <tr className='table_total'>
                        <td>Total</td>
                        <td>$2000</td>
                    </tr>
                    <hr />

            </table>
        </div>
    </div>
    <div class="container">
        <center><h2>Shipping Address</h2></center>
        <form>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input className="input_field" type="text" id="firstName" name="firstName" required/>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input className="input_field" type="text" id="lastName" name="lastName" required/>
            </div>
            <div class="form-group">
                <label for="streetAddress">Street Address</label>
                <input className="input_field" type="text" id="streetAddress" name="streetAddress" required/>
            </div>
            <div class="form-group">
                <label for="building">Building / Home / Apartment</label>
                <input className="input_field" type="text" id="building" name="building"/>
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input className="input_field" type="text" id="city" name="city" required/>
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input className="input_field" type="text" id="state" name="state" required/>
            </div>
            <div class="form-group">
                <label for="zipCode">ZIP Code</label>
                <input className="input_field" type="text" id="zipCode" name="zipCode" required/>
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input className="input_field" type="tel" id="phoneNumber" name="phoneNumber" required/>
            </div>
            <div class="form-group">
                <input className="input_field" type="submit" value="Submit"/>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default UserCheckOut