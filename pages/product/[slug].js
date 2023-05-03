import React, {useState} from 'react'
import {client, urlFor} from '@/lib/client'
import {AiOutlineStar, AiFillStar, AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {Product} from '../../components'
import { useStateContext } from '@/context/StateContext'
import { motion } from 'framer-motion'

const ProductDetails = ({product, products}) => {
    const [index, setIndex] = useState(0)
    const {image, name, details, price} = product
    const {incQty, decQty, qty, onAdd} = useStateContext()

    const filteredProducts = products.filter(item => item.slug.current !== product.slug.current)
    const formattedPrice = price.toLocaleString()
  return (
    
        <div className='w-11/12 mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-6 p-4'>
        <div className='flex items-center max-w-xl h-96 md:h-[450px] overflow-y-auto'>
            <div className='flex flex-col w-1/5 border-t-2 border-l-2 border-r-2 border-product-primary'>
                {image?.map((item, i) => (
                    <img
                    key={item._id} 
                    src={urlFor(item)}
                    onMouseEnter={() => setIndex(i)}
                    className='w-full h-3/4 p-2 hover:bg-btnColor border-b-2 border-product-primary transition ease-in-out duration-300'
                    />
                ))}
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <img src={urlFor(image && image[index])} className='w-full h-full' />
            </div>
            
        </div>
        <div className='flex flex-col gap-4 text-primary-400'>
            <h1 className='text-3xl font-bold uppercase text-primary-500'>{name}</h1>
            <div className='flex flex-wrap gap-2 md:gap-8'>
                <div className='flex items-center gap-1 text-'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className='text-sm'>&nbsp;Reviews</p>
                    </div>
                <div className='text-sm'>
                    <p>322 <span>Sold</span></p>
                </div>
            </div>
            <div className=''>
                <p>Details :</p>
                <p className='text-secondary-200'>{details}</p>
            </div>
            <h1 className='text-3xl font-bold'>₱ {formattedPrice}.00</h1>
            <div className=' flex items-center gap-4'>
                <p>Quantity : </p>
                <div className='items-center border-2 border-secondary-200 inline-flex '>
                    <button type='button' className='px-2 active:text-primary-500' onClick={decQty}>
                        <AiFillMinusCircle className='w-4 h-4' />
                    </button>
                    <p className='px-6 border-r-2 border-l-2 border-secondary-200 text-primary-500'>{qty}</p>
                    <button type='button' className='px-2 active:text-primary-500' onClick={incQty}>
                        <AiFillPlusCircle className='w-4 h-4' />
                    </button>
                </div>
            </div>
            <div className='flex gap-4 md:mt-10'>
                <button className="basis-1/2 font-bebas py-3 px-6 text-primary-500  bg-product-secondary hover:bg-btnColor hover:text-secondary-300 transition ease-in-out duration-300"
                    onClick={() => onAdd(product, qty)}
                >
                    Add To Cart &nbsp; 
                
                </button>

                <button className="basis-1/2 font-bebas py-3 px-6 text-primary-500  bg-product-secondary hover:bg-btnColor hover:text-secondary-300 transition ease-in-out duration-300">
                    Buy Now &nbsp; 
                
                </button>
            </div>
        </div>
      </div>
      <div className='py-16'>
        <p className='font-bold text-center text-xl text-primary-500 mb-4 uppercase'>Related Products</p>
        <div className=' flex flex-wrap items-center justify-center gap-6'>
            {filteredProducts.map((item) => (
                <Product key={item._id} product={item} />
            ))}
        </div>
      </div>
    </div>
    
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: {products, product}
    }
}

export default ProductDetails
