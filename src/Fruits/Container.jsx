import React from 'react'
import Apple from "./Apple"
import Basket from "./Basket"

export const ItemTypes = {APPLE: "apple"}

export const Container = () => {
    return (       
        <div className="fruits">
            <Basket />
            <Apple />
        </div>
    )
}

export default Container;