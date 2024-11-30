import { useState } from "react";
function RandomGift() {
    const gift = [
        "Một cuốn sách mới",
        "Một món đồ thủ công",
        "Một buổi tối xem phim",
        "Một ngày ở spa",
        "Một bữa ăn bất ngờ",
        "Một ngày nghỉ",
        "Một trò chơi mới",
        "Một khoản quyên góp cho tổ chức từ thiện",
        "Một bữa tiệc bất ngờ",
        "Một kỳ nghỉ cuối tuần",
        "Một món trang sức mới",
        "Một bộ dụng cụ sở thích mới",
    ]
    const [result, setResult] = useState("")
    const handleClick = () => {
        const random = Math.floor(Math.random() * gift.length)
        setResult(gift[random])
    }
    return (
        <>
            <button onClick={handleClick}>Nhận quà ngẫu nhiên</button>
            <div>Món quà bạn nhận được là: {result}</div>
        </>
    )
}
export default RandomGift;