var products=[]

var reducer=(state=products,action)=>{
    const product=action.payload;
    switch(action.type){

    
    case 'add':
    {
         //CHeck productalready exist or not
         const exist=state.find((x)=>x.id===product.id)
         
         if(exist)
         {
            return state.map((x)=>
            x.id===product.id?{...x,qty:x.qty+1,SIZE:product.SIZE,TOPPINGS:product.TOPPINGS}:x
            )
         }
         else
         {
            

             return [
                 ...state,
                 {
                     ...product,
                     qty:1
                 }
             ]
         }
    }
    break;
    case 'delete':
        const exist1=state.find((x)=>x.id===product.id)
    
        if(exist1.qty===1)
        {
            return state.filter((x)=>x.id!==product.id)
        }
        else
        {
           return state.map((x)=>
           x.id==product.id?{...x,qty:x.qty-1}:x
           )
        }
        break;
        default:
            break
}
return state;
}
export default reducer;