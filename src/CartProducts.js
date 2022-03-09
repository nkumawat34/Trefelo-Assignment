import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,deleteCart } from './actioncreator';
export default function CartProducts() {

    const dispatch=useDispatch();

    const products = useSelector(state => state.products)
    console.log(products)
    return (
     <>
     <div className='container my-5'>
     <div className="row">
         
         {
                products.map((product)=>{

                    return <div className='col-lg-4 col-md-6 mt-3'>
                        
                        <div class="card" style={{width: "18rem",height:"30rem"}}>
  <img src={product.img_url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.description}</p>
    <div className="d-flex justify-content-center ">
    <button className='btn btn-outline' onClick={()=>dispatch(deleteCart(product))}>-</button>
    <a href="#" class="btn btn-primary">{product.qty}</a>
    <button className='btn btn-outline' onClick={()=>dispatch(addCart(product))}>+</button>

    </div>
    <h5>{product.SIZE!=""?<>Size:</>:""}{product.SIZE}</h5>
    <span className='fs-5'>{product.TOPPINGS.length!=0?<>Toppings-</>:""} </span>{product.TOPPINGS.map((x)=>{
return(
<>
 <span>{x.value},</span>
</>
)
    })
  }
  </div>
 
</div>

                        </div>
                })
         }
         
         </div>
         </div>
     </>       
    )
        
            
      
}
