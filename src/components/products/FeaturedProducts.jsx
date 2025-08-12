"use client"
import { useProductsStore } from '@/store/useProductStore'
import React, { useEffect } from 'react'

const FeaturedProducts = () => {
    const {products,getProducts} = useProductsStore();

    useEffect(()=>{
        getProducts()
        console.log("getProducts", products)
    },[])
  return (
    <div>FeaturedProducts</div>
  )
}

export default FeaturedProducts