import React from "react";
import "./guide.less"

class Guide extends React.Component {
    render() {
        return(
            <div className="s51">
                <div className="guide">
                    <h1> Hướng dẫn chơi </h1>

                    <span>
                        Tomo và 0404 là 2 người bạn thân, một hôm Tomo rủ 0404 chơi cờ.
                        Bàn cờ có dạng bảng hình chữ nhật NxM, các quân cờ nằm ở một số ô trên bảng.
                        Ở mỗi lượt đi 0404 có thể chọn một quân cờ bất kì và di chuyển nó.
                        Quân cờ có thể di chuyển theo hướng lên, xuống, trái, phải 2 bước.
                        Tuy nhiên để di chuyển ô kề cạnh theo hướng nó di chuyển phải có quân cờ và ô nó di chuyển tới không có quân cờ.
                        Sau khi quân cờ di chuyển, Tomo sẽ mang quân cờ ở ô kề cạnh theo hướng quân cờ di chuyển ra khỏi bảng.
                        Trò chơi kết thúc khi chỉ còn 1 quân cờ trên bảng, hãy giúp 0404.
                    </span>

                    <span>
                        Để chọn quân cờ cần di chuyển, ta nhấp chuột vào ô chứa quân cờ, ô được nhấp sẽ được tô màu đỏ.
                        Khi đó các ô tiếp theo ta có thể di chuyển sẽ được tô màu xanh.
                        Để di chuyển đến một ô xanh nào đó, ta nhấp chuột vào ô đó.
                        Nếu bạn không muốn sử dụng quân cờ trên đề di chuyển, nhấp chuột lần nữa vào ô chứa quân cờ đó.
                        (Chú ý bạn không thể chọn 2 quân cờ để di chuyển cùng một lúc)
                    </span>
                </div>
            </div>
        );
    }
}

export default Guide;