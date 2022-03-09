export const addCart=(product)=>{
    return (
        {
            type:'add',
            payload:product
        }
    )
}

export const deleteCart=(product)=>{
    return (
        {
            type:'delete',
            payload:product
        }
    )
}