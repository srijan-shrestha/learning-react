import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let content = null
    
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response =>{
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(error => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    if(product.error) {
        content = <p>
            There was an error fetching the product.
        </p>
    }

    if(product.loading) {
        content = <Loader />
    }

    if (product.data) {
        return (
            content = 
            <div>
                <h1 className="font-bold text-2xl mb-3" >
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        )
    }
   
    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
   
}

export default Product
