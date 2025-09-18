
import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartReSponseType, ItemType } from '@/types/cart.types'
import { getUserCart } from '@/_services/cart.services'


export default async function cartPage() {
  

async function handleGetUserCart():Promise<CartReSponseType>{
const res=  await getUserCart()
return res;
}  
  
 const {numOfCartItems ,products , totalCartPrice} =await handleGetUserCart()
    return (
    <div>
      
<h1>Hi cart</h1>

<div className='w-full flex justify-between'>

<div>
    <h2>you will pay:{totalCartPrice}LE</h2>
<h3>number of items:{numOfCartItems}</h3>
  
</div>


<div>
<Button className='cursor-pointer' >Pay</Button>
<Button className='cursor-pointer' variant={'destructive'} >Remove All</Button>

</div>


</div>

<div className='w-1/2 mx-auto'>
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/2">Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Count</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/*row {the repeated element}  */}
    
{products.map((item:ItemType)=> <TableRow key={item._id}>
      <TableCell className="font-medium">
        <div>
<img src={item.product.imageCover} alt={item.product.title} className='w-full max-w-[300px] max-h-64'/>
<h3>{item.product.title}</h3>
        </div>


      </TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.count}</TableCell>
      <TableCell className="text-right h-[200px]">
<div>
<div className='flex gap-1 items-center'>

    <Button className='cursor-pointer' ></Button>
    <Input className='p-0.5 w-8 h-8' value={item.count} ></Input>
    <Button className='cursor-pointer' ></Button>
</div>
    <Button variant={ 'destructive'} className='cursor-pointer w-full bg-red-600' ></Button>


</div>


      </TableCell>
    </TableRow>
    )}

  </TableBody>
</Table>


</div>

   {/* {products.map(product=> <h2 key={product}>HELLO</h2>)} */}
  
    </div>
  )
}
