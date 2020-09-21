import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let content = null
    
    useEffect(() => {
        axios.get(url).then(response =>{
            setProduct(response.data)
        })
    }, [url])

    if (product) {
        return (
            content = 
            <div>
                <h1 className="font-bold text-2xl mb-3" >
                    {product.name}
                </h1>
                <div>
                    <img
                        src={product.images[0].imageUrl}
                        alt={product.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        )
    }
   
    return (
        <div>
            
        </div>
    )
   
}

export default Product
