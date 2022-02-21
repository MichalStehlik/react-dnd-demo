import React from 'react'
import { ItemTypes } from './Basket'
import { useDrag } from 'react-dnd'

export const Apple = ({color, x, y}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.APPLE,
        item: {type: ItemTypes.APPLE},
        end: (item, monitor) => {console.log(item, monitor)},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
  return <span ref={drag} className="apple" >{isDragging ? "😱" : "🍎"}</span>
}

export default Apple;