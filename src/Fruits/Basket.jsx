import React, {useState} from 'react'
import { useDrop } from 'react-dnd'

export const ItemTypes = {APPLE: "apple"}

export const Basket = () => {
  const [count, setCount] = useState(0);
  const [{isOver}, drop] = useDrop(
    () => ({
      accept: [ItemTypes.APPLE],
      drop: (item, monitor) => {console.log(count); setCount(count + 1);}, 
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      })
    })
  );
    return (       
        <div ref={drop} className={"basket " + (isOver ? "over" : null)}>
          {count}
        </div>
    )
}

export default Basket;