import React, { useState } from 'react';

const ModelCard = ({model}) => {
 
    const [isBuyNow, setIsBuyNow]= useState(false)
    
    const handleBuyNow =()=>{
        setIsBuyNow(true);
    }
    

    return (
        <div>
         <div key={model.id} className='relative shadow-lg rounded-lg border overflow-hidden border-zinc-300' >
          <label className='absolute top-0 right-0 mt-3 mr-3 bg-amber-300 text-amber-700 rounded-lg border overflow-hidden '>{model.tagType}</label>  
        <div className='flex justify-center items-center h-15 bg-zinc-100' >
        <img src={model.icon} alt="" className='h-10 w-10 object-contain'/>
        </div>
        <div className='p-4 space-y-3'>
            <h2 className='text-2xl font-bold'>{model.title}</h2>
            <p >{model.description}</p>
            <div className='text-2xl font-bold'>
                ${model.price}/Mo
            </div>
            <div>
            <ul className="mt-2 list-disc list-inside">
            {model.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
            </div>
            <button onClick={handleBuyNow} className='btn w-full bg-red-500 text-white rounded-lg mt-5'>{isBuyNow ? "Added to cart" :"Buy Now"}</button>
        </div>
       
    </div>  
        </div>
    );
};

export default ModelCard;