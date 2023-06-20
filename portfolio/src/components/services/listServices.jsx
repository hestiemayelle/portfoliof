import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BiCheck} from 'react-icons/bi'

const ListServices = () => {
    const [data, setData] = useState([])
    
    

    useEffect(() =>{
      axios.get(
        "https://hestie-portfolio-backend.onrender.com/services"
      ).then((response)=>{
        setData(response.data);
      }).catch((err)=>{
        console.log("Service error: ", err)
      });
    }, [])

  
    return data.map((service)=>{
        return(

        <article className='service' key={service._id}>
          <div className="service__head">
            <h3>{service.title}</h3>
          </div>
          <ul className='service__list'>
            {
              service.description.map((desc, index)=>{
                return (
                  <li key={index}>
                    <BiCheck className='service__list__icon'/> 
                    <p> {desc} </p>
                  </li>
                )
              })
            }
            
          </ul>
        </article>

       )
    })

    ;
}

export default ListServices;
