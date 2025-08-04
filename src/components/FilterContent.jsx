import React from "react";
import ProductCard from "./ProductCard";

const FilterContent = ({ filterProducts }) => {
  // console.log("===>", filterProducts)
  return (
    <div className="grid grid-cols-4 gap-5">
      {filterProducts?.map((p, index)=><ProductCard name={p?.productName} key={index}/>)}
    </div>
  )
};

export default FilterContent;
