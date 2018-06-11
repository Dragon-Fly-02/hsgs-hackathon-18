import React from "react";

class Guide extends React.Component {
    render() {
        return(
            <body>
                <h1> Hướng dẫn sử dụng game N31. </h1>

                <p>
                   Cho 1 bảng ô số NxN với N chẵn. <br/>
                   Bảng trên có định dạng khá đặc biệt. <br/>
                   Nhưng ô tròn trắng sẽ chứa các số chẵn. <br/>
                   Những ô tròn xám sẽ chứa các số lẻ. <br/>
                   Mỗi hàng và mỗi cột đều chứa tất cả các số từ 0 đến N-1. <br/>
                   Nhiệm vụ của bạn là điền các số vào mỗi ô còn trống để tạo được 1 bảng thỏa mãn. <br/>
                </p>

                <p>
                    Để điền số vào ô nhấp chuột vào ô cần điền rồi gõ số cần điền. <br/>
                    Chú ý số được gõ phải thõa mãn là số tự nhiên không được vượt quá N - 1. <br/>
                </p>
            </body>
        );
    }
}

export default Guide;