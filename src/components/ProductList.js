import React, { Component, Fragment } from 'react'
import { ProductConsumer } from '../Context'
import { storeProducts } from '../data'
import Product from './Product'
//import Product from './Product';
import Title from './Title'
export default class ProductList extends Component {

    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="product" />
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
