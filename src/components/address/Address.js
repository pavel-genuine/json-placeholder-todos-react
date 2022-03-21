import React, { useState } from 'react';
import { removeDb,browserDb  } from '../../fakeDb/browserDb';

const Address = (props) => {

   const [rating, setRating]=useState(0)

const boostRating =id =>{
    setRating(rating+1)
    browserDb(id)
}



    const {sector, road, apartment,id}=props.all
    return (
        <div style={{border:'3px solid red', margin:'10px'}}>
            Your address is : 
            <p>
            Sector : {sector}</p>
            <p> Road : {road}</p>
            <p>Apartment : {apartment}</p> 
            <p>rating:{rating}</p>
            <button onClick={()=>boostRating(id)} >Boost Rating</button>
            <button onClick={()=>removeDb(id)}>Remove Rate</button>

        </div>
    );
};

export default Address;