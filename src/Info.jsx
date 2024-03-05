import React from 'react'
import img1 from './product1.jpeg';
import img2 from './product2.png';
import img3 from './product3.avif';
import './App.css';

const Info = () => {
  return (
    <>
     <div className='card'>
     <img src={img1} alt="" />
     <h2 className="card-title">Product 1</h2>
     <div className="img-price">$253</div>
    </div>
    <div className='card'>
     <img src={img2} alt="" />
     <h2 className="card-title">Product 2</h2>
     <div className="img-price">$1039</div>
    </div>
    <div className='card'>
     <img src={img3} alt="" />
     <h2 className="card-title">Product 3</h2>
     <div className="img-price">$1199</div>
    </div>
    </>

  )
}

export default Info