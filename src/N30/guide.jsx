import React from "react";

class Guide extends React.Component {
    render() {
        return(
            <body>
                <h1> Hướng dẫn sử dụng game N30. </h1>

                <p>
                   Cho 1 bảng ô vuông. <br/>
                   Mỗi con số trong bảng đại diện cho số lượng chính xác các ô đen quanh nó. <br/>
                   (Ở đây ta định nghĩa các ô xung quanh 1 ô là những ô kề cạnh). <br/>
                   Hay tô đen các ô trên bảng theo đúng quy luật trên. <br/>
                   (Chú ý được tô đen cả ô chứa số).
                </p>

                <p>
                    Để đổi màu 1 ô trên bảng, nháy chuột vào ô cần đổi. <br/>
                    Ô được nháy sẽ đổi màu từ trắng sang đen hoặc từ đen sang trắng. <br/>
                    Với các ô chứa số, tại mỗi thời điểm ô đó sẽ thể hiện số lượng chính xác các ô đen xung quanh nó chưa được tô. <br/>
                </p>
            </body>
        );
    }
}

export default Guide;