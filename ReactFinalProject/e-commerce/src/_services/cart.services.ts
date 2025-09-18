'use server'; 
import { CartReSponseType } from "@/types/cart.types";
import { getMyUserToken } from "@/utils/utils";



export async function getUserCart():Promise<CartReSponseType>{
const token = await getMyUserToken();    
 const res=await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
    headers:{
        token:token as string,
    },
    cache:'force-cache'
  })

const final=res.json()

const {numOfCartItems ,data:{products , totalCartPrice} }=final;

return {
    numOfCartItems,products , totalCartPrice
}
}