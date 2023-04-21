import React from 'react'
import {client, urlFor} from '@/lib/client'

const ProductDetails = ({product, products}) => {
    console.log(product)
    const {image, name, details} = product
  return (
    <div>
      <div>
        <img src={urlFor(image && image[0])} />
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

    console.log(product)

    return {
        props: {products, product}
    }
}

export default ProductDetails
