import { useState } from "react"
import { ActualCount, InitialCount } from "./cardCount"

type cardElement = {
    id: number
    name: string
    price: number
    imgUrl: string
}
export function Card({ id, name, price, imgUrl}: cardElement){
    let [quantity, setQuantity] = useState<number>(0)

    return(
        <div>
            <img src={imgUrl} className=" p-3 w-full object-cover h-[400px]"/>
            <div className=" flex justify-between">
                <h1 className=" p-3">{name}</h1>
                <h1 className=" p-3">${price}</h1>
            </div>
            <div className=" flex justify-center">
                {quantity===0 ? <InitialCount setQuantity={setQuantity}/> : <ActualCount setQuantity={setQuantity} quantity={quantity}/>}
            </div>
        </div>
    )
}