import { useState } from 'react';
import './Cart.scss'
function Cart() {
    const unitPrice = 1200000;
    const [Quantity, setQuantity] = useState(1);
    const Change = (e) => {
        setQuantity(e.target.value);
    }
    return (
        <table className="cart">
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Giày thể thao nam cao cấp</td>
                    <td>
                        <input onChange={Change} defaultValue={1} type="number" min={1} />
                    </td>
                    <td>{unitPrice}đ</td>
                    <td>{unitPrice * Quantity}đ</td>
                </tr>
            </tbody>
        </table>
    );
}
export default Cart