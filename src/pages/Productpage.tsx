import React, { useState } from 'react'


const Productpage = () => {
  const [products,setProducts] = useState([
    {id: 1, name : "apple"},
    {id: 2,name : "banana"},
    {id: 3,name : "orange"}
  ]);
  return (
    <div>
      <div>Productpage</div>
      {products.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
    
  )
}

export default Productpage