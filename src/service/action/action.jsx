export const increaseQty=(data)=>{
    return{
        type:'INCREASE',
        payload:data
    }
}

export const decreaseQty = (data) => {
    return {
        type: 'DECREASE',
        payload: data
    }
}