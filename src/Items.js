import React, { useEffect, useState } from 'react'
import {MultiSelect} from "react-multi-select-component";
import { useDispatch } from 'react-redux';
import { addCart } from './actioncreator';
import Select from 'react-select';
export default function Items() {

    const dispatch=useDispatch();

    const [products,setProduct]=useState([])
    const [original,setOriginal]=useState([])
    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState("");
    const [Size,setSize]=useState("")
    const [options,setOptions]=useState([]);
  const [options1,setOptions1]=useState([]);
    const setOption=(product)=>{
        var option=[]
    
      for (var i=0;i<product.toppings[0].items.length;i++)
      {
       option=[...option,{label:product.toppings[0].items[i].name,value:product.toppings[0].items[i].name}]
      }
      setOptions(option);
      const options1= [{ value:product.size[0].items[0].size,label:product.size[0].items[0].size},
      {value:product.size[0].items[1].size,label:product.size[0].items[1].size},
       {value:product.size[0].items[2].size,label:product.size[0].items[2].size}
            ]
       setOptions1(options1)     
    }
    
    useEffect(async ()=>{
        const data=await fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
        const ParsedData=await data.json()
        setOriginal(ParsedData);
        setProduct(ParsedData);
        
        setLoading(false);
        console.log(products);
    },[])
    const [loading,setLoading]=useState("true");
    const setType1=()=>{

        var x1= document.getElementById("flexRadioDefault1").value;
       
       
        if(x1=="on")
        { 
            var list=original.filter((e)=>e.isVeg!=false)
            setProduct(list);  
             }
             
    }
    const setType2=()=>{
      var x2= document.getElementById("flexRadioDefault2").value;
      if(x2=="on")
             {
                 var list=original.filter((e)=>e.isVeg!=true)
                 setProduct(list);  
                  }
    }
    const sortByPrice=(e)=>{

     var x=document.getElementById("flexRadioDefault3").value;
    
       var sortedData=[...products]

      sortedData.sort((a, b) => {
        return a.price - b.price;
    })
      setProduct(sortedData)
      
      }
      const sortByRating=()=>{

        
         var sortedData=[...products]
  
        sortedData.sort((a, b) => {
          return a.rating - b.rating;
      })
        setProduct(sortedData)
        
        }
        
         
    const setSelected2=(item)=>{
        setSize(item.value)
    }
          
    
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div className="">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>setType1()}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Veg
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>setType2()}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Non-Veg
  </label>
</div>
        </div>
<div>
Sort according 
<div className="form-check">
  <input className="form-check-input" type="checkbox" name="flexRadio1Default" id="flexRadioDefault3" onClick={()=>sortByPrice()}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Price
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" name="flexRadio1Default" id="flexRadioDefault4" onClick={()=>sortByRating()} />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Rating
  </label>
</div>

</div>
</div> 
        <div className="row">
      {
          loading==false?products.map((product)=>{
           return <div className="col-lg-4 col-md-6 mt-3"><div className="card" style={{width: "18rem"}}>
            <img src={product.img_url} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <div className='d-flex justify-content-between'>
              <a href="#" className="btn btn-success">Price: {product.price }</a>
              <a href="#" className="btn btn-danger mx-2">{product.isVeg==true?<>Veg</>:<>Non Veg</>}</a>
              </div>
             <div className="d-flex justify-content-between mt-3"><a href="#" className="btn btn-warning">Rating : {product.rating}</a>
         
            <button className='btn btn-primary' onClick={()=>dispatch(addCart({...product,SIZE:Size,TOPPINGS:selected}))}>Buy Now</button>
<button type="button" class="btn btn-outline-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>setOption(product)}>
  +
</button>


<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{product.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex">
        <div className="mx-4 mt-2">Size: <div class="btn-group mx-3">
  {/* <select  id="numberToSelect" onChange={(e)=>selectNum(e.target.value)}>
  <option value={product.size[0].items[0].size}>{product.size[0].items[0].size}</option>
  <option value={product.size[0].items[1].size} selected>{product.size[0].items[1].size}</option>
  <option value={product.size[0].items[2].size}>{product.size[0].items[2].size}</option>
</select> */}
 <Select options={options1} onChange={setSelected2} />
 {selected1}
</div></div>
     {selected.length} 
<div className='mx-2 d-flex'><span className='mx-3 mt-2'>Toppings: </span><MultiSelect
       options={options}
       value={selected}
       onChange={setSelected}
       labelledBy="Select"
       className='mx-4'
      /></div>
      </div>
      
    </div>
  </div>
</div>



</div> 
            </div>
          </div>
          </div>
          }):<>Loading ......</>
      }
      </div>
      
    </div>
  )
}
