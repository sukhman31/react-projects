import storeItems from "../data/items.json"
import { Card } from "./itemCard"

export function Store(){
    return (
        <>
        <h1 className=" text-3xl m-5">Store</h1>
        <div className="grid grid-cols-3">
            {storeItems.map((item) => (
                <Card {...item} />                
            ))}
        </div>
        </>
    )
}