import React from 'react'
import {client, urlFor} from '@/lib/client'
import {BsFillStarFill, BsFillArrowRightCircleFill, BsFillCartPlusFill} from 'react-icons/bs'
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'

const ProductDetails = ({product, products}) => {
    console.log(product)
    const {image, name, details, price} = product
  return (
    <div className='w-11/12 mx-auto border-4 border-white'>
      <div className='flex flex-wrap items-center justify-center border-2 border-red-500'>
        <div className='border-2 border-green-500 max-w-md p-4'>
            <img src={urlFor(image && image[0])} />
        </div>
        <div className='flex flex-col gap-4 basis-1/2 border-2 border-blue-500 text-white'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <div className='flex flex-wrap gap-2 md:gap-8 border-2 border-white'>
                <div className='flex items-center gap-1'>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <p className='text-sm'>&nbsp;Reviews</p>
                    </div>
                <div>
                    <p>322 <span className='text-sm'>Sold</span></p>
                </div>
            </div>
            <div className='border-2 border-pink-500'>
                <p className='font-bold'>Details</p>
                <p>{details}</p>
            </div>
            <h1 className='text-4xl'>₱ {price}.00</h1>
            <div className='border-2 border-red-500 flex items-center gap-4'>
                <p>Quantity </p>
                <div className='items-center border-2 border-white inline-flex '>
                    <button className='p-3 '><AiFillMinusCircle /></button>
                    <p className='py-2 px-6 border-r-2 border-l-2 border-white'>1</p>
                    <button className='p-3 '><AiFillPlusCircle /></button>
                </div>
            </div>
            <div className='flex flex-wrap gap-4 border-2 border-green-500'>
                <button className='bg-slate-200 text-red-500 border-2 border-red-500 py-3 w-5/6 mx-auto '>Add To Cart &nbsp; 
                <span><BsFillCartPlusFill className='inline' /></span></button>
                <button className='block bg-yellow-500 py-3 w-5/6 mx-auto'>Buy Now &nbsp; 
                <span><BsFillArrowRightCircleFill className='inline' /></span></button>
            </div>
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
