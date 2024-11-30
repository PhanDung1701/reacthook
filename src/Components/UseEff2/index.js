import { useEffect, useState } from "react";
import './UseEff2.scss'
function UseEff2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetching data from the API
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setData(data.products);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="product_list">
            {data.map((item) => (
                // Correctly returning JSX from the map() method
                <div className="product_item" key={item.id}>
                    <div className="product_img">
                        <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="product_name">{item.title}</div>
                    <div className="product_price">{item.price}$</div>
                </div>
            ))}
        </div>
    );
}

export default UseEff2;
