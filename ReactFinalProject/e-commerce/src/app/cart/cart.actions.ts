'use server';

import { getMyUserToken } from "@/utils/utils";
import { revalidatePath, revalidateTag } from "next/cache";
import { toast } from "sonner";

export async function addProductToCart(productId:string){

// the body object :
    // {
//     "productId": "6428eb43dc1175abc65ca0b3"
// }

// 7angeeb L data bta3a L user mn L cookies W hia fyhaa L token
const token =  await getMyUserToken();

if(token){
    
    const res= await fetch('https://ecommerce.routemisr.com/api/v1/cart',
    {
     method:'post',
     
     //  body:JSON.stringify({productId::productId}),
     body:JSON.stringify({productId}),
    headers:{
        'Content-type':'application/json',
        // as string just Specify the type to avoid the error that it could be null
        token: token as string,
    }
    }
    
    )
     const finalRes=res.json();

     if(finalRes.status ==='success'){
        // you can not use toast in use server
        // toast.success(finalRes.message,{position:'top-center'})
        
                // when adding a product refresh the cart page
                // revalidatePath('/cart')
                revalidateTag("getUserCart")
return finalRes.numOfCartItems;
     }else{
        // toast.error('error happened while adding to the cart',{position:'top-center'})
return false;
     }

}else{

}


}