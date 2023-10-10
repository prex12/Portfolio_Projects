import React, { useState } from 'react'
import Footer from '../footer'
import Box from '../box';
import sales from '../sales/sales'

function Home() {
  const [list, setList] = useState([]);

  const handleSubmit=()=>{
    console.log("clicked")
    setList(prevList=>{
      return [...prevList, list]
    })
  }
  return (
    <React.Fragment>
      {/* the React fragment allows us to add parent elements without adding new nodes to the DOM */}
        <div className='flexBox general-padding'>
        {sales.map((one)=><Box 
        key= {one.id} 
        itemName = {one.productName} 
        price = {one.productPrice} 
        src = {one.imageSource}
        addToCart = {handleSubmit }
        />)}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home