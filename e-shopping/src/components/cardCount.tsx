import React from 'react';

type initialCountProp = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>
};

type actualCountProp = {
    setQuantity: React.Dispatch<React.SetStateAction<number>>
    quantity: number
}

export function InitialCount({setQuantity}: initialCountProp){
    
    const incrementQuantity = () => {
        setQuantity((prev)=>prev+1);
    }
    
    return (
        <>
            <button className=" bg-blue-500 w-[40%] p-2 rounded-sm mb-2" onClick={incrementQuantity}>Add to cart</button>
        </>
    )
}

export function ActualCount({setQuantity, quantity}: actualCountProp){
    
    const incrementQuantity = () => {
        setQuantity((prev)=>prev+1);
    }

    const decrementQuantity = () => {
        setQuantity((prev)=>prev-1);
    }
    
    const setToZero = () => {
        setQuantity(0);
    } 
    
    return (
        <div>
            <div className="flex justify-between">
                <button onClick={incrementQuantity} className=' border-2 w-5 rounded-sm'>+</button>
                {quantity}
                <button onClick={decrementQuantity} className=' border-2 w-5 rounder-sm'>-</button>
            </div>
            <div>
                <button onClick={setToZero} className=' mt-3 bg-red-600 rounded-sm'>Remove</button>
            </div>
        </div>
    )
}