import React from 'react'
import { ProductType } from '../_interfaces/interfaces'
import { ProductCardProops } from './ProductCard.type'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AddProductBtn from '../AddProductBtn/AddProductBtn'
import productDetails from '@/app/productDetails/[id]/page'


export default function ProductCard({product}:ProductCardProops) {
  return (
    <div>
      <Link href={`/productDetails/${product.id}`} >
      <div   className=" pb-5  " >

<img src={product.imageCover} className="w-full" alt={product.title} />
{/* split and join to take the first two words of the title */}
<h2>{product.title.split(' ',2).join(' ')}</h2>
{/* ?? ya3ny apply this und if it null or undifined take the other one */}
{/* <h2>price : {product.priceAfterDiscount ?? product.price}</h2> */}
<h2>price : {product.priceAfterDiscount ?  <>
<span className='text-red-700 line-through mx-2'>{product.priceAfterDiscount}</span>
<span >{product.price}</span>

</> :  <span >{product.price}</span>  }  </h2>

<span>{product.ratingsAverage} <i className="fa-solid fa-star" style={{color: '#FFD43B'}}></i></span>

       
     </div>
      
      
      </Link>
      
<AddProductBtn id={product?.id}/>

    </div>
  )
}
