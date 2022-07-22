import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart,
    minus,
    del,
} from '../store/cartSlice';

import Cart from "../components/Cart"

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if(t.classList.contains('btn-minus')) {
            dispatch(minus(t.getAttribute('data-articul')))
        }
        if(t.classList.contains('btn-delete')) {
            dispatch(del(t.getAttribute('data-articul')))
        }
    }

    return (
        <div onClick={clickHandler}>
            {
                Object.keys(cart).length === 0 ? <p>Корзина пуста</p> : <Cart goods={goodsObj} cart={cart}/> 
            }
            
        </div>
    );
}

export default CartList;