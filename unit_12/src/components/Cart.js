
const Cart = ({cart, goods}) => {
    let total = 0

    const renderCart = () => {
        return (
            Object.keys(cart).map((item, index) => {
                total = total + goods[item]['cost'] * cart[item];
                return (
                    <tr key={index}>
                        <th><img className="cart-img" src={goods[item]['image']} alt={goods[item]['title']} /> </th>
                        <th>{goods[item]['title']}</th>
                        <th>{goods[item]['cost']}</th>
                        <th>{cart[item]}</th>
                        <th>{goods[item]['cost'] * cart[item]}</th>
                        <th><button type="button" data-articul={item} className="btn btn-minus">-</button></th>
                        <th><button type="button" data-articul={item} className="btn btn-delete">X</button></th>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Изображение товара</th>
                        <th>Название товара</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Стоимость</th>
                        <th>Уменьшить кол-во</th>
                        <th>Удалить товар</th>
                    </tr>        
                    {renderCart()}
                </tbody>
            </table>
            <p>Общая сумма товаров: {total}</p>
        </>
       
    )
}

export default Cart;