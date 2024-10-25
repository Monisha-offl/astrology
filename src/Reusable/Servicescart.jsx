import React from 'react'
import "./Servicescart.css"
import service1 from "../../src/Assets/images/service1.png"
import arrow from "../../src/Assets/images/arrow-devider.svg"
import { BsSuitDiamondFill } from "react-icons/bs";

const Servicescart = (props) => {

    console.log(props);
    let data= props.servicesdata
    console.log(data);

  return (
    <>

    {Array.isArray(data) && data.map (function (data){
        return (
            <div className='services-cart'>
            <div className='service-img'>
                <img src={data.img} alt="" />
            </div>
            <div className='service-des'>
                <h2>{data.title}</h2>
                <img src={arrow} alt="" />
                <p className='service-para'>{data.description}</p>
                    <button>
                        <p><BsSuitDiamondFill /></p>
                        <p>Learn more</p>
                    </button>
            </div>
            </div> 
        )
    
    })}

    </>
  )
}

export default Servicescart
