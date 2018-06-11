import React from "react";
import "./guide.less";

class Guide extends React.Component {
    render() {
        return(
          <div className="n13">
            <div className="guide">
              <h1> Hướng dẫn chơi </h1>
              <span>
                Một nhà thám hiểm Ned Bright luôn dũng cảm đương đầu với hiểm nguy để 
                sở hữu những viên kim cương mà ông khao khát. Cửa ra vào khu hầm mỏ 
                được đặt theo điểm mũi tên đánh dấu. Ned buộc phải đi đúng lộ trình 
                qua các ô chứa kim cương và không được bước phạm vào ô đánh số. Tuy 
                nhiên, con số trong ô đánh số lại biểu thị lượng ô xung quanh mà Ned 
                buộc phải đi qua (kể cả những ô liền kề ở góc). Ngoài ra, Ned cũng không 
                được phép di chuyển chéo và không được đi hết cả 4 ô của những vùng 
                trống có dạng hình vuông 2x2. Nếu không cả khu mỏ sẽ bị sụp.
              </span>

              <br/>
              <span>
                Ned đang rất cần bạn giúp để tìm đường vào và ra khỏi khu mỏ sao cho
                không bị chôn sống. Nếu thành công, Ned rất sẵn lòng chia cho bạn ít
                chiến lợi phẩm thu được.
              </span>

              <br/>
              <span>
                Các ô màu xanh nhẹ sẽ biểu thị các ô có thể đi vào. Bạn chỉ cần click chuột
                vào vị trí muốn đến và ô đó sẽ biến thành màu hồng đậm.
              </span>
            </div>
          </div>
        );
    }
}

export default Guide;