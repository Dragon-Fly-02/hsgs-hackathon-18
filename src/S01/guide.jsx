import React from "react";

class Guide extends React.Component {
    render() {
        return(
            <body>
                <h1> Hướng dẫn sử dụng game S01. </h1>

                <p>
                    Nhà lập trình game 0404 vừa sáng tạo ra trò chơi cùng các biến số. <br/>
                    Hiện thì trên màn hình trò chơi là một bảng gồm các biến số với tổng giá trị trên một hàng và một cột cho trước. <br/>
                    Mỗi biến số có dạng một chữ cái latin tiếng anh, mỗi biến số sẽ dại diện cho một con số nào đó. <br/>
                    Nhiệm vụ của bạn là phải xác định giá trị các biến số để tổng giá trị các biến số thỏa mãn tổng cho trước. 
                </p>

                <p>
                    Bên cạnh bảng là các ô trống để điền các biến số. <br/>
                    Để điền giá trị ta nhấp chuột vào ô chứa biến số cần điền rồi gõ giá trị cần điền. <br/>
                    Biết rằng giá trị biến số là số tự nhiên trong khoảng từ 0 đến 9 và bảng được cho luôn tồn tại kết quả. <br/>
                    Khi ta thay đổi giá trị của một biến số, các ô trên bảng chứa biến số, tổng hàng và tổng cột sẽ được thay đổi theo. <br/>
                    Để nhận biết các ô chứa một biến số nào đó trên bảng ta chỉ cần nhấp chuột vào ô điền giá trị biến số đó. <br/>
                </p>
            </body>
        );
    }
}

export default Guide;