import React from "react";
import "./guide.less"

class Guide extends React.Component {
    render() {
        return(
            <div className="guide">
                <h1> Hướng dẫn chơi </h1>

                <span>
                   Cho 1 bảng ô vuông.
                   Mỗi con số trong bảng đại diện cho số lượng chính xác các ô đen quanh nó.
                   (Ở đây ta định nghĩa các ô xung quanh 1 ô là những ô kề cạnh).
                   Hay tô đen các ô trên bảng theo đúng quy luật trên.
                   (Chú ý được tô đen cả ô chứa số).
                </span>

                <span>
                    Để đổi màu 1 ô trên bảng, nháy chuột vào ô cần đổi.
                    Ô được nháy sẽ đổi màu từ trắng sang đen hoặc từ đen sang trắng.
                    Với các ô chứa số, tại mỗi thời điểm ô đó sẽ thể hiện số lượng chính xác các ô đen xung quanh nó chưa được tô.
                </span>
            </div>
        );
    }
}

export default Guide;