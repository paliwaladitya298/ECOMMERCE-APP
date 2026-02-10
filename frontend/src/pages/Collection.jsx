import React, { use, useEffect } from 'react'
import { ShopContext} from '../context/ShopContext'
import { useContext , useState} from 'react';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]); 
  const [Category,setCategory] = useState([]);
  const [SubCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relevant');
  
  const toggleCategory = (e) =>{
    if(Category.includes(e.target.value)){
      setCategory(Category.filter((prev)=> prev !== e.target.value));
    }
    else{
      setCategory(prev => [...Category , e.target.value]);
    }
  }
    const toggleSubCategory = (e) =>{
    if(SubCategory.includes(e.target.value)){
      setSubCategory(SubCategory.filter((prev)=> prev !== e.target.value));
    }
    else{
      setSubCategory(prev => [...SubCategory , e.target.value]);
    }
  }

const applyFilter = ()=>{
  let productsCopy = products.slice();
  
  if(showSearch && search){
  productsCopy = productsCopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())
  );  
  }


  if(Category.length > 0){
    productsCopy = productsCopy.filter((item)=> Category.includes(item.category));
  }
  if(SubCategory.length > 0){
    productsCopy = productsCopy.filter((item)=> SubCategory.includes(item.subCategory));
  }
  setFilterProducts(productsCopy);
}
const sortProduct =()=>{
  let fpcopy = filterProducts.slice();
  switch(sortType){
    case 'low-high':
      setFilterProducts(fpcopy.sort((a,b)=> a.price - b.price));
      break;
    case 'high-low':
      setFilterProducts(fpcopy.sort((a,b)=> b.price - a.price));
      break;
    default:
      applyFilter();
      break;
  }
}

  useEffect(()=>{
   applyFilter();
  },[Category,SubCategory , search, showSearch ,products])
  
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    {/* Filter Option */}
    <div className='min-w-60'>
    <p onClick = {()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
      <img className = {`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
    </p>
    
    {/* Catergory Filter */}
    
    <div className= {`border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
     <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
     <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
         <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Men'} onChange={toggleCategory}/> Men
         </p>

          <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Women'} onChange={toggleCategory}/> Women
         </p>

          <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Kids'} onChange={toggleCategory}/> Kids
         </p>
     </div>
    </div>
     {/* SubCategory Filter */}
    
      <div className= {`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
     <p className='mb-3 text-sm font-medium'>TYPE</p>
     <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
         <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Topwear'} onChange={toggleSubCategory}/>Topwear
         </p>

          <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
         </p>

          <p className='flex gap-2'>
            <input className = 'w-3' type="checkbox" value ={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
         </p>
     </div>
    </div>
    </div>
    {/* Right Side */}
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1 = {'ALL'} text2 = {'COLLECTIONS'}></Title>
        {/* product Sort */}
        <select onChange={(e)=>setSortType(e.target.value)} className = 'border-2 border-gray-300 text-sm px-2'name="" id="">
          <option value="relevant">Sort by: Relevent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>
   {/* Map Products */}
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
      {
        filterProducts.map((item,index)=>(
          <ProductItem key = {index} name = {item.name} id = {item._id} price ={item.price} image={item.image} />
        ))
      }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
</div>

   </div>
    </div>
    </div>
  )
}

export default Collection