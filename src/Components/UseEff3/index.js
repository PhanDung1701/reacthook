import { useEffect, useState } from "react";
import "./UseEff3.scss";

function UseEff3() {
    const limit = 20; // Items per page
    const [data, setData] = useState([]);
    const [active, setActive] = useState(0); // Active page index (starting at 0)
    const [pages, setPages] = useState(0); // Total number of pages

    useEffect(() => {
        // Fetching data from the API
        fetch(`https://dummyjson.com/products?skip=${active * limit}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.products); // Update the products data
                setPages(Math.ceil(data.total / limit)); // Calculate total pages
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [active]);

    // Function to handle pagination click
    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <>
            {/* Product List */}
            <div className="product_list">
                {data.map((item) => (
                    <div className="product_item" key={item.id}>
                        <div className="product_img">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="product_name">{item.title}</div>
                        <div className="product_price">{item.price}$</div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: pages }, (_, index) => (
                    <li
                        key={index}
                        className={index === active ? "active" : ""}
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </li>
                ))}
            </div>
        </>
    );
}

export default UseEff3;
