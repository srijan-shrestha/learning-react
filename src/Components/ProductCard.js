import React from 'react'

function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <div
                style={{
                    'backgroundImage': `url('${props.product.images[0].imageUrl}')`
                }}
                className="w-full h-64 bg-blue bg-cover"
            >

            </div>
        </div>
    )
}

export default ProductCard
