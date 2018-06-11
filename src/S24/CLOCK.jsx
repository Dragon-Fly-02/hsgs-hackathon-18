import React from "react";

class train extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    tick() {
        this.setState({
          date: new Date()
        });
      }
      render() {
        return (
            <div>
                <p> 
                CHÀO MỪNG CÁC BẠN ĐẾN VỚI GAME VUI CUA HUYNHSPM.SAU ĐÂY LÀ LUẬT CHƠI:
                </p>
                <b/>
                <p>        
                CÁC BẠN HÃY PICK CÁC Ô CHO VÀO BẢNG SAO CHO TỔNG CÁC HÀNG,
                CÁC CỘT VÀ ĐƯỜNG CHÉO ĐỀU BẰNG NHAU.
                </p> <b />
                <p> 
                ĐẢM BẢO CÓ CÁCH CHƠI,
                CHÚC CÁC BẠN CHƠI GAME VUI VẺ.
                </p>
                <h1> It is {this.state.date.toLocaleTimeString()} </h1>
            </div>
        );
    }
}
export default train;