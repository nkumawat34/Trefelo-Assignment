import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Header() {
  
  const products=useSelector(state=>state.products)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizza World</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <Link to="/Trefelo-Assignment" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        
      </ul>
      <Link to="/cart"> <BsFillCartPlusFill size={"30px"}/></Link>
      
      <button className="btn btn-outline-danger" style={{fontSize:"20px"}}>{products.length}</button>
     
    </div>
  </div>
</nav>
    </div>
  )
}
