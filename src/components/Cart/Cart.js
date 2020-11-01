import React, { Component, Fragment } from 'react'
import { ProductConsumer } from '../../Context'
import Title from '../Title'
import CartColumn from './CartColumn'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
export default class Default extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        value=>{
                            const {cart} = value;
                            if(cart.length>0){
                                return(
                                    <Fragment>
                                    <Title name="your" title="Cart" />
                                    <CartColumn />
                                    <CartList value={value}/>
                                    </Fragment>
                                )
                            }
                            else{
                                return(
                                    <EmptyCart />
                                )
                            }
                        }
                    }
                </ProductConsumer>

                
            </section>
        )
    }
}
