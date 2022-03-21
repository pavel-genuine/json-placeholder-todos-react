
import React, { useEffect, useState } from 'react';

import Address from '../address/Address'

const Addresses = () => {

   const [addresses, setAddresses] = useState([])

   useEffect( ()=>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data=> setAddresses(data))
   } ,[])


    return (
        <div style={{display:'grid', gridTemplateColumns:'500px 500px 500px'}}>
            
            {
              
              addresses.map((address,index)=> <Address key={index} all={address} ></Address>)

            }
        </div>
    );
};

export default Addresses;