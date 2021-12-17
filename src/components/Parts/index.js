import React from "react";
import { RightH2, RightH3, RightH4, RightP, Div, Image, RightWordBold, RightWordItalic, RightWordNot } from '../DetailCoursesElements/index';
import { FaCircle } from 'react-icons/fa';

// 1
export const MenhDe = () => {
    return (
        <>
            <Div id="1">
                <RightH2>Mệnh đề</RightH2>
                <RightH3 id="1_1">1. Định nghĩa</RightH3>
                <RightP>Mệnh đề là một khẳng định có giá trị chân lý xác định, đúng hoặc sai.</RightP>
                <RightP>Câu hỏi, câu cảm thán, mệnh lệnh… không là mệnh đề.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>* Đại học CNTT trực thuộc ĐHQG TP.HCM.</RightP>
                <RightP>* 1+7 =8.</RightP>
                <RightP>* Hôm nay em đẹp quá!  (không là mệnh đề)</RightP>
                <RightP>* Hôm nay ngày thứ mấy? (không là mệnh đề)</RightP>
                <RightH4 id="1_1_a">a. Ký hiệu</RightH4>
                <RightP>Người ta dùng các ký hiệu P, Q, R… (p,q,r,…) để chỉ mệnh đề.</RightP>
                <RightH4 id="1_1_b">b. Chân trị</RightH4>
                <RightP>Một mệnh đề chỉ có thể đúng hoặc sai, không thể đồng thời vừa đúng vừa sai. Khi mệnh đề P đúng ta nói P có chân trị đúng, ngược lại ta nói P có chân trị sai. </RightP>
                <RightP>Chân trị đúng và chân trị sai sẽ được ký hiệu lần lượt là 1(hay Đ,T) và 0(hay S,F)</RightP>
                <RightH3 id="1_2">2. Phân loại</RightH3>
                <RightH4 id="1_2_a">a. Phức hợp</RightH4>
                <RightP>Phức hợp là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,…) hoặc trạng từ “không”.</RightP>
                <RightH4 id="1_2_b">b. Sơ cấp</RightH4>
                <RightP>Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- 2 là số nguyên tố.(Sơ cấp)</RightP>
                <RightP>- 2 không là số nguyên tố.(Sơ cấp)</RightP>
                <RightP>- 2 là số nguyên tố và là số lẻ.(Phức hợp)</RightP>
                <RightP>- An đang xem ti vi hay đang học bài.(Phức hợp)</RightP>
                <RightH3 id="1_3">3. Các phép toán</RightH3>
                <RightH4 id="1_3_a">a. Phủ định</RightH4>
                <RightP>Phủ định của mệnh đề P là một mệnh đề, ký hiệu là  &#8514;P hay    (đọc là “không” P hay “phủ định của” P).</RightP>
                <Div className="d-flex justify-content-between">
                    <RightP>Bảng chân trị :</RightP>
                    <Image src={require('../../images/phudinh.jpg').default} />
                </Div>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <Div className="d-flex justify-content-around">
                    <RightP>2 là số nguyên tố.</RightP>
                    <RightP>Phủ định: 2 không là số nguyên tố</RightP>
                </Div>
                <Div className="d-flex justify-content-around">
                    <RightP>15 &gt; 5 </RightP>
                    <RightP>Phủ định: 15 ≤ 5</RightP>
                </Div>
                <RightH4 id="1_3_b">b. Hội</RightH4>
                <RightP>Hội của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8743; Q (đọc là “P và Q)</RightP>
                <Div className="d-flex justify-content-between">
                    <RightP>Bảng chân trị :</RightP>
                    <Image src={require('../../images/hoi.jpg').default} />
                </Div>
                <RightP>Nhận xét: P &#8743; Q đúng khi và chỉ khi P và Q đồng thời đúng.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- P: “Hôm nay là chủ nhật”</RightP>
                <RightP>- Q: “Hôm nay trời mưa”</RightP>
                <RightP>- P &#8743; Q: “ Hôm nay là chủ nhật và trời mưa”</RightP>
                <RightH4 id="1_3_c">c. Tuyển</RightH4>
                <RightP>Tuyển của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8744; Q (đọc là “P hay Q”).</RightP>
                <Div className="d-flex justify-content-between">
                    <RightP>Bảng chân trị :</RightP>
                    <Image src={require('../../images/tuyen.jpg').default} />
                </Div>
                <RightP>Nhận xét: P &#8744; Q sai khi và chỉ khi P và Q đồng thời sai.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- e &gt; 4 hay e &gt; 5. (Sai)</RightP>
                <RightP>- 2 là số nguyên tố hay là số lẻ. (Đúng)</RightP>
                <RightH4 id="1_3_d">d. Kéo theo</RightH4>
                <RightP>Mệnh đề P kéo theo mệnh đề Q là một mệnh đề, kí hiệu P &rarr; Q (đọc là “P kéo theo Q” hay “Nếu P thì Q” hay “P là điều kiện đủ của Q” hay “Q là điều kiện cần của P”).</RightP>
                <Div className="d-flex justify-content-between">
                    <RightP>Bảng chân trị :</RightP>
                    <Image src={require('../../images/keotheo.jpg').default} />
                </Div>
                <RightP>Nhận xét: P &rarr; Q sai khi và chỉ khi P đúng mà Q sai.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- e &gt; 4 hay 5 &gt; 6.</RightP>
                <RightH4 id="1_3_e">e. Kéo theo hai chiều(Tương đương)</RightH4>
                <RightP>Mệnh đề P kéo theo mệnh đề Q và ngược lại (mệnh đề P tương đương với mệnh đề Q) là một mệnh đề, ký hiệu P &harr; Q (đọc là “P nếu và chỉ nếu Q” hay “P khi và chỉ khi Q” hay “P là điều  kiện cần và đủ của Q”).</RightP>
                <Div className="d-flex justify-content-between">
                    <RightP>Bảng chân trị :</RightP>
                    <Image src={require('../../images/keotheo.jpg').default} />
                </Div>
                <RightP>Nhận xét: P &harr; Q đúng khi và chỉ khi P và Q có cùng chân trị.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- 6 chia hết cho 3 khi và chỉ khi 6 chia hết cho 2.</RightP>
            </Div>
        </>
    )
}
// 2
export const PhanLoaiMenhDe = () => {
    return (
        <>
            <RightH3 id="1_2">Phân loại</RightH3>
            <RightH4 id="1_2_a">a. Phức hợp</RightH4>
            <RightP>Phức hợp là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,…) hoặc trạng từ “không”.</RightP>
            <RightH4 id="1_2_b">b. Sơ cấp</RightH4>
            <RightP>Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- 2 là số nguyên tố.(Sơ cấp)</RightP>
            <RightP>- 2 không là số nguyên tố.(Sơ cấp)</RightP>
            <RightP>- 2 là số nguyên tố và là số lẻ.(Phức hợp)</RightP>
            <RightP>- An đang xem ti vi hay đang học bài.(Phức hợp)</RightP>
        </>
    )
}
// 3
export const PhucHop = () => {
    return (
        <>
            <RightH3 id="1_2_a">Phức hợp</RightH3>
            <RightP>Phức hợp là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,…) hoặc trạng từ “không”.</RightP>
        </>
    )
}
// 4
export const SoCap = () => {
    return (
        <>
            <RightH3 id="1_2_b">Sơ cấp</RightH3>
            <RightP>Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- 2 là số nguyên tố.(Sơ cấp)</RightP>
            <RightP>- 2 không là số nguyên tố.(Sơ cấp)</RightP>
            <RightP>- 2 là số nguyên tố và là số lẻ.(Phức hợp)</RightP>
            <RightP>- An đang xem ti vi hay đang học bài.(Phức hợp)</RightP>
        </>
    )
}
// 22
export const CacPhepToanLogic = () => {
    return (
        <>
            <RightH3 id="1_3">Các phép toán</RightH3>
            <RightH4 id="1_3_a">a. Phủ định</RightH4>
            <RightP>Phủ định của mệnh đề P là một mệnh đề, ký hiệu là  &#8514;P hay    (đọc là “không” P hay “phủ định của” P).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/phudinh.jpg').default} />
            </Div>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <Div className="d-flex justify-content-around">
                <RightP>2 là số nguyên tố.</RightP>
                <RightP>Phủ định: 2 không là số nguyên tố</RightP>
            </Div>
            <Div className="d-flex justify-content-around">
                <RightP>15 &gt; 5 </RightP>
                <RightP>Phủ định: 15 ≤ 5</RightP>
            </Div>
            <RightH4 id="1_3_b">b. Hội</RightH4>
            <RightP>Hội của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8743; Q (đọc là “P và Q)</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/hoi.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &#8743; Q đúng khi và chỉ khi P và Q đồng thời đúng.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- P: “Hôm nay là chủ nhật”</RightP>
            <RightP>- Q: “Hôm nay trời mưa”</RightP>
            <RightP>- P &#8743; Q: “ Hôm nay là chủ nhật và trời mưa”</RightP>
            <RightH4 id="1_3_c">c. Tuyển</RightH4>
            <RightP>Tuyển của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8744; Q (đọc là “P hay Q”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/tuyen.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &#8744; Q sai khi và chỉ khi P và Q đồng thời sai.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- e &gt; 4 hay e &gt; 5. (Sai)</RightP>
            <RightP>- 2 là số nguyên tố hay là số lẻ. (Đúng)</RightP>
            <RightH4 id="1_3_d">d. Kéo theo</RightH4>
            <RightP>Mệnh đề P kéo theo mệnh đề Q là một mệnh đề, kí hiệu P &rarr; Q (đọc là “P kéo theo Q” hay “Nếu P thì Q” hay “P là điều kiện đủ của Q” hay “Q là điều kiện cần của P”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/keotheo.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &rarr; Q sai khi và chỉ khi P đúng mà Q sai.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- e &gt; 4 hay 5 &gt; 6.</RightP>
            <RightH4 id="1_3_e">e. Kéo theo hai chiều(Tương đương)</RightH4>
            <RightP>Mệnh đề P kéo theo mệnh đề Q và ngược lại (mệnh đề P tương đương với mệnh đề Q) là một mệnh đề, ký hiệu P &harr; Q (đọc là “P nếu và chỉ nếu Q” hay “P khi và chỉ khi Q” hay “P là điều  kiện cần và đủ của Q”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/keotheo.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &harr; Q đúng khi và chỉ khi P và Q có cùng chân trị.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- 6 chia hết cho 3 khi và chỉ khi 6 chia hết cho 2.</RightP>
        </>
    )
}
// 5
export const PhuDinh = () => {
    return (
        <>
            <RightH3 id="1_3_a">Phủ định</RightH3>
            <RightP>Phủ định của mệnh đề P là một mệnh đề, ký hiệu là  &#8514;P hay    (đọc là “không” P hay “phủ định của” P).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/phudinh.jpg').default} />
            </Div>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <Div className="d-flex justify-content-around">
                <RightP>2 là số nguyên tố.</RightP>
                <RightP>Phủ định: 2 không là số nguyên tố</RightP>
            </Div>
            <Div className="d-flex justify-content-around">
                <RightP>15 &gt; 5 </RightP>
                <RightP>Phủ định: 15 ≤ 5</RightP>
            </Div>
        </>
    )
}
// 6
export const Hoi = () => {
    return (
        <>
            <RightH3 id="1_3_b">Hội</RightH3>
            <RightP>Hội của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8743; Q (đọc là “P và Q)</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/hoi.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &#8743; Q đúng khi và chỉ khi P và Q đồng thời đúng.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- P: “Hôm nay là chủ nhật”</RightP>
            <RightP>- Q: “Hôm nay trời mưa”</RightP>
            <RightP>- P &#8743; Q: “ Hôm nay là chủ nhật và trời mưa”</RightP>
        </>
    )
}
// 7
export const Tuyen = () => {
    return (
        <>
            <RightH3 id="1_3_c">Tuyển</RightH3>
            <RightP>Tuyển của hai mệnh đề P, Q là một mệnh đề, kí hiệu P &#8744; Q (đọc là “P hay Q”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/tuyen.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &#8744; Q sai khi và chỉ khi P và Q đồng thời sai.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- e &gt; 4 hay e &gt; 5. (Sai)</RightP>
            <RightP>- 2 là số nguyên tố hay là số lẻ. (Đúng)</RightP>
        </>
    )
}
// 8
export const KeoTheo = () => {
    return (
        <>
            <RightH3 id="1_3_d">Kéo theo</RightH3>
            <RightP>Mệnh đề P kéo theo mệnh đề Q là một mệnh đề, kí hiệu P &rarr; Q (đọc là “P kéo theo Q” hay “Nếu P thì Q” hay “P là điều kiện đủ của Q” hay “Q là điều kiện cần của P”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/keotheo.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &rarr; Q sai khi và chỉ khi P đúng mà Q sai.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- e &gt; 4 hay 5 &gt; 6.</RightP>
        </>
    )
}
// 9
export const KeoTheoHaiChieu = () => {
    return (
        <>
            <RightH3 id="1_3_e">Kéo theo hai chiều(Tương đương)</RightH3>
            <RightP>Mệnh đề P kéo theo mệnh đề Q và ngược lại (mệnh đề P tương đương với mệnh đề Q) là một mệnh đề, ký hiệu P &harr; Q (đọc là “P nếu và chỉ nếu Q” hay “P khi và chỉ khi Q” hay “P là điều  kiện cần và đủ của Q”).</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Bảng chân trị :</RightP>
                <Image src={require('../../images/keotheo.jpg').default} />
            </Div>
            <RightP>Nhận xét: P &harr; Q đúng khi và chỉ khi P và Q có cùng chân trị.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>- 6 chia hết cho 3 khi và chỉ khi 6 chia hết cho 2.</RightP>
        </>
    )
}
// 10
export const BieuThucLogic = () => {
    return (
        <>
            <Div>
                <RightH2 id="2">Biểu thức logic</RightH2>
                <RightH3 id="2_1">1. Định nghĩa</RightH3>
                <RightP>Biểu thức logic được cấu tạo từ:</RightP>
                <RightP>- Các mệnh đề (các hằng mệnh đề)</RightP>
                <RightP>- Các biến mệnh đề p, q, r, …, tức là các biến lấy giá trị là các mệnh đề nào đó</RightP>
                <RightP>- Các phép toán logic &#8514;, &#8743;, &#8744;, &rarr;, &harr; và dấu đóng mở ngoặc () để chỉ rõ thứ tự thực hiện của các phép toán.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>- E(p,q) = &#8514;(&#8514;p &#8744; q)</RightP>
                <RightP>- F(p,q,r) = (p &#8743; q) &rarr; &#8514;(q &#8744; r)</RightP>
                {/* <RightP></RightP> */}
                <RightH3 id="2_2">2. Độ ưu tiên và bảng chân trị</RightH3>
                <RightP>- Ưu tiên mức 1: ()</RightP>
                <RightP>- Ưu tiên mức 2: &#8514;</RightP>
                <RightP>- Ưu tiên mức 3: &#8743;, &#8744;</RightP>
                <RightP>- Ưu tiên mức 4: &rarr;, &harr;</RightP>
                <RightP>Bảng chân trị của một biểu thức logic: là bảng liệt kê chân trị của biểu thức logic theo các trường hợp về chân trị của tất cả các biến mệnh đề trong biểu thức logic hay theo các bộ giá trị của bộ biến mệnh đề.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span> Cho E(p,q,r) =(p &#8744; q) &rarr; r .</RightP>
                <RightP>Ta có bảng chân trị sau:</RightP>
                <Image style={{ marginLeft: '90px' }} src={require('../../images/douutien_bangchantri.jpg').default} />
                {/* <RightP></RightP> */}
                <RightH3 id="2_3">3. Tương đương logic</RightH3>
                <RightP>Hai biểu thức logic E và F theo các biến mệnh đề nào đó được gọi là tương đương logic nếu chúng có cùng bảng chân trị.</RightP>
                <RightP>Ký hiệu: E &hArr; F  (E tương đương với F).</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span>  &#8514;(p &#8744; q) &hArr; &#8514;p &#8743; &#8514;q</RightP>
                <RightP>Biểu thức logic E được gọi là hằng đúng nếu chân trị của E luôn bằng 1(đúng) trong mọi trường hợp về chân trị của các biến mệnh đề có trong E. Nói cách khác, E là hằng đúng khi ta có E &hArr; 1.</RightP>
                <RightP>Tương tự, E là một hằng sai khi ta có E &hArr; 0.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span> E(p,q) = p &#8743; &#8514;p là hằng sai.</RightP>
                <RightP>F(p,q) =(p&rarr;q) &harr; (&#8514;p &#8744; q) là hằng đúng.</RightP>
                <RightP>Định lý: Hai biểu thức logic E và F tương đương với nhau khi và chỉ khi E &harr; F là hằng đúng.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span> (p&rarr;q) &hArr; (&#8514;p &#8744; q)</RightP>
                <RightP>Hệ quả logic: F được gọi là hệ quả logic của E nếu E &rarr; F là hằng đúng.</RightP>
                <RightP>Ký hiệu: E &rArr; F</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span> &#8514;(p &#8744; q) &rArr; &#8514;p</RightP>
                {/* <RightP></RightP> */}
                <RightH3 id="2_4">4. Các luật logic</RightH3>
                <RightP className="font-weight-bold">(1) Phủ định của phủ định: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;&#8514;p &hArr; p</RightP>
                <RightP className="font-weight-bold">(2) Qui tắc De Morgan: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;(p &#8744; q) &hArr; &#8514;p &#8743; &#8514;q</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;(p &#8743; q) &hArr; &#8514;p &#8744; &#8514;q</RightP>
                <RightP className="font-weight-bold">(3) Luật giao hoán: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; q &hArr; q &#8744; p</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; q &hArr; q &#8743; p</RightP>
                <RightP className="font-weight-bold">(4) Luật kết hợp: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />(p &#8744; q) &#8744; r &hArr; p &#8744; (q &#8744; r)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />(p &#8743; q) &#8743; r &hArr; p &#8743; (q &#8743; r)</RightP>
                <RightP className="font-weight-bold">(5) Luật phân phối: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; (q &#8743; r) &hArr; (p &#8744; q) &#8743; (p &#8744; r)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; (q &#8744; r) &hArr; (p &#8743; q) &#8744; (p &#8743; r)</RightP>
                <RightP className="font-weight-bold">(6) Luật lũy đẳng: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; p &hArr; p</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; p &hArr; p</RightP>
                <RightP className="font-weight-bold">(7) Luật trung hòa: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; 0 &hArr; p</RightP>
                <RightP> <FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; 1 &hArr; p</RightP>
                <RightP className="font-weight-bold">(8) Luật về phần tử bù: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; &#8514;p &hArr; 0</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; &#8514;p &hArr; 1</RightP>
                <RightP className="font-weight-bold">(9) Luật thống trị: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; 0 &hArr; 0</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; 1 &hArr; 1</RightP>
                <RightP className="font-weight-bold">(10) Luật hấp thu: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; (p &#8743; q) &hArr; p</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; (p &#8744; q) &hArr; p</RightP>
                <RightP className="font-weight-bold">(11) Luật về phép kéo theo: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &rarr; q &hArr; &#8514;p &#8744; q &hArr; &#8514;q &rarr; &#8514;p</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span> Cho p, q, r là các biến mệnh đề. Chứng minh rằng: (&#8514;p &rarr; r) &#8743; (q &rarr; r) &hArr; (p &rarr; q) &rarr; r </RightP>
                <RightP className="font-weight-bold">Giải:</RightP>
                <RightP>(&#8514;p &rarr; r) &#8743;  (q &rarr; r)</RightP>
                <RightP>&hArr;  ( p &#8744; r ) &#8743;  (&#8514;q &#8744; r)</RightP>
                <RightP>&hArr;  ( p &#8743; &#8514;q ) &#8744; r</RightP>
                <RightP>&hArr; &#8514;(&#8514;p &#8744; q ) &#8744; r</RightP>
                <RightP>&hArr; &#8514;( p &rarr; q ) &#8744; r</RightP>
                <RightP>&hArr; (p &rarr; q ) &rarr; r</RightP>
                {/* <RightP></RightP> */}
            </Div>
        </>
    )
}
// 11
export const BangChanTri = () => {
    return (
        <>
            <RightH3 id="2_2">Độ ưu tiên và bảng chân trị</RightH3>
            <RightP>- Ưu tiên mức 1: ()</RightP>
            <RightP>- Ưu tiên mức 2: &#8514;</RightP>
            <RightP>- Ưu tiên mức 3: &#8743;, &#8744;</RightP>
            <RightP>- Ưu tiên mức 4: &rarr;, &harr;</RightP>
            <RightP>Bảng chân trị của một biểu thức logic: là bảng liệt kê chân trị của biểu thức logic theo các trường hợp về chân trị của tất cả các biến mệnh đề trong biểu thức logic hay theo các bộ giá trị của bộ biến mệnh đề.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span> Cho E(p,q,r) =(p &#8744; q) &rarr; r .</RightP>
            <RightP>Ta có bảng chân trị sau:</RightP>
            <Image style={{ marginLeft: '90px' }} src={require('../../images/douutien_bangchantri.jpg').default} />
        </>
    )
}
// 12
export const TuongDuongLogic = () => {
    return (
        <>
            <RightH3 id="2_3">Tương đương logic</RightH3>
            <RightP>Hai biểu thức logic E và F theo các biến mệnh đề nào đó được gọi là tương đương logic nếu chúng có cùng bảng chân trị.</RightP>
            <RightP>Ký hiệu: E &hArr; F  (E tương đương với F).</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span>  &#8514;(p &#8744; q) &hArr; &#8514;p &#8743; &#8514;q</RightP>
            <RightP>Biểu thức logic E được gọi là hằng đúng nếu chân trị của E luôn bằng 1(đúng) trong mọi trường hợp về chân trị của các biến mệnh đề có trong E. Nói cách khác, E là hằng đúng khi ta có E &hArr; 1.</RightP>
            <RightP>Tương tự, E là một hằng sai khi ta có E &hArr; 0.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span> E(p,q) = p &#8743; &#8514;p là hằng sai.</RightP>
            <RightP>F(p,q) =(p&rarr;q) &harr; (&#8514;p &#8744; q) là hằng đúng.</RightP>
            <RightP>Định lý: Hai biểu thức logic E và F tương đương với nhau khi và chỉ khi E &harr; F là hằng đúng.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span> (p&rarr;q) &hArr; (&#8514;p &#8744; q)</RightP>
            <RightP>Hệ quả logic: F được gọi là hệ quả logic của E nếu E &rarr; F là hằng đúng.</RightP>
            <RightP>Ký hiệu: E &rArr; F</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span> &#8514;(p &#8744; q) &rArr; &#8514;p</RightP>
        </>
    )
}
// 13
export const CacLuatLogic = () => {
    return (
        <>
            <RightH3 id="2_4">Các luật logic</RightH3>
            <RightP className="font-weight-bold">(1) Phủ định của phủ định: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;&#8514;p &hArr; p</RightP>
            <RightP className="font-weight-bold">(2) Qui tắc De Morgan: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;(p &#8744; q) &hArr; &#8514;p &#8743; &#8514;q</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />&#8514;(p &#8743; q) &hArr; &#8514;p &#8744; &#8514;q</RightP>
            <RightP className="font-weight-bold">(3) Luật giao hoán: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; q &hArr; q &#8744; p</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; q &hArr; q &#8743; p</RightP>
            <RightP className="font-weight-bold">(4) Luật kết hợp: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />(p &#8744; q) &#8744; r &hArr; p &#8744; (q &#8744; r)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />(p &#8743; q) &#8743; r &hArr; p &#8743; (q &#8743; r)</RightP>
            <RightP className="font-weight-bold">(5) Luật phân phối: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; (q &#8743; r) &hArr; (p &#8744; q) &#8743; (p &#8744; r)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; (q &#8744; r) &hArr; (p &#8743; q) &#8744; (p &#8743; r)</RightP>
            <RightP className="font-weight-bold">(6) Luật lũy đẳng: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; p &hArr; p</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; p &hArr; p</RightP>
            <RightP className="font-weight-bold">(7) Luật trung hòa: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; 0 &hArr; p</RightP>
            <RightP> <FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; 1 &hArr; p</RightP>
            <RightP className="font-weight-bold">(8) Luật về phần tử bù: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; &#8514;p &hArr; 0</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; &#8514;p &hArr; 1</RightP>
            <RightP className="font-weight-bold">(9) Luật thống trị: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; 0 &hArr; 0</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; 1 &hArr; 1</RightP>
            <RightP className="font-weight-bold">(10) Luật hấp thu: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8744; (p &#8743; q) &hArr; p</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &#8743; (p &#8744; q) &hArr; p</RightP>
            <RightP className="font-weight-bold">(11) Luật về phép kéo theo: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />p &rarr; q &hArr; &#8514;p &#8744; q &hArr; &#8514;q &rarr; &#8514;p</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span> Cho p, q, r là các biến mệnh đề. Chứng minh rằng: (&#8514;p &rarr; r) &#8743; (q &rarr; r) &hArr; (p &rarr; q) &rarr; r </RightP>
            <RightP className="font-weight-bold">Giải:</RightP>
            <RightP>(&#8514;p &rarr; r) &#8743;  (q &rarr; r)</RightP>
            <RightP>&hArr;  ( p &#8744; r ) &#8743;  (&#8514;q &#8744; r)</RightP>
            <RightP>&hArr;  ( p &#8743; &#8514;q ) &#8744; r</RightP>
            <RightP>&hArr; &#8514;(&#8514;p &#8744; q ) &#8744; r</RightP>
            <RightP>&hArr; &#8514;( p &rarr; q ) &#8744; r</RightP>
            <RightP>&hArr; (p &rarr; q ) &rarr; r</RightP>
        </>
    )
}
// 14
export const QuyTacSuyDien = () => {
    return (
        <>
            <Div>
                <RightH2 id="3">Quy tắc suy diễn</RightH2>
                <RightH3 id="3_1">1. Định nghĩa</RightH3>
                <RightP>Trong các chứng minh toán học, ta thường thấy những lý luận dẫn xuất có dạng: nếu <RightWordItalic>P1</RightWordItalic> và <RightWordItalic>P2</RightWordItalic> và <RightWordItalic>Pn</RightWordItalic> thì <RightWordItalic>Q</RightWordItalic></RightP>
                <RightP>Dạng lý luận này là đúng khi ta có biểu thức
                    <RightWordItalic>(P1 &#8743; P2 &#8743; ... &#8743; Pn &rarr; Q) </RightWordItalic>
                    là hằng đúng.</RightP>
                <RightP>Ta gọi dạng lý luận trên là một quy tắc suy diễn và thường được viết theo các cách sau đây:</RightP>
                <RightP><RightWordBold>Cách 1: Biểu thức hằng đúng</RightWordBold></RightP>
                <RightP className="text-center">
                    <RightWordItalic> [(P1 &#8743; P2 &#8743; ... &#8743; Pn &rarr; Q)] &hArr; 1</RightWordItalic>
                </RightP>
                <RightP><RightWordBold>Cách 2: Dòng suy diễn</RightWordBold></RightP>
                <RightP className="text-center">
                    <RightWordItalic> (P1 &#8743; P2 &#8743; ... &#8743; Pn) &rarr; Q</RightWordItalic></RightP>
                <RightP><RightWordBold>Cách 3: Mô hình suy diễn</RightWordBold></RightP>
                <RightP className="text-center">
                    <RightWordItalic>
                        P1 <br />
                        P2 <br />
                        &#8285; <br />
                        Pn <br />
                        &mdash; <br />
                        Q
                    </RightWordItalic></RightP>
                <RightP>Các biểu thức logic <RightWordItalic>P1, P2,…,Pn</RightWordItalic> được gọi là giả thiết (hay tiên đề), biểu thức <RightWordItalic>Q</RightWordItalic> được gọi là kết luận.</RightP>

                <RightH3 id="3_2">2. Quy tắc khẳng định<br />(Modus Ponens)</RightH3>
                <Div className="d-flex justify-content-between align-items-center">
                    <RightP>[(p &rarr; q) &#8743; p] &rArr; q</RightP>
                    <Image src={require('../../images/modus_ponens.jpg').default} />
                </Div>
                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                <Div className="d-flex justify-content-between align-items-center">
                    <Div>
                        <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Học tốt thi đậu</RightP>
                        <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Sinh viên A học tốt</RightP>
                    </Div>
                    <RightP>Suy ra: Sinh viên A  thi đậu</RightP>
                </Div>
                <Div className="d-flex justify-content-between align-items-center">
                    <Div>
                        <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu chuồn chuồn bay thấp thì mưa</RightP>
                        <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Thấy chuồn chuồn bay thấp</RightP>
                    </Div>
                    <RightP>Suy ra: trời mưa</RightP>
                </Div>
                {/* <RightP></RightP> */}
                <RightH3 id="3_3">3.3 Quy tắc phủ định<br />(Modus Tollens)</RightH3>
                <Div className="d-flex justify-content-between align-items-center">
                    <RightP>[(p &rarr; q) &#8743; &#8514;q] &rArr; &#8514;p</RightP>
                    <Image src={require('../../images/modus_tollens.jpg').default} />
                </Div>
                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu A đi học đầy đủ thì A đậu toán rời rạc.</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />A không đậu toán rời rạc.</RightP>
                <RightP style={{ marginLeft: '150px' }}>Suy ra: A không đi học đầy đủ.</RightP>
                <RightH3 id="3_4">3.4 Quy tắc tam đoạn luận</RightH3>
                <Div className="d-flex justify-content-between align-items-center">
                    <RightP>[(p &rarr; q) &#8743; (q &rarr; r)] &rArr; (p &rarr; r)</RightP>
                    <Image src={require('../../images/tamdoanluan.jpg').default} />
                </Div>
                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu trời mưa thì đường ướt</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu đường ướt thì đường trơn</RightP>
                <RightP style={{ marginLeft: '150px' }}>Suy ra: nếu trời mưa thì đường trơn.</RightP>
                <RightH3 id="3_5">3.5 Quy tắc phản chứng</RightH3>
                <RightP className="text-center">(p &rarr; q) &hArr; [(p &#8743; &#8514;q) &rarr; 0]</RightP>
                <RightP><RightWordBold>Tổng quát:</RightWordBold></RightP>
                <RightP><RightWordItalic>[(P1 &#8743; P2 &#8743; ... &#8743; Pn) &rarr; Q] &hArr; [(P1 &#8743; P2 &#8743; ... &#8743; Pn &#8743; &#8514;Q) &rarr; 0]</RightWordItalic></RightP>
                <RightP>Để chứng minh vế trái là một hằng đúng, ta chứng minh nếu thêm phủ định của q vào các tiên đề thì được một mâu thuẫn.</RightP>
                <Div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                    <Image style={{ width: '35%' }} src={require('../../images/phanchung1.jpg').default} />
                    <Image style={{ width: '35%' }} src={require('../../images/phanchung2.jpg').default} />
                </Div>
                <RightH3 id="3_6">3.6 Quy tắc chứng minh theo trường hợp</RightH3>
                <RightP className="text-center">[(p &rarr; r) &#8743; (q &rarr; r)] &rArr; [(p &#8744; q) &rarr; r]</RightP>
                <RightP><RightWordBold>Tổng quát:</RightWordBold></RightP>
                <RightP className="text-center"><RightWordItalic>[(P1 &rarr; Q) &#8743; (P2 &rarr; Q) &#8743; ... &#8743; (Pn &rarr; Q)] &rArr; [(P1 &#8744; P2 &#8744; ... &#8744; Pn) &rarr; Q]</RightWordItalic></RightP>
                <RightH3 id="3_7">3.7 Quy tắc phản ví dụ</RightH3>
                <RightP>Để chứng minh một phép suy luận là sai hay không là một hằng đúng, ta chỉ cần chỉ ra một phản ví dụ.</RightP>
                <RightP>Để tìm một phản ví dụ ta chỉ cần chỉ ra một trường hợp về chân trị của các biến mệnh đề sao cho các tiên đề trong phép suy luận là đúng còn kết luận là sai.</RightP>
                <RightP><RightWordBold>Ví dụ:</RightWordBold> Hãy kiểm tra suy luận:</RightP>
                <RightP className="text-center"><RightWordItalic>
                    p &rarr; r <br />
                    p <br />
                    &#8514;r &rarr; q <br />
                    &mdash;&mdash;&mdash;&mdash; <br />
                    &#8278;q
                </RightWordItalic></RightP>
                <RightP>Nhận xét: Ta sẽ tìm thấy p, q, r thỏa</RightP>
                <RightP className="text-center"><RightWordItalic>
                    p &rarr; r = 1<br />
                    p = 1<br />
                    &#8514;r &rarr; q = 1<br />
                    &mdash;&mdash;&mdash;&mdash;&mdash; <br />
                    &#8278;q = 0
                </RightWordItalic></RightP>
                <RightP>Dễ dàng tìm thấy một phản ví dụ:  p=1,q=0,r=1. <br />Vậy suy luận đã cho là không đúng.</RightP>
                <RightP><RightWordBold>Ví dụ: </RightWordBold>Ông Minh nói rằng nếu không được tăng lương thì ông ta sẽ nghỉ việc. Mặt khác, nếu ông ấy nghỉ việc và vợ ông ấy bị mất việc thì phải bán xe.Biết rằng nếu vợ ông Minh hay  đi làm trễ thì trước sau gì cũng sẽ bị mất việc và cuối cùng ông Minh đã được tăng lương. <br />Suy ra nếu ông Minh không bán xe thì vợ ông ta đã không đi làm trễ.</RightP>
                <Div className="d-flex justify-content-between align-items-center">
                    <Div>
                        <RightP>p: ông Minh được tăng lương. <br />
                            q: ông Minh nghỉ việc.<br />
                            r: vợ ông Minh mất việc.<br />
                            s: gia đình phải bán xe.<br />
                            t: vợ ông hay đi làm trể. </RightP>
                    </Div>
                    <Image src={require('../../images/phanvidu.jpg').default} />
                </Div>

            </Div>
        </>
    )
}
// 15
export const QuyTacKhangDinh = () => {
    return (
        <>
            <RightH3 id="3_2">Quy tắc khẳng định<br />(Modus Ponens)</RightH3>
            <Div className="d-flex justify-content-between align-items-center">
                <RightP>[(p &rarr; q) &#8743; p] &rArr; q</RightP>
                <Image src={require('../../images/modus_ponens.jpg').default} />
            </Div>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Div>
                    <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Học tốt thi đậu</RightP>
                    <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Sinh viên A học tốt</RightP>
                </Div>
                <RightP>Suy ra: Sinh viên A  thi đậu</RightP>
            </Div>
            <Div className="d-flex justify-content-between align-items-center">
                <Div>
                    <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu chuồn chuồn bay thấp thì mưa</RightP>
                    <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Thấy chuồn chuồn bay thấp</RightP>
                </Div>
                <RightP>Suy ra: trời mưa</RightP>
            </Div>
        </>
    )
}
// 16
export const QuyTacPhuDinh = () => {
    return (
        <>
            <RightH3 id="3_3">Quy tắc phủ định<br />(Modus Tollens)</RightH3>
            <Div className="d-flex justify-content-between align-items-center">
                <RightP>[(p &rarr; q) &#8743; &#8514;q] &rArr; &#8514;p</RightP>
                <Image src={require('../../images/modus_tollens.jpg').default} />
            </Div>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu A đi học đầy đủ thì A đậu toán rời rạc.</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />A không đậu toán rời rạc.</RightP>
            <RightP style={{ marginLeft: '150px' }}>Suy ra: A không đi học đầy đủ.</RightP>
        </>
    )
}
// 17
export const QuyTacTamDoanLuan = () => {
    return (
        <>
            <RightH3 id="3_4">Quy tắc tam đoạn luận</RightH3>
            <Div className="d-flex justify-content-between align-items-center">
                <RightP>[(p &rarr; q) &#8743; (q &rarr; r)] &rArr; (p &rarr; r)</RightP>
                <Image src={require('../../images/tamdoanluan.jpg').default} />
            </Div>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu trời mưa thì đường ướt</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Nếu đường ướt thì đường trơn</RightP>
            <RightP style={{ marginLeft: '150px' }}>Suy ra: nếu trời mưa thì đường trơn.</RightP>
        </>
    )
}
// 18
export const QuyTacPhanChung = () => {
    return (
        <>
            <RightH3 id="3_5">Quy tắc phản chứng</RightH3>
            <RightP className="text-center">(p &rarr; q) &hArr; [(p &#8743; &#8514;q) &rarr; 0]</RightP>
            <RightP><RightWordBold>Tổng quát:</RightWordBold></RightP>
            <RightP><RightWordItalic>[(P1 &#8743; P2 &#8743; ... &#8743; Pn) &rarr; Q] &hArr; [(P1 &#8743; P2 &#8743; ... &#8743; Pn &#8743; &#8514;Q) &rarr; 0]</RightWordItalic></RightP>
            <RightP>Để chứng minh vế trái là một hằng đúng, ta chứng minh nếu thêm phủ định của q vào các tiên đề thì được một mâu thuẫn.</RightP>
            <Div className="d-flex justify-content-between" style={{ width: '100%' }}>
                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                <Image style={{ width: '35%' }} src={require('../../images/phanchung1.jpg').default} />
                <Image style={{ width: '35%' }} src={require('../../images/phanchung2.jpg').default} />
            </Div>
        </>
    )
}
// 19
export const QuyTacChungMinhTheoTruongHop = () => {
    return (
        <>
            <RightH3 id="3_6">Quy tắc chứng minh theo trường hợp</RightH3>
            <RightP className="text-center">[(p &rarr; r) &#8743; (q &rarr; r)] &rArr; [(p &#8744; q) &rarr; r]</RightP>
            <RightP><RightWordBold>Tổng quát:</RightWordBold></RightP>
            <RightP className="text-center"><RightWordItalic>[(P1 &rarr; Q) &#8743; (P2 &rarr; Q) &#8743; ... &#8743; (Pn &rarr; Q)] &rArr; [(P1 &#8744; P2 &#8744; ... &#8744; Pn) &rarr; Q]</RightWordItalic></RightP>
        </>
    )
}
// 20
export const QuyTacPhanViDu = () => {
    return (
        <>
            <RightH3 id="3_7">3.7 Quy tắc phản ví dụ</RightH3>
            <RightP>Để chứng minh một phép suy luận là sai hay không là một hằng đúng, ta chỉ cần chỉ ra một phản ví dụ.</RightP>
            <RightP>Để tìm một phản ví dụ ta chỉ cần chỉ ra một trường hợp về chân trị của các biến mệnh đề sao cho các tiên đề trong phép suy luận là đúng còn kết luận là sai.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold> Hãy kiểm tra suy luận:</RightP>
            <RightP className="text-center"><RightWordItalic>
                p &rarr; r <br />
                p <br />
                &#8514;r &rarr; q <br />
                &mdash;&mdash;&mdash;&mdash; <br />
                &#8278;q
            </RightWordItalic></RightP>
            <RightP>Nhận xét: Ta sẽ tìm thấy p, q, r thỏa</RightP>
            <RightP className="text-center"><RightWordItalic>
                p &rarr; r = 1<br />
                p = 1<br />
                &#8514;r &rarr; q = 1<br />
                &mdash;&mdash;&mdash;&mdash;&mdash; <br />
                &#8278;q = 0
            </RightWordItalic></RightP>
            <RightP>Dễ dàng tìm thấy một phản ví dụ:  p=1,q=0,r=1. <br />Vậy suy luận đã cho là không đúng.</RightP>
            <RightP><RightWordBold>Ví dụ: </RightWordBold>Ông Minh nói rằng nếu không được tăng lương thì ông ta sẽ nghỉ việc. Mặt khác, nếu ông ấy nghỉ việc và vợ ông ấy bị mất việc thì phải bán xe.Biết rằng nếu vợ ông Minh hay  đi làm trễ thì trước sau gì cũng sẽ bị mất việc và cuối cùng ông Minh đã được tăng lương. <br />Suy ra nếu ông Minh không bán xe thì vợ ông ta đã không đi làm trễ.</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Div>
                    <RightP>p: ông Minh được tăng lương. <br />
                        q: ông Minh nghỉ việc.<br />
                        r: vợ ông Minh mất việc.<br />
                        s: gia đình phải bán xe.<br />
                        t: vợ ông hay đi làm trể. </RightP>
                </Div>
                <Image src={require('../../images/phanvidu.jpg').default} />
            </Div>
        </>
    )
}
// 21
export const ViTuLuongTu = () => {
    return (
        <>
            <Div>
                <RightH2 id="4">Vị từ, Lượng từ</RightH2>
                <RightH3 id="4_1">Định nghĩa</RightH3>
                <RightP>Vị từ là một khẳng định p(x,y,..), trong đó x,y...là các biến thuộc tập hợp A, B,.. cho trước sao cho: <br />
                    - Bản thân p(x,y,..) không phải là mệnh đề.<br />
                    - Nếu thay x,y,.. thành giá trị cụ thể thì p(x,y,..) là mệnh đề.</RightP>
                <RightP><RightWordBold>Ví dụ:</RightWordBold> <br />
                    - p(n) =  “n + 1 là số nguyên tố” <br />
                    - q(x,y) = “x + y = 1”</RightP>
                <RightH3 id="4_2">Các phép toán trên vị từ</RightH3>
                <RightP>Cho trước các vị từ p(x), q(x) theo một biến xA. Khi ấy, ta cũng có các phép toán tương ứng như trên mệnh đề: </RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phủ định: &#8514;p(x)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép nối liền: p(x) &#8743; q(x)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép nối rời: p(x) &#8744; q(x)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép kéo theo: p(x) &rarr; q(x)</RightP>
                <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép kéo theo hao chiều: p(x) &harr; q(x)</RightP>
                <RightP>
                    Cho p(x) là một vị từ theo một biến xác định trên A. Các mệnh đề lượng từ hóa của p(x) được định nghĩa như sau: <br />
                    - Mệnh đề “Với mọi x thuộc A, p(x) ”, kí hiệu: “&forall;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi p(a) luôn đúng với mọi giá trị a &isin; A. &forall; đgl lượng từ phổ dụng.<br />
                    - Mệnh đề “Tồn tại (có ít nhất một) x thuộc A, p(x)” kí hiệu “&exist;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi có ít nhất một giá trị x = a’&isin; A nào đó sao cho mệnh đề p(a’) đúng. &exist; đgl lượng từ tồn tại.
                </RightP>
                <RightP>
                    Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Ta định nghĩa các mệnh đề lượng từ hóa của p(x, y) như sau: </RightP>
                <RightP className="text-center">
                    “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&forall;y&isin;B, p(x, y))” <br />
                    “&forall;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&exist;y&isin;B, p(x, y))”<br />
                    “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&forall;y&isin;B, p(x, y))”<br />
                    “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&exist;y&isin;B, p(x, y))”
                </RightP>
                <RightH3 id="4_3">Định lý</RightH3>
                <RightP>Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Khi đó:</RightP>
                <RightP className="text-center">
                    “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &forall;x&isin;A, p(x, y)” <br />
                    “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &hArr; “&exist;y&isin;B, &exist;x&isin;A, p(x, y)” <br />
                    “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &exist;x&isin;A, p(x, y)”
                </RightP>
                <RightP>Phủ định của mệnh đề lượng từ hóa vị từ p(x,y,..) có được bằng cách: thay &forall; thành &exist;, thay &exist; thành &forall;, và p(x,y,..) thành &#8514;p(x,y,..).</RightP>
                <Div style={{ width: '100%' }}>
                    <RightP>Với vị từ theo 1 biến ta có: </RightP>
                    <Image style={{ width: '85%', marginLeft: '90px' }} src={require('../../images/ltvt1.jpg').default} />
                </Div>
                <Div style={{ width: '100%' }}>
                    <RightP>Với vị từ theo 2 biến ta có: </RightP>
                    <Image style={{ width: '85%', marginLeft: '90px' }} src={require('../../images/ltvt2.jpg').default} />
                </Div>
            </Div>
        </>
    )
}
// 23
export const CacPhepToanTrenViTu = () => {
    return (
        <>
            <RightH3 id="4_2">Các phép toán trên vị từ</RightH3>
            <RightP>Cho trước các vị từ p(x), q(x) theo một biến xA. Khi ấy, ta cũng có các phép toán tương ứng như trên mệnh đề: </RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phủ định: &#8514;p(x)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép nối liền: p(x) &#8743; q(x)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép nối rời: p(x) &#8744; q(x)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép kéo theo: p(x) &rarr; q(x)</RightP>
            <RightP><FaCircle style={{ fontSize: '10px', marginRight: '10px', marginLeft: '30px' }} />Phép kéo theo hao chiều: p(x) &harr; q(x)</RightP>
            <RightP>
                Cho p(x) là một vị từ theo một biến xác định trên A. Các mệnh đề lượng từ hóa của p(x) được định nghĩa như sau: <br />
                - Mệnh đề “Với mọi x thuộc A, p(x) ”, kí hiệu: “&forall;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi p(a) luôn đúng với mọi giá trị a &isin; A. &forall; đgl lượng từ phổ dụng.<br />
                - Mệnh đề “Tồn tại (có ít nhất một) x thuộc A, p(x)” kí hiệu “&exist;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi có ít nhất một giá trị x = a’&isin; A nào đó sao cho mệnh đề p(a’) đúng. &exist; đgl lượng từ tồn tại.
            </RightP>
            <RightP>
                Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Ta định nghĩa các mệnh đề lượng từ hóa của p(x, y) như sau: </RightP>
            <RightP className="text-center">
                “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&forall;y&isin;B, p(x, y))” <br />
                “&forall;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&exist;y&isin;B, p(x, y))”<br />
                “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&forall;y&isin;B, p(x, y))”<br />
                “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&exist;y&isin;B, p(x, y))”
            </RightP>
        </>
    )
}
// 24
export const DinhLyViTuLuongTu = () => {
    return (
        <>
            <RightH3 id="4_3">Định lý</RightH3>
            <RightP>Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Khi đó:</RightP>
            <RightP className="text-center">
                “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &forall;x&isin;A, p(x, y)” <br />
                “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &hArr; “&exist;y&isin;B, &exist;x&isin;A, p(x, y)” <br />
                “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &exist;x&isin;A, p(x, y)”
            </RightP>
            <RightP>Phủ định của mệnh đề lượng từ hóa vị từ p(x,y,..) có được bằng cách: thay &forall; thành &exist;, thay &exist; thành &forall;, và p(x,y,..) thành &#8514;p(x,y,..).</RightP>
            <Div style={{ width: '100%' }}>
                <RightP>Với vị từ theo 1 biến ta có: </RightP>
                <Image style={{ width: '85%', marginLeft: '90px' }} src={require('../../images/ltvt1.jpg').default} />
            </Div>
            <Div style={{ width: '100%' }}>
                <RightP>Với vị từ theo 2 biến ta có: </RightP>
                <Image style={{ width: '85%', marginLeft: '90px' }} src={require('../../images/ltvt2.jpg').default} />
            </Div>
        </>
    )
}

// 25
export const QuanHeHaiNgoi = () => {
    return (
        <>
            <Div id="1">
                <RightH2>Quan hệ hai ngôi</RightH2>
                <RightH3 id="1_1">1. Định nghĩa</RightH3>
                <RightP>Cho hai tập A, B. Ta gọi tập R là một quan hệ hai ngôi từ A đến B <br /> nếu R &sube; A x B.</RightP>
                <RightP>Nếu (a, b) &isin; R thì ta nói a có quan hệ R với b và ký hiệu a R b; ngược lại nếu (a, b) &notin; R thì ta kí hiệu  a <span style={{ borderTop: "1px solid" }}>R</span> b.</RightP>
                <RightP>Khi A = B, ta gọi R là một quan hệ hai ngôi trên A.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>Cho A = {'{'}1, 2, 3, 4{'}'}, R là một quan hệ (hai ngôi) trên A và <br /> R = {'{'}(a, b) &isin; A | a là ước của b {'}'}.</RightP>
                <RightP>Khi đó: </RightP>
                <RightP>R = {'{'}(1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (2, 4), (3, 3), (4,4){'}'}</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_1.png').default} />
                <RightH3 id="1_2">2. Các tính chất</RightH3>
                <RightH4 id="1_2_a">a. Tính phản xạ</RightH4>
                <RightP>Giả sử R là một quan hệ hai ngôi trên tập A.<br />Ta nói quan hệ R có tính phản xạ nếu và chỉ nếu a R a ,  &forall; a &isin; A.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>Trên tập A = {'{'}1, 2, 3, 4{'}'}, <br />
                    quan hệ R1 = {'{'}(1,1), (1,2), (2,1), (2, 2), (3, 4), (4, 1), (4, 4){'}'} không phản xạ vì (3, 3) &notin; R1 <br />
                    R2 = {'{'}(1,1), (1,2), (1,4), (2, 2), (3, 3), (4, 1), (4, 4){'}'} phản xạ vì (1,1), (2, 2), (3, 3), (4, 4) &isin; R2 </RightP>
                <RightP>
                    - Quan hệ  ≤  trên Z phản xạ vì a  ≤  a, &forall; a &isin; Z. <br />
                    - Quan hệ &gt; trên Z không phản xạ vì 1 không lớn hơn 1. <br />
                    - Quan hệ “ | ” (“ước số”) trên Z+ là phản xạ vì mọi số nguyên dương a là ước của chính nó.</RightP>
                <RightH4 id="1_2_b">b. Tính đối xứng, phản xứng</RightH4>
                <RightP>Giả sử R là một quan hệ hai ngôi trên tập A. <br />
                    - Ta nói quan hệ R có tính đối xứng nếu và chỉ nếu a R b &rArr; b R a , &forall; a, b &isin; A. <br />
                    - Ta nói quan hệ R có tính phản xứng nếu và chỉ nếu (a R b &and;  b R a) &rArr; a = b ,  &forall; a, b &isin; A.</RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>
                    - Quan hệ R1 = {'{'}(1,1), (1,2), (2,1){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} là đối xứng.<br />
                    - Quan hệ  ≤  trên Z không đối xứng, tuy nhiên nó phản xứng vì (a ≤  b) &and; (b  ≤  a) &rArr; (a = b).<br />
                    - Quan hệ “ | ” ( “ước số” ) trên Z+  không đối xứng, tuy nhiên nó có tính phản xứng vì (a | b) &and; (b | a) &rArr; (a = b).</RightP>
                <RightH4 id="1_2_c">c. Tính bắc cầu ( truyền )</RightH4>
                <RightP>
                    Giả sử R là một quan hệ hai ngôi trên tập A.<br />
                    - Ta nói quan hệ R có tính bắc cầu (truyền) nếu và chỉ nếu <br />
                    (a R b &and; b R c) &rArr; a R c , &forall; a,b,c &isin; A.
                </RightP>
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>
                    Quan hệ R = {'{'}(1,1), (1,2), (2,1), (2, 2), (1, 3), (2, 3){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} có tính bắc cầu.<br />
                    - Quan hệ ≤ và “|” trên Z có tính bắc cầu vì <br />
                    (a ≤ b) &and; (b ≤ c) &rArr; (a ≤ c)<br />(a | b) &and; (b | c) &rArr; (a | c)</RightP>
                <RightH4 id="1_2_d">d. Biểu diễn quan hệ</RightH4>
                <RightP>
                    Cho R là quan hệ từ A = {'{'}a1, a2, …, a<sub>m</sub>{'}'} đến B = {'{'}b1, b2, …, bn{'}'}. Ma trận biểu diễn của R là ma trận M<sub>R</sub> = [m<sub>ij</sub>] <sub>mxn</sub> xác định bởi:
                </RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d.png').default} />
                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                <RightP>
                    Cho R là quan hệ từ A = {'{'}1, 2, 3, 4{'}'} đến B = {'{'}u, v, w{'}'},<br /> R = {'{'}(1, u), (1, v), (2, w), (3, w), (4, u){'}'}.<br /> Khi đó R có thể biễu diễn như sau:<br />
                    <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d1.png').default} />
                </RightP>
                <RightP>Đây là ma trận cấp 4×3 biễu diễn cho quan hệ R</RightP>
                <RightP></RightP>
                <RightP>Cho R là quan hệ từ A = {'{'}1, 2, 3{'}'} đến B = {'{'}1, 2{'}'}:<br /> a R b &hArr; a &gt; b. Khi đó ma trận biểu diễn của R là: <br /></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d2.png').default} />
                <RightP>Cho R là quan hệ trên tập A, khi đó MR là ma trận vuông.</RightP>

                <RightP>+ R là phản xạ nếu tất cả các phần tử trên đường chéo của M<sub>R</sub> đều bằng 1:<br /></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d3.png').default} />

                <RightP>+ R là đối xứng nếu M<sub>R</sub> là đối xứng m<sub>ij</sub> = m<sub>ji</sub>, &forall; i, j.<br /></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d4.png').default} />

                <RightP>+ R là phản xứng nếu M<sub>R</sub> thỏa: <br />
                    m<sub>ij</sub> = 0 hoặc  m<sub>ji</sub> = 0 nếu i &ne; j.<br /></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d5.png').default} />
            </Div>
        </>
    )
}
// 60
export const CacTinhChatCuaQuanHeHaiNgoi = () => {
    return (
        <>
            <RightH2 id="1_2">Các tính chất</RightH2>
            <RightH3 id="1_2_a">a. Tính phản xạ</RightH3>
            <RightP>Giả sử R là một quan hệ hai ngôi trên tập A.<br />Ta nói quan hệ R có tính phản xạ nếu và chỉ nếu a R a ,  &forall; a &isin; A.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>Trên tập A = {'{'}1, 2, 3, 4{'}'}, <br />
                quan hệ R1 = {'{'}(1,1), (1,2), (2,1), (2, 2), (3, 4), (4, 1), (4, 4){'}'} không phản xạ vì (3, 3) &notin; R1 <br />
                R2 = {'{'}(1,1), (1,2), (1,4), (2, 2), (3, 3), (4, 1), (4, 4){'}'} phản xạ vì (1,1), (2, 2), (3, 3), (4, 4) &isin; R2 </RightP>
            <RightP>
                - Quan hệ  ≤  trên Z phản xạ vì a  ≤  a, &forall; a &isin; Z. <br />
                - Quan hệ &gt; trên Z không phản xạ vì 1 không lớn hơn 1. <br />
                - Quan hệ “ | ” (“ước số”) trên Z+ là phản xạ vì mọi số nguyên dương a là ước của chính nó.</RightP>
            <RightH3 id="1_2_b">b. Tính đối xứng, phản xứng</RightH3>
            <RightP>Giả sử R là một quan hệ hai ngôi trên tập A. <br />
                - Ta nói quan hệ R có tính đối xứng nếu và chỉ nếu a R b &rArr; b R a , &forall; a, b &isin; A. <br />
                - Ta nói quan hệ R có tính phản xứng nếu và chỉ nếu (a R b &and;  b R a) &rArr; a = b ,  &forall; a, b &isin; A.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                - Quan hệ R1 = {'{'}(1,1), (1,2), (2,1){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} là đối xứng.<br />
                - Quan hệ  ≤  trên Z không đối xứng, tuy nhiên nó phản xứng vì (a ≤  b) &and; (b  ≤  a) &rArr; (a = b).<br />
                - Quan hệ “ | ” ( “ước số” ) trên Z+  không đối xứng, tuy nhiên nó có tính phản xứng vì (a | b) &and; (b | a) &rArr; (a = b).</RightP>
            <RightH3 id="1_2_c">c. Tính bắc cầu ( truyền )</RightH3>
            <RightP>
                Giả sử R là một quan hệ hai ngôi trên tập A.<br />
                - Ta nói quan hệ R có tính bắc cầu (truyền) nếu và chỉ nếu <br />
                (a R b &and; b R c) &rArr; a R c , &forall; a,b,c &isin; A.
            </RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                Quan hệ R = {'{'}(1,1), (1,2), (2,1), (2, 2), (1, 3), (2, 3){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} có tính bắc cầu.<br />
                - Quan hệ ≤ và “|” trên Z có tính bắc cầu vì <br />
                (a ≤ b) &and; (b ≤ c) &rArr; (a ≤ c)<br />(a | b) &and; (b | c) &rArr; (a | c)</RightP>
            <RightH3 id="1_2_d">d. Biểu diễn quan hệ</RightH3>
            <RightP>
                Cho R là quan hệ từ A = {'{'}a1, a2, …, a<sub>m</sub>{'}'} đến B = {'{'}b1, b2, …, bn{'}'}. Ma trận biểu diễn của R là ma trận M<sub>R</sub> = [m<sub>ij</sub>] <sub>mxn</sub> xác định bởi:
            </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d.png').default} />
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                Cho R là quan hệ từ A = {'{'}1, 2, 3, 4{'}'} đến B = {'{'}u, v, w{'}'},<br /> R = {'{'}(1, u), (1, v), (2, w), (3, w), (4, u){'}'}.<br /> Khi đó R có thể biễu diễn như sau:<br />
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d1.png').default} />
            </RightP>
            <RightP>Đây là ma trận cấp 4×3 biễu diễn cho quan hệ R</RightP>
            <RightP></RightP>
            <RightP>Cho R là quan hệ từ A = {'{'}1, 2, 3{'}'} đến B = {'{'}1, 2{'}'}:<br /> a R b &hArr; a &gt; b. Khi đó ma trận biểu diễn của R là: <br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d2.png').default} />
            <RightP>Cho R là quan hệ trên tập A, khi đó MR là ma trận vuông.</RightP>

            <RightP>+ R là phản xạ nếu tất cả các phần tử trên đường chéo của M<sub>R</sub> đều bằng 1:<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d3.png').default} />

            <RightP>+ R là đối xứng nếu M<sub>R</sub> là đối xứng m<sub>ij</sub> = m<sub>ji</sub>, &forall; i, j.<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d4.png').default} />

            <RightP>+ R là phản xứng nếu M<sub>R</sub> thỏa: <br />
                m<sub>ij</sub> = 0 hoặc  m<sub>ji</sub> = 0 nếu i &ne; j.<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d5.png').default} />
        </>
    )
}
// 26
export const TinhPhanXa = () => {
    return (
        <>
            <RightH3 id="1_2_a">Tính phản xạ</RightH3>
            <RightP>Giả sử R là một quan hệ hai ngôi trên tập A.<br />Ta nói quan hệ R có tính phản xạ nếu và chỉ nếu a R a ,  &forall; a &isin; A.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>Trên tập A = {'{'}1, 2, 3, 4{'}'}, <br />
                quan hệ R1 = {'{'}(1,1), (1,2), (2,1), (2, 2), (3, 4), (4, 1), (4, 4){'}'} không phản xạ vì (3, 3) &notin; R1 <br />
                R2 = {'{'}(1,1), (1,2), (1,4), (2, 2), (3, 3), (4, 1), (4, 4){'}'} phản xạ vì (1,1), (2, 2), (3, 3), (4, 4) &isin; R2 </RightP>
            <RightP>
                - Quan hệ  ≤  trên Z phản xạ vì a  ≤  a, &forall; a &isin; Z. <br />
                - Quan hệ &gt; trên Z không phản xạ vì 1 không lớn hơn 1. <br />
                - Quan hệ “ | ” (“ước số”) trên Z+ là phản xạ vì mọi số nguyên dương a là ước của chính nó.</RightP>
        </>
    )
}
// 27
export const TinhDoiXungPhanXung = () => {
    return (
        <>
            <RightH3 id="1_2_b">Tính đối xứng, phản xứng</RightH3>
            <RightP>Giả sử R là một quan hệ hai ngôi trên tập A. <br />
                - Ta nói quan hệ R có tính đối xứng nếu và chỉ nếu a R b &rArr; b R a , &forall; a, b &isin; A. <br />
                - Ta nói quan hệ R có tính phản xứng nếu và chỉ nếu (a R b &and;  b R a) &rArr; a = b ,  &forall; a, b &isin; A.</RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                - Quan hệ R1 = {'{'}(1,1), (1,2), (2,1){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} là đối xứng.<br />
                - Quan hệ  ≤  trên Z không đối xứng, tuy nhiên nó phản xứng vì (a ≤  b) &and; (b  ≤  a) &rArr; (a = b).<br />
                - Quan hệ “ | ” ( “ước số” ) trên Z+  không đối xứng, tuy nhiên nó có tính phản xứng vì (a | b) &and; (b | a) &rArr; (a = b).</RightP>
        </>
    )
}
// 28
export const TinhBacCau = () => {
    return (
        <>
            <RightH3 id="1_2_c">c. Tính bắc cầu ( truyền )</RightH3>
            <RightP>
                Giả sử R là một quan hệ hai ngôi trên tập A.<br />
                - Ta nói quan hệ R có tính bắc cầu (truyền) nếu và chỉ nếu <br />
                (a R b &and; b R c) &rArr; a R c , &forall; a,b,c &isin; A.
            </RightP>
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                Quan hệ R = {'{'}(1,1), (1,2), (2,1), (2, 2), (1, 3), (2, 3){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} có tính bắc cầu.<br />
                - Quan hệ ≤ và “|” trên Z có tính bắc cầu vì <br />
                (a ≤ b) &and; (b ≤ c) &rArr; (a ≤ c)<br />(a | b) &and; (b | c) &rArr; (a | c)</RightP>
        </>
    )
}
// 29
export const BieuDienQuanHe = () => {
    return (
        <>
            <RightH3 id="1_2_d">Biểu diễn quan hệ</RightH3>
            <RightP>
                Cho R là quan hệ từ A = {'{'}a1, a2, …, a<sub>m</sub>{'}'} đến B = {'{'}b1, b2, …, bn{'}'}. Ma trận biểu diễn của R là ma trận M<sub>R</sub> = [m<sub>ij</sub>] <sub>mxn</sub> xác định bởi:
            </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d.png').default} />
            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                Cho R là quan hệ từ A = {'{'}1, 2, 3, 4{'}'} đến B = {'{'}u, v, w{'}'},<br /> R = {'{'}(1, u), (1, v), (2, w), (3, w), (4, u){'}'}.<br /> Khi đó R có thể biễu diễn như sau:<br />
                <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d1.png').default} />
            </RightP>
            <RightP>Đây là ma trận cấp 4×3 biễu diễn cho quan hệ R</RightP>
            <RightP></RightP>
            <RightP>Cho R là quan hệ từ A = {'{'}1, 2, 3{'}'} đến B = {'{'}1, 2{'}'}:<br /> a R b &hArr; a &gt; b. Khi đó ma trận biểu diễn của R là: <br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d2.png').default} />
            <RightP>Cho R là quan hệ trên tập A, khi đó MR là ma trận vuông.</RightP>

            <RightP>+ R là phản xạ nếu tất cả các phần tử trên đường chéo của M<sub>R</sub> đều bằng 1:<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d3.png').default} />

            <RightP>+ R là đối xứng nếu M<sub>R</sub> là đối xứng m<sub>ij</sub> = m<sub>ji</sub>, &forall; i, j.<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d4.png').default} />

            <RightP>+ R là phản xứng nếu M<sub>R</sub> thỏa: <br />
                m<sub>ij</sub> = 0 hoặc  m<sub>ji</sub> = 0 nếu i &ne; j.<br /></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/1_2_d5.png').default} />
        </>
    )
}
// 30
export const QuanHeTuongDuong = () => {
    return (
        <>
            <RightH2 id="2">Quan hệ tương đương</RightH2>
            <RightH3 id="2_1">a. Định nghĩa</RightH3>
            <RightP>Quan hệ R trên tập A được gọi là tương đương nếu và chỉ nếu nó có tính chất phản xạ, đối xứng và bắc cầu.</RightP>

            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                - Quan hệ R trên tập các chuỗi ký tự xác định bởi aRb nếu a và b có cùng độ dài. Khi đó R là quan hệ tương đương.<br />
                - Cho R là quan hệ trên tập R sao cho <br />
                aRb &hArr; a – b &isin; Z<br />
                Khi đó R là quan hệ tương đương.<br />
                - Cho m là số nguyên dương và R là quan hệ trên Z :<br />
                aRb &hArr; (a – b) chia hết m<br />
                Khi đó R là quan hệ tương đương.<br />
                - Rõ ràng quan hệ này có tính phản xạ và đối xứng.<br />
                - Cho a, b, c sao cho a – b và b – c chia hết cho m, khi đó a – c = a – b + b – c cũng chia hết cho m. Suy ra R có tính chất bắc cầu.<br />
                - Quan hệ này được gọi là đồng dư modulo m và chúng ta viết a &equiv; b (mod m) thay vì aRb.
            </RightP>
            {/* <RightP></RightP> */}
            <RightH3 id="2_2">b. Lớp tương đương</RightH3>
            <RightP>Cho R là quan hệ tương đương trên A và a &isin; A . Lớp tương đương chứa a theo quan hệ R được ký hiệu bởi [a]<sub>R</sub> hoặc [a] là tập hợp tất cả những phần tử có quan hệ R với a.<br />
                [a]<sub>R</sub> = {'{'}b &isin; A| b R a{'}'}</RightP>
            <RightP>• Mỗi phần tử x &isin; [a]<sub>R</sub> được gọi là một phần tử đại diện của lớp tương đương [a]<sub>R</sub>.</RightP>
            <RightP>• Tập thương của A theo quan hệ R, ký hiệu là A/R, được định nghĩa là tập tất cả các lớp tương đương của các phần tử thuộc A, nghĩa là <br />
                A/R = {'{'}[a]<sub>R</sub> | &forall; a &isin; A{'}'}</RightP>

            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>Tìm các lớp tương đương modulo 8 chứa 0 và 1?</RightP>
            <RightP>Giải: Lớp tương đương modulo 8 chứa 0 gồm tất cả các số nguyên a chia hết cho 8. Do đó: <br />
                [0]<sub>8</sub> = {'{'} …, – 16, – 8, 0, 8, 16, … {'}'}<br />
                Tương tự<br />
                [1]<sub>8</sub> = {'{'}a | a chia 8 dư 1{'}'} = {'{'} …, – 15, – 7, 1, 9, 17, … {'}'}</RightP>
            {/* <RightP></RightP> */}
            <RightH3 id="2_3">c. Sự phân hoạch các lớp tương đương</RightH3>
            <RightP><span className="font-weight-bold">Nhận xét:</span> Trong ví dụ trên, các lớp tương đương [0]<sub>8</sub> và [1]<sub>8</sub> là rời nhau.</RightP>
            <RightP><span className="font-weight-bold">Mệnh đề:</span> Cho R là quan hệ tương đương trên tập A. Với mọi a,b &isin; A các điều kiện sau đây tương đương với nhau.</RightP>
            <RightP>
                (i) a R b <br />
                (ii) [a]<sub>R</sub> = [b]<sub>R</sub> <br />
                (iii) [a]<sub>R</sub> &cap; [b]<sub>R</sub> &ne; &empty;
            </RightP>
            <RightP><span className="font-weight-bold">Chú ý:</span>
                - Từ mệnh đề trên ta thấy rằng các lớp tương đương của các phần tử của tập A hoặc trùng nhau, hoặc rời nhau.<br />
                - Hơn nữa, hợp của tất cả các lớp tương đương này trùng với A, cho nên tập A là hợp rời rạc của các lớp tương đương.Ta cũng nói rằng tập A được phân hoạch thành các lớp tương đương theo quan hệ R.<br />
                - Cho {'{'}A<sub>1</sub>, A<sub>2</sub>, … {'}'} là phân hoạch A thành các tập con không rỗng, rời nhau. Khi đó có duy nhất quan hệ tương đương trên A sao cho mỗi A<sub>i</sub> là một lớp tương đương.<br />
                - Thật vậy với mỗi a, b &isin; A, ta đặt a R b nếu có tập con Ai sao cho a, b &isin; A<sub>i</sub>.
                - Dễ dàng chứng minh rằng R là quan hệ tương đương trên A và [a]<sub>R</sub> = A<sub>i</sub> nếu a &isin; A<sub>i</sub>.</RightP>

            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                - Cho m là số nguyên dương, khi đó có m lớp đồng dư modulo m là [0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>.<br />
                - Chúng lập thành phân hoạch của Z thành các tập con rời nhau.<br />
                Chú ý rằng:<br />
                [0]<sub>m</sub> = [m]<sub>m</sub> = [2m]<sub>m</sub> = …<br />
                [1]<sub>m</sub> = [m + 1]<sub>m</sub> = [2m +1]<sub>m</sub> = …<br />
                …………………………………<br />
                [m – 1]<sub>m</sub> = [2m – 1]<sub>m</sub> = [3m – 1]<sub>m</sub> = … <br />
                - Mỗi lớp tương đương này được gọi là số nguyên modulo m.<br />
                - Tập hợp các số nguyên modulo m được ký hiệu bởi Z<sub>m</sub> , đó chính là tập thương của Z theo quan hệ đồng dư modulo m.<br />
                Z<sub>m</sub> = Z/R = {'{'}[0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>{'}'}</RightP>
        </>
    )
}
// 31
export const LopTuongDuong = () => {
    return (
        <>
            <RightH3 id="2_2">Lớp tương đương</RightH3>
            <RightP>Cho R là quan hệ tương đương trên A và a &isin; A . Lớp tương đương chứa a theo quan hệ R được ký hiệu bởi [a]<sub>R</sub> hoặc [a] là tập hợp tất cả những phần tử có quan hệ R với a.<br />
                [a]<sub>R</sub> = {'{'}b &isin; A| b R a{'}'}</RightP>
            <RightP>• Mỗi phần tử x &isin; [a]<sub>R</sub> được gọi là một phần tử đại diện của lớp tương đương [a]<sub>R</sub>.</RightP>
            <RightP>• Tập thương của A theo quan hệ R, ký hiệu là A/R, được định nghĩa là tập tất cả các lớp tương đương của các phần tử thuộc A, nghĩa là <br />
                A/R = {'{'}[a]<sub>R</sub> | &forall; a &isin; A{'}'}</RightP>

            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>Tìm các lớp tương đương modulo 8 chứa 0 và 1?</RightP>
            <RightP>Giải: Lớp tương đương modulo 8 chứa 0 gồm tất cả các số nguyên a chia hết cho 8. Do đó: <br />
                [0]<sub>8</sub> = {'{'} …, – 16, – 8, 0, 8, 16, … {'}'}<br />
                Tương tự<br />
                [1]<sub>8</sub> = {'{'}a | a chia 8 dư 1{'}'} = {'{'} …, – 15, – 7, 1, 9, 17, … {'}'}</RightP>
            {/* <RightP></RightP> */}
        </>
    )
}
// 32
export const SuPhanHoachCacLopTuongDuong = () => {
    return (
        <>
            <RightH3 id="2_3">Sự phân hoạch các lớp tương đương</RightH3>
            <RightP><span className="font-weight-bold">Nhận xét:</span> Trong ví dụ trên, các lớp tương đương [0]<sub>8</sub> và [1]<sub>8</sub> là rời nhau.</RightP>
            <RightP><span className="font-weight-bold">Mệnh đề:</span> Cho R là quan hệ tương đương trên tập A. Với mọi a,b &isin; A các điều kiện sau đây tương đương với nhau.</RightP>
            <RightP>
                (i) a R b <br />
                (ii) [a]<sub>R</sub> = [b]<sub>R</sub> <br />
                (iii) [a]<sub>R</sub> &cap; [b]<sub>R</sub> &ne; &empty;
            </RightP>
            <RightP><span className="font-weight-bold">Chú ý:</span>
                - Từ mệnh đề trên ta thấy rằng các lớp tương đương của các phần tử của tập A hoặc trùng nhau, hoặc rời nhau.<br />
                - Hơn nữa, hợp của tất cả các lớp tương đương này trùng với A, cho nên tập A là hợp rời rạc của các lớp tương đương.Ta cũng nói rằng tập A được phân hoạch thành các lớp tương đương theo quan hệ R.<br />
                - Cho {'{'}A<sub>1</sub>, A<sub>2</sub>, … {'}'} là phân hoạch A thành các tập con không rỗng, rời nhau. Khi đó có duy nhất quan hệ tương đương trên A sao cho mỗi A<sub>i</sub> là một lớp tương đương.<br />
                - Thật vậy với mỗi a, b &isin; A, ta đặt a R b nếu có tập con Ai sao cho a, b &isin; A<sub>i</sub>.
                - Dễ dàng chứng minh rằng R là quan hệ tương đương trên A và [a]<sub>R</sub> = A<sub>i</sub> nếu a &isin; A<sub>i</sub>.</RightP>

            <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
            <RightP>
                - Cho m là số nguyên dương, khi đó có m lớp đồng dư modulo m là [0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>.<br />
                - Chúng lập thành phân hoạch của Z thành các tập con rời nhau.<br />
                Chú ý rằng:<br />
                [0]<sub>m</sub> = [m]<sub>m</sub> = [2m]<sub>m</sub> = …<br />
                [1]<sub>m</sub> = [m + 1]<sub>m</sub> = [2m +1]<sub>m</sub> = …<br />
                …………………………………<br />
                [m – 1]<sub>m</sub> = [2m – 1]<sub>m</sub> = [3m – 1]<sub>m</sub> = … <br />
                - Mỗi lớp tương đương này được gọi là số nguyên modulo m.<br />
                - Tập hợp các số nguyên modulo m được ký hiệu bởi Z<sub>m</sub> , đó chính là tập thương của Z theo quan hệ đồng dư modulo m.<br />
                Z<sub>m</sub> = Z/R = {'{'}[0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>{'}'}</RightP>
        </>
    )
}
// 33
export const QuanHeThuTu = () => {
    return (
        <>
            <RightH2 id="3">Quan hệ thứ tự</RightH2>
            <RightH3 id="3_1">a. Định nghĩa</RightH3>
            <RightP>Quan hệ R trên tập A được gọi là quan hệ thứ tự nếu và chỉ nếu nó có tính chất phản xạ, phản xứng và bắc cầu.<br />
                Ta thường kí hiệu quan hệ thứ tự bởi ≺.<br />
                Cặp (A, ≺) được gọi là tập sắp thứ tự (tập được sắp) hay poset.</RightP>
            <RightWordBold className="ml-5">Ví dụ: </RightWordBold>
            <RightP>Quan hệ ước số “ | ”trên tập số nguyên dương là quan hệ thứ tự, nghĩa là (Z<sup>+</sup>, | ) là poset</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_1_1.png').default} />
            <RightP>- (Z<sup>+</sup>, | ) là poset ? &rArr; không phải</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_1_2.png').default} />
            <RightP>- (P(S), &sube; ), ở đây P(S) là tập hợp các con của S, là một poset?</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_1_3.png').default} />
            {/* <RightP></RightP> */}
            <RightH3 id="3_2">b. Thứ tự toàn phần và bán phần</RightH3>
            <RightP>Định nghĩa. Các phần tử a và b của poset (S, ≺) gọi là so sánh được nếu a ≺ b hoặc b ≺ a. <br />
                Trái lại thì ta nói a và b không so sánh được.<br />
                Cho (S, ≺). Nếu hai phần tử tùy ý của S đều so sánh được với nhau thì ta gọi (S, ≺) là tập sắp thự tự toàn phần.<br />
                Ta cũng nói rằng ≺ là thứ tự toàn phần hay thứ tự tuyến tính trên S.<br />
                Trái lại thì ta nói ≺ là thứ tự bán phần.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>- Quan hệ “≤ ” trên tập số Z+ là thứ tự toàn phần.<br />
                - Quan hệ ước số “ | ”trên tập hợp số Z<sup>+</sup> không là thứ tự toàn phần, vì các số 5 và 7 là không so sánh được.<br />
                - Với tập A cho trước, tập P(A) tất cả các tập con của A với quan hệ &sube; là một tập được sắp, nhưng không toàn phần khi A có nhiều hơn một phần tử.</RightP>
            {/* <RightP></RightP> */}
            <RightH3 id="3_3">c. Biểu đồ Hasse</RightH3>
            <RightP>Mỗi poset có thể biểu diễn bởi 1 đồ thị đặc biệt ta gọi là biểu đồ Hasse.<br />
                Để định nghĩa biểu đồ Hasse chúng ta cần các khái niệm phần tử trội và trội trực tiếp.</RightP>
            <RightP><RightWordBold>Định nghĩa:</RightWordBold></RightP>
            <RightP>- Phần tử b có trong poset (S, ) được gọi là phần tử trội của phần tử a trong S nếu a ≺ b.<br />
                - Chúng ta cũng nói rằng a là được trội bởi b. Phần tử b được gọi là trội trực tiếp của a nếu b là trội của a và không tồn tại c sao cho:  a ≺ c ≺ b, a ≠ c ≠ b.<br />
                Ta định nghĩa biểu đồ Hasse của poset (S, ≺) là đồ thị:<br />
                - Mỗi phần tử của S được biểu diễn bởi 1 điểm trên mặt phẳng.<br />
                - Nếu b là trội trực tiếp của a thì sẽ vẽ 1 cung đi từ a đến b.</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Image style={{ marginLeft: "80px", width: "50%" }} src={require('../../images/quanhe/3_3_1.png').default} />
                <RightP>a ≺ b ≺ d,  a ≺ c</RightP>
            </Div>
            <RightP>Biểu đồ Hasse của poset ({'{'}1, 2, 3, 4{'}'}, ≤) có thể vẽ như sau: </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_3_2.png').default} />
            <RightP>Biểu đồ Hasse của P({'{'}a,b,c{'}'}): </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_3_3.png').default} />
            <RightH3 id="3_4">d. Phần tử nhỏ nhất, lớn nhất</RightH3>
            <RightP><RightWordBold>Định nghĩa:</RightWordBold>
                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:</RightP>
            <RightP>- <RightWordItalic>Phần tử nhỏ nhất</RightWordItalic> nếu &forall; x &isin; S ta có a ≺ x.<br />
                - <RightWordItalic>Phần tử lớn nhất</RightWordItalic> nếu &forall; x &isin; S ta có x ≺ a.</RightP>
            <RightP><RightWordBold>Nhận xét:</RightWordBold>
                Phần tử nhỏ nhất (lớn nhất) của một tập hợp (nếu có) là duy nhất. Ta kí hiệu phần tử của tập hợp S là min(S), và kí hiệu phần tử lớn nhất của S là max(S).</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Trong tập có thứ tự (S, &le;), S = {'{'}m &isin; Z | m^2 &lt; 100 {'}'} có<br />
                min(S) = -9, max(S) = 9.<br />
                Trong tập có thứ tự (A, &le;), A={'{'}x &isin; R | x^2 &lt; 100 {'}'} không có phần tử nhỏ nhất và cũng không có phần tử lớn nhất.<br />
                Cho tập B, ta biết (P(B), &sub;) là tập có thứ tự. Với thứ tự này thì min(P(B)) = &empty;, max(P(B)) = B.</RightP>
            <RightP><RightWordBold>Định nghĩa: (Thứ tự tốt)</RightWordBold></RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                - Tập hợp có thứ tự (N, &le;) là một tập hợp được sắp tốt.<br />
                - Tập hợp có thứ tự (Z, &le;) không phải là một tập hợp được sắp tốt vì Z không có phần tử nhỏ nhất.</RightP>
            <RightH3 id="3_5">e. Phần tử tối thiểu, tối đại</RightH3>
            <RightP><RightWordBold>Định nghĩa: </RightWordBold>
                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:<br />
                - <RightWordItalic>Phần tử tối tiểu</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và x ≺ a.<br />
                - <RightWordItalic>Phần tử tối đại</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và a ≺ x.</RightP>
            <RightP><RightWordBold>Nhận xét:</RightWordBold>
                Phần tử tối tiểu (tối đại) của một tập có thứ tự không nhất thiết là duy nhất.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Xét tập S = {'{'}1, 2, 3{'}'} với quan hệ R cho bởi R = {'{'}(1,1), (2,2), (3,3), (1,2), (3,2){'}'}. Dễ dàng kiểm chứng rằng (S,R) là tập có thứ tự. Với thứ tự R này, S có hai phần tử tối tiểu là 1 và 3.<br />
                - Phần tử lớn nhất (nhỏ nhất) của một tập có thứ tự, nếu có, là phần tử tối đại (tối tiểu) duy nhất của tập hợp đó.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Xét poset có biểu đồ Hasse dưới đây:</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Image style={{ marginLeft: "80px", width: "50%" }} src={require('../../images/quanhe/3_5_1.png').default} />
                <RightP>Mỗi đỉnh màu đỏ là <RightWordBold>tối đại</RightWordBold>.<br />
                    Mỗi đỉnh màu xanh là <RightWordBold>tối tiểu</RightWordBold>.<br />
                    Không có cung nào xuất phát từ điểm tối đại.<br />
                    Không có cung nào kết thúc ở điểm tối tiểu.</RightP>
            </Div>
            <RightP><RightWordBold>Chú ý: Trong một poset S hữu hạn, phần tử tối tiểu và phần tử tối đại luôn luôn tồn tại.</RightWordBold></RightP>
            <RightP>- Thật vậy, chúng ta xuất phát từ điểm bất kỳ a<sub>0</sub> &isin; S. Nếu a<sub>0</sub> không là phần tử tối tiểu thì &exist; a<sub>1</sub> &isin; S: a<sub>1</sub> ≺ a<sub>0</sub> . Tiếp tục  như vậy cho đến khi tìm được phần tử tối tiểu.<br />
                - Phần tử tối đại cũng tìm được bằng phương pháp tương tự.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_2.png').default} />

            <RightP><RightWordBold>Ví dụ. Tìm phần tử tối đại, tối tiểu của poset ({'{'}2, 4, 5, 10, 12, 20, 25{'}'}, | ) ?</RightWordBold></RightP>
            <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 12, 20, 25 là các phần tử tối đại, còn 2, 5 là các phần tử tối tiểu. <br />
                - Như vậy phần tử tối đại, tối tiểu của poset có thể không duy nhất.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_3.png').default} />

            <RightP><RightWordBold>Ví dụ: Tìm phần tử tối đại, tối tiểu của poset các chuỗi bit độ dài 3?</RightWordBold></RightP>
            <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 111 là phần tử tối đại duy nhất và 000 là phần tử tối tiểu duy nhất.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_4.png').default} />
            <RightP>111 là phần tử lớn nhất và 000 là phần tử nhỏ nhất theo nghĩa:<RightWordBold>000 ≺ abc ≺ 111 </RightWordBold>với mọi chuỗi abc.</RightP>
        </>
    )
}
// 34
export const ThuTuToanPhanBanPhan = () => {
    return (
        <>
            <RightH3 id="3_2">Thứ tự toàn phần và bán phần</RightH3>
            <RightP>Định nghĩa. Các phần tử a và b của poset (S, ≺) gọi là so sánh được nếu a ≺ b hoặc b ≺ a. <br />
                Trái lại thì ta nói a và b không so sánh được.<br />
                Cho (S, ≺). Nếu hai phần tử tùy ý của S đều so sánh được với nhau thì ta gọi (S, ≺) là tập sắp thự tự toàn phần.<br />
                Ta cũng nói rằng ≺ là thứ tự toàn phần hay thứ tự tuyến tính trên S.<br />
                Trái lại thì ta nói ≺ là thứ tự bán phần.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>- Quan hệ “≤ ” trên tập số Z+ là thứ tự toàn phần.<br />
                - Quan hệ ước số “ | ”trên tập hợp số Z<sup>+</sup> không là thứ tự toàn phần, vì các số 5 và 7 là không so sánh được.<br />
                - Với tập A cho trước, tập P(A) tất cả các tập con của A với quan hệ &sube; là một tập được sắp, nhưng không toàn phần khi A có nhiều hơn một phần tử.</RightP>
        </>
    )
}
// 35
export const BieuDoHasse = () => {
    return (
        <>
            <RightH3 id="3_3">Biểu đồ Hasse</RightH3>
            <RightP>Mỗi poset có thể biểu diễn bởi 1 đồ thị đặc biệt ta gọi là biểu đồ Hasse.<br />
                Để định nghĩa biểu đồ Hasse chúng ta cần các khái niệm phần tử trội và trội trực tiếp.</RightP>
            <RightP><RightWordBold>Định nghĩa:</RightWordBold></RightP>
            <RightP>- Phần tử b có trong poset (S, ) được gọi là phần tử trội của phần tử a trong S nếu a ≺ b.<br />
                - Chúng ta cũng nói rằng a là được trội bởi b. Phần tử b được gọi là trội trực tiếp của a nếu b là trội của a và không tồn tại c sao cho:  a ≺ c ≺ b, a ≠ c ≠ b.<br />
                Ta định nghĩa biểu đồ Hasse của poset (S, ≺) là đồ thị:<br />
                - Mỗi phần tử của S được biểu diễn bởi 1 điểm trên mặt phẳng.<br />
                - Nếu b là trội trực tiếp của a thì sẽ vẽ 1 cung đi từ a đến b.</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Image style={{ marginLeft: "80px", width: "50%" }} src={require('../../images/quanhe/3_3_1.png').default} />
                <RightP>a ≺ b ≺ d,  a ≺ c</RightP>
            </Div>
            <RightP>Biểu đồ Hasse của poset ({'{'}1, 2, 3, 4{'}'}, ≤) có thể vẽ như sau: </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_3_2.png').default} />
            <RightP>Biểu đồ Hasse của P({'{'}a,b,c{'}'}): </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_3_3.png').default} />
        </>
    )
}
// 36
export const PhanTuNhoNhatLonNhat = () => {
    return (
        <>
            <RightH3 id="3_4">Phần tử nhỏ nhất, lớn nhất</RightH3>
            <RightP><RightWordBold>Định nghĩa:</RightWordBold>
                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:</RightP>
            <RightP>- <RightWordItalic>Phần tử nhỏ nhất</RightWordItalic> nếu &forall; x &isin; S ta có a ≺ x.<br />
                - <RightWordItalic>Phần tử lớn nhất</RightWordItalic> nếu &forall; x &isin; S ta có x ≺ a.</RightP>
            <RightP><RightWordBold>Nhận xét:</RightWordBold>
                Phần tử nhỏ nhất (lớn nhất) của một tập hợp (nếu có) là duy nhất. Ta kí hiệu phần tử của tập hợp S là min(S), và kí hiệu phần tử lớn nhất của S là max(S).</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Trong tập có thứ tự (S, &le;), S = {'{'}m &isin; Z | m^2 &lt; 100 {'}'} có<br />
                min(S) = -9, max(S) = 9.<br />
                Trong tập có thứ tự (A, &le;), A={'{'}x &isin; R | x^2 &lt; 100 {'}'} không có phần tử nhỏ nhất và cũng không có phần tử lớn nhất.<br />
                Cho tập B, ta biết (P(B), &sub;) là tập có thứ tự. Với thứ tự này thì min(P(B)) = &empty;, max(P(B)) = B.</RightP>
            <RightP><RightWordBold>Định nghĩa: (Thứ tự tốt)</RightWordBold></RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                - Tập hợp có thứ tự (N, &le;) là một tập hợp được sắp tốt.<br />
                - Tập hợp có thứ tự (Z, &le;) không phải là một tập hợp được sắp tốt vì Z không có phần tử nhỏ nhất.</RightP>
        </>
    )
}
// 37
export const PhanTuToiThieuToiDai = () => {
    return (
        <>
            <RightH3 id="3_5">Phần tử tối thiểu, tối đại</RightH3>
            <RightP><RightWordBold>Định nghĩa: </RightWordBold>
                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:<br />
                - <RightWordItalic>Phần tử tối tiểu</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và x ≺ a.<br />
                - <RightWordItalic>Phần tử tối đại</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và a ≺ x.</RightP>
            <RightP><RightWordBold>Nhận xét:</RightWordBold>
                Phần tử tối tiểu (tối đại) của một tập có thứ tự không nhất thiết là duy nhất.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Xét tập S = {'{'}1, 2, 3{'}'} với quan hệ R cho bởi R = {'{'}(1,1), (2,2), (3,3), (1,2), (3,2){'}'}. Dễ dàng kiểm chứng rằng (S,R) là tập có thứ tự. Với thứ tự R này, S có hai phần tử tối tiểu là 1 và 3.<br />
                - Phần tử lớn nhất (nhỏ nhất) của một tập có thứ tự, nếu có, là phần tử tối đại (tối tiểu) duy nhất của tập hợp đó.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Xét poset có biểu đồ Hasse dưới đây:</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Image style={{ marginLeft: "80px", width: "50%" }} src={require('../../images/quanhe/3_5_1.png').default} />
                <RightP>Mỗi đỉnh màu đỏ là <RightWordBold>tối đại</RightWordBold>.<br />
                    Mỗi đỉnh màu xanh là <RightWordBold>tối tiểu</RightWordBold>.<br />
                    Không có cung nào xuất phát từ điểm tối đại.<br />
                    Không có cung nào kết thúc ở điểm tối tiểu.</RightP>
            </Div>
            <RightP><RightWordBold>Chú ý: Trong một poset S hữu hạn, phần tử tối tiểu và phần tử tối đại luôn luôn tồn tại.</RightWordBold></RightP>
            <RightP>- Thật vậy, chúng ta xuất phát từ điểm bất kỳ a<sub>0</sub> &isin; S. Nếu a<sub>0</sub> không là phần tử tối tiểu thì &exist; a<sub>1</sub> &isin; S: a<sub>1</sub> ≺ a<sub>0</sub> . Tiếp tục  như vậy cho đến khi tìm được phần tử tối tiểu.<br />
                - Phần tử tối đại cũng tìm được bằng phương pháp tương tự.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_2.png').default} />

            <RightP><RightWordBold>Ví dụ. Tìm phần tử tối đại, tối tiểu của poset ({'{'}2, 4, 5, 10, 12, 20, 25{'}'}, | ) ?</RightWordBold></RightP>
            <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 12, 20, 25 là các phần tử tối đại, còn 2, 5 là các phần tử tối tiểu. <br />
                - Như vậy phần tử tối đại, tối tiểu của poset có thể không duy nhất.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_3.png').default} />

            <RightP><RightWordBold>Ví dụ: Tìm phần tử tối đại, tối tiểu của poset các chuỗi bit độ dài 3?</RightWordBold></RightP>
            <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 111 là phần tử tối đại duy nhất và 000 là phần tử tối tiểu duy nhất.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/quanhe/3_5_4.png').default} />
            <RightP>111 là phần tử lớn nhất và 000 là phần tử nhỏ nhất theo nghĩa:<RightWordBold>000 ≺ abc ≺ 111 </RightWordBold>với mọi chuỗi abc.</RightP>
        </>
    )
}
// Dai so Boole
// 38
export const DaiSoLogicB = () => {
    return (
        <>
            <Div id="1">
                <RightH2>Đại số logic B</RightH2>
                <RightP>Trên tập logic B = {'{'}0, 1{'}'} xét các phép toán logic <br />
                    &and; (tích Boole)		x &and; y<br />
                    &or; (tổng Boole)		x &or; y<br />
                    &#9489; (phép bù)		&#9489;x<br />
                    trong đó x, y &isin; B gọi là các biến logic hoặc biến Boole.</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} />
            </Div>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>Cho D<sub>70</sub>={'{'} 1, 2, 5, 7, 10, 14, 35, 70 {'}'} là tập hợp các ước dương của 70. Trên D<sub>70</sub> ta trang bị các phép toán như sau:<br />
                    - a + b = LCM(a, b): BCNN của a và b<br />
                    - a * b = GCD(a, b): UCLN của a và b<br />
                    - a' = 70/a<br />
                    a. CMR: D<sub>70</sub> là một đại số Bool.<br />
                    b. Xét 2 tập con của D<sub>70</sub> : X={'{'} 1, 5, 10, 70 {'}'} và Y={'{'} 1, 2, 35, 70 {'}'}. Khi đó X, Y có phải là các đại số con của D<sub>70</sub> hay không? Vì sao?</RightP>
            </Div>
        </>
    )
}
// 39
export const MotSoPhepToanHaiNgoi = () => {
    return (
        <>
            <Div>
                <RightH2 id="2">Một số phép toán hai ngôi</RightH2>
                <RightP>
                    1. Tổng modulo 2, x + y<br />
                    2. Kéo theo x &rarr; y<br />
                    3. Tương đương x &harr; y<br />
                    4. Vebb (NOR)  x &darr; y<br />
                    5. Sheffer (NAND) x &uarr; y</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/2.png').default} />
                {/* <RightP></RightP> */}
            </Div>
        </>
    )
}
// 41
export const DaiSoBoole = () => {
    return (
        <>
            <Div>
                <RightH2 id="3">Đại số boole</RightH2>
                <RightH3 id="3_1">1. Định nghĩa</RightH3>
                <RightP>Cho tập A có ít nhất 2 phần tử, trong đó có 2 phần tử đặc biệt được ký hiệu là 0 và 1. Trên A xét các phép toán 2 – ngôi &and; và &or;, và phép toán 1 – ngôi <sup>/</sup><br />
                    Ký hiệu là (A, &and;, &or;, <sup>/</sup>, 0, 1)</RightP>
                <RightH3 id="3_2">2. Các phép toán logic</RightH3>
                {/* Giao hoán */}
                <RightP><RightWordBold>- Giao hoán:</RightWordBold></RightP>
                <RightP>&forall; a, b &isin; A:<br />
                    a &or; b = b &or; a<br />
                    a &and; b = b &and; a</RightP>
                {/* Kết hợp */}
                <RightP><RightWordBold>- Kết hợp:</RightWordBold></RightP>
                <RightP>&forall; a, b, c &isin; A:<br />
                    (a &or; b) &or; c = a &or; (b &or; c)<br />
                    (a &and; b) &and; c = a &and; (b &and; c)</RightP>
                {/* Phân phối */}
                <RightP><RightWordBold>- Phân phối:</RightWordBold></RightP>
                <RightP>&forall; a, b, c &isin; A:<br />
                    a &or; (b &and; c) = (a &or; b) &and; (a &or; c)<br />
                    a &and; (b &or; c) = (a &and; b) &or; (a &and; c)</RightP>
                {/* Phần tử trung hòa */}
                <RightP><RightWordBold>- Phần tử trung hòa:</RightWordBold></RightP>
                <RightP>Trong A tồn tại phần tử 0 và 1: &forall; a &isin; A:<br />
                    a &and; 1 = 1 &and; a = a<br />
                    a &or; 0 = 0 &or; a = a</RightP>
                {/* Phần tử bù */}
                <RightP><RightWordBold>- Phần tử bù:</RightWordBold></RightP>
                <RightP>&forall; a &isin; A, tồn tại duy nhất phần tử bù <span style={{ borderTop: "1px solid #000" }}>a</span> sao cho:<br />
                    a &and; <span style={{ borderTop: "1px solid #000" }}>a</span> = 0<br />
                    a &or; <span style={{ borderTop: "1px solid #000" }}>a</span> = 1</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/3_2.png').default} />
            </Div>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Tìm các biểu thức Bool biểu diễn các hàm F(x, y, z) và G(x, y, z) với bảng chân trị sau :<br />
                    <Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/2.png').default} />
                </RightP>
            </Div>
        </>
    )
}
// 42
export const CacPhepToanLogicBoole = () => {
    return (
        <>
            <RightH3 id="3_2">Các phép toán logic trong đại số Boole</RightH3>
            {/* Giao hoán */}
            <RightP><RightWordBold>- Giao hoán:</RightWordBold></RightP>
            <RightP>&forall; a, b &isin; A:<br />
                a &or; b = b &or; a<br />
                a &and; b = b &and; a</RightP>
            {/* Kết hợp */}
            <RightP><RightWordBold>- Kết hợp:</RightWordBold></RightP>
            <RightP>&forall; a, b, c &isin; A:<br />
                (a &or; b) &or; c = a &or; (b &or; c)<br />
                (a &and; b) &and; c = a &and; (b &and; c)</RightP>
            {/* Phân phối */}
            <RightP><RightWordBold>- Phân phối:</RightWordBold></RightP>
            <RightP>&forall; a, b, c &isin; A:<br />
                a &or; (b &and; c) = (a &or; b) &and; (a &or; c)<br />
                a &and; (b &or; c) = (a &and; b) &or; (a &and; c)</RightP>
            {/* Phần tử trung hòa */}
            <RightP><RightWordBold>- Phần tử trung hòa:</RightWordBold></RightP>
            <RightP>Trong A tồn tại phần tử 0 và 1: &forall; a &isin; A:<br />
                a &and; 1 = 1 &and; a = a<br />
                a &or; 0 = 0 &or; a = a</RightP>
            {/* Phần tử bù */}
            <RightP><RightWordBold>- Phần tử bù:</RightWordBold></RightP>
            <RightP>&forall; a &isin; A, tồn tại duy nhất phần tử bù <span style={{ borderTop: "1px solid #000" }}>a</span> sao cho:<br />
                a &and; <span style={{ borderTop: "1px solid #000" }}>a</span> = 0<br />
                a &or; <span style={{ borderTop: "1px solid #000" }}>a</span> = 1</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/3_2.png').default} />
        </>
    )
}
// 43
export const HamBoole = () => {
    return (
        <>
            <RightH2 id="4">Hàm Boole</RightH2>
            <RightH3 id="4_1">1. Định nghĩa</RightH3>
            <RightP>
                - Ánh xạ f: B<sup>n</sup> &rarr;B gọi là một hàm Boole n biến.<br />
                - Hàm đồng nhất bằng 1 ký hiệu là 1, hàm đồng nhất bằng 0 ký hiệu là 0. Tập tất cả các hàm Boole n – biến ký hiệu là F<sub>n</sub>.</RightP>
            <RightP>Cho f và g là hai hàm Boole n biến. Chúng ta có các định nghĩa như sau:<br />
                1. (f &and; g)(x<sub>1</sub>, …, x<sub>n</sub>) = f(x<sub>1</sub>, …, x<sub>n</sub>) &and; g(x<sub>1</sub>, …, x<sub>n</sub>)<br />
                2. (f &or; g)(x<sub>1</sub>, …, x<sub>n</sub>) = f(x<sub>1</sub>, …, x<sub>n</sub>) &or; g(x<sub>1</sub>, …, x<sub>n</sub>)<br />
                3. f<sub>/</sub>(x<sub>1</sub>, …, x<sub>n</sub>) = (f(x<sub>1</sub>, …, x<sub>n</sub>))<br />
                với mọi x1, …, xn.</RightP>
            <RightP>
                - Ta có F<sub>n</sub> cùng các phép toán này lập thành một đại số Boole.<br />
                - Ngoài ra còn có:<br />
                f &le; g &hArr; f &or; g = g &hArr; f &and; g = f<br />
                trong đó f &le; g nếu <br />
                f(x<sub>1</sub>, …, x<sub>n</sub>) &le; g(x<sub>1</sub>, …, x<sub>n</sub>)<br />
                Cách thông thường nhất để xác định một hàm Boole là dùng bảng giá trị.</RightP>
            <RightP><RightWordItalic>Hàm Boole hai biến</RightWordItalic></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/4_1.png').default} />
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>
                - Xét kết quả f trong việc thông qua một quyết định dựa vào 3 phiếu bầu x, y, z: <br />
                1.	Mỗi phiếu chỉ lấy một trong hai giá trị:<br />
                1 (tán thành) hoặc 0 (bác bỏ).<br />
                2.	Kết quả f: <br />
                - là 1 (thông qua quyết định) nếu được đa số phiếu tán thành.<br />
                - là 0 (không thông qua quyết định) nếu đa số phiếu bác bỏ.<br />
                - Khi đó f là hàm Bool theo 3 biến x,y,x có bảng chân trị như sau:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/4_1_2.png').default} />
            <RightP>
                - Chúng ta cũng có thể xác định hàm Boole bằng một biểu thức Boole. Đó là một biểu thức gồm các biến Boole và các phép toán &and; (hội), &or; (tuyển), / (phép lấy bù).<br />
                <RightWordItalic>Mỗi biểu thức Boole cũng được xem như một hàm Boole.</RightWordItalic></RightP>

            <RightH3 id="4_2">2. Tích sơ cấp, các phép toán trên hàm boole</RightH3>
            <RightP>
                - Biến x gọi là biến Boole nếu x chỉ nhận một trong hai giá trị 0/1.<br />
                - Giả sử x là một biến Boole. Khi đó ký hiệu x<sup>1</sup> = x, x<sup>0</sup> = &#9488;x.<br />
                <RightWordBold>Các phép toán trên hàm boole</RightWordBold></RightP>
            {/* Phép cộng boole */}
            <RightP><RightWordBold>• Phép cộng Boole &or;:</RightWordBold></RightP>
            <RightP>
                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br />
                f &or; g = f + g - fg<br />
                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br />
                &rarr; (f &or; g)(x) = f(x) + g(x) – f(x)g(x)</RightP>
            {/* Phép nhân boole */}
            <RightP><RightWordBold>• Phép cộng Boole &and;:</RightWordBold></RightP>
            <RightP>
                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br />
                f &and; g = fg<br />
                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br />
                &rarr; (f &and; g)(x) = f(x)g(x)</RightP>
            {/* Phép lấy phần bù */}
            <RightP><RightWordBold>• Phép lấy phần bù:</RightWordBold></RightP>
            <RightP><span style={{ borderTop: "1px solid #000" }}>f</span> = 1 - f</RightP>
            <RightH3 id="4_3">3. Biểu thức Boole</RightH3>
            <RightP>
                - Là một biểu thức được tạo bởi các biến và các phép toán Boole.<br />
                VD: E= (x &and; y &and; z) &or; (z &and; <span style={{ borderTop: "1px solid #000" }}>y</span>)<br />
                - Để dễ đọc hơn, người ta có thể viết:<br />
                E = xyz + z<span style={{ borderTop: "1px solid #000" }}>y</span></RightP>
            <RightH3 id="4_4">4. Dạng nối rời chính tắc</RightH3>
            <RightP>Xét tập hợp các hàm Boole n biến F<sub>n</sub> theo n biến x<sub>1</sub>, x<sub>2</sub>, …,x<sub>n</sub>.</RightP>
            <RightP>- Mỗi hàm Boole x<sub>i</sub> hay <span style={{ borderTop: "1px solid #000" }}>x<sub>i</sub></span> được gọi là một từ đơn.<br />
                - Đơn thức là tích khác không của một số hữu hạn từ đơn.<br />
                - Từ tối tiểu (đơn thức tối tiểu) là tích khác không của đúng n từ đơn.<br />
                - Công thức đa thức là công thức biểu diễn hàm Boole thành tổng của các đơn thức.<br />
                - Dạng nối rời chính tắc là công thức biểu diễn hàm Boole thành tổng của các từ tối tiểu.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>Xét hàm boole, với 3 biến: x, y, z<br />
                x, y, z, <RightWordNot>x</RightWordNot>, <RightWordNot>y</RightWordNot>, <RightWordNot>z</RightWordNot> là các từ đơn.<br />
                xy, yz là đơn thức<br />
                xy<RightWordNot>z</RightWordNot> là từ tối tiểu<br />
                E = xy + yz là một công thức đa thức<br />
                Và F = xyz + <RightWordNot>x</RightWordNot> <RightWordNot>y</RightWordNot> <RightWordNot>z</RightWordNot> là một dạng nối rời chính tắc</RightP>
            <RightP>
                Cho f &isin; F<sub>n</sub>, f có thể viết dưới dạng sau:<br />
                f = u<sub>1</sub> &or; u<sub>2</sub> &or; u<sub>3</sub> &or; ... &or;  u<sub>i</sub><br />
                Với u<sub>i</sub>  là các đơn thức tối tiểu bậc n (i = 1, …, n).<br />
                được gọi là dạng nối rời chính tắc của f.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>
                - Trong F<sub>4</sub> có dạng biểu diễn sau đây:<br />
                f(x,y,z,t) = x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot>t  ∨ <RightWordNot>x</RightWordNot>yzt ∨ xy<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot><br />
                ⇒ f có dạng nối rời chính tắc của hàm Bool.</RightP>
            <RightP><RightWordBold>Có 2 cách để xác định dạng nối rời chính tắc một hàm Bool:</RightWordBold></RightP>
            {/* Cach 1 */}
            <RightP><RightWordBold>Cách 1:</RightWordBold>Bổ sung từ đơn còn thiếu vào các đơn thức.</RightP>
            <RightP>
                - Bước 1: Khai triển hàm Bool thành tổng của các đơn thức.<br />
                - Bước 2: Với mỗi đơn thức thu được ở bước 1, ta nhân đơn thức đó với các tổng dạng với xi là những từ đơn bị thiếu trong đơn thức đó.<br />
                - Bước 3: Tiếp tục khai triển hàm thu được ở bước 2 và loại bỏ những đơn thức bị trùng. Công thức đa thức thu được chính là dạng nối rời chính tắc của hàm Bool ban đầu.</RightP>
            <RightP><RightWordBold>Ví dụ: </RightWordBold>Trong F<sub>3</sub> tìm dạng nối rời chính tắc</RightP>
            <RightP>
                f(x,y,z) = <RightWordNot>x</RightWordNot> &or; <RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                = <RightWordNot>x</RightWordNot>(y &or; <RightWordNot>y</RightWordNot>).(z &or; <RightWordNot>z</RightWordNot>) &or; (<RightWordNot>x</RightWordNot> &or; x)<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                = <RightWordNot>x</RightWordNot>yz &or; <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> ̅&or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; x<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                &rArr; f có dạng nối rời chính tắc của hàm Bool.</RightP>
            {/* Cach 2 */}
            <RightP><RightWordBold>Cách 2:</RightWordBold>Dùng bảng chân trị. Để ý đến các vector boole trong bảng chân trị mà tại đó f = 1.</RightP>
            <RightP>Tại đó Vector bool thứ n là u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub> và f(u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub>) = 1</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Cho f(x,y) = x &or; <RightWordNot>y</RightWordNot>. <br />
                Tìm biểu thức dạng nối rời chính tắc của f.</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Lập bảng chân trị của f:</RightP>
                <Image src={require('../../images/boole/4_4.png').default} />
            </Div>
            <RightP>Các thể hiển làm cho f = 1 là 00, 10, 11.<br />
                &rarr; Lập được các từ tối tiểu tương ứng. <br />
                Vậy dạng nối rời chính tắc của f là f(x,y) = <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot> &or; x<RightWordNot>y</RightWordNot> &or; xy.</RightP>
        </>
    )
}
// 44
export const TichSoCap = () => {
    return (
        <>
            <RightH3 id="4_2">Tích sơ cấp, các phép toán trên hàm boole</RightH3>
            <RightP>
                - Biến x gọi là biến Boole nếu x chỉ nhận một trong hai giá trị 0/1.<br />
                - Giả sử x là một biến Boole. Khi đó ký hiệu x<sup>1</sup> = x, x<sup>0</sup> = &#9488;x.<br />
                <RightWordBold>Các phép toán trên hàm boole</RightWordBold></RightP>
            {/* Phép cộng boole */}
            <RightP><RightWordBold>• Phép cộng Boole &or;:</RightWordBold></RightP>
            <RightP>
                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br />
                f &or; g = f + g - fg<br />
                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br />
                &rarr; (f &or; g)(x) = f(x) + g(x) – f(x)g(x)</RightP>
            {/* Phép nhân boole */}
            <RightP><RightWordBold>• Phép cộng Boole &and;:</RightWordBold></RightP>
            <RightP>
                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br />
                f &and; g = fg<br />
                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br />
                &rarr; (f &and; g)(x) = f(x)g(x)</RightP>
            {/* Phép lấy phần bù */}
            <RightP><RightWordBold>• Phép lấy phần bù:</RightWordBold></RightP>
            <RightP><span style={{ borderTop: "1px solid #000" }}>f</span> = 1 - f</RightP>
        </>
    )
}

// export const CacPhepToanTrenHamBoole = () => {
//     return (
//         <>

//         </>
//     )
// }
// 46
export const BieuThucBoole = () => {
    return (
        <>
            <RightH3 id="4_3">Biểu thức Boole</RightH3>
            <RightP>
                - Là một biểu thức được tạo bởi các biến và các phép toán Boole.<br />
                VD: E= (x &and; y &and; z) &or; (z &and; <span style={{ borderTop: "1px solid #000" }}>y</span>)<br />
                - Để dễ đọc hơn, người ta có thể viết:<br />
                E = xyz + z<span style={{ borderTop: "1px solid #000" }}>y</span></RightP>
        </>
    )
}
// 47
export const DangNoiRoiChinhTac = () => {
    return (
        <>
            <RightH3 id="4_4">Dạng nối rời chính tắc</RightH3>
            <RightP>Xét tập hợp các hàm Boole n biến F<sub>n</sub> theo n biến x<sub>1</sub>, x<sub>2</sub>, …,x<sub>n</sub>.</RightP>
            <RightP>- Mỗi hàm Boole x<sub>i</sub> hay <span style={{ borderTop: "1px solid #000" }}>x<sub>i</sub></span> được gọi là một từ đơn.<br />
                - Đơn thức là tích khác không của một số hữu hạn từ đơn.<br />
                - Từ tối tiểu (đơn thức tối tiểu) là tích khác không của đúng n từ đơn.<br />
                - Công thức đa thức là công thức biểu diễn hàm Boole thành tổng của các đơn thức.<br />
                - Dạng nối rời chính tắc là công thức biểu diễn hàm Boole thành tổng của các từ tối tiểu.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>Xét hàm boole, với 3 biến: x, y, z<br />
                x, y, z, <RightWordNot>x</RightWordNot>, <RightWordNot>y</RightWordNot>, <RightWordNot>z</RightWordNot> là các từ đơn.<br />
                xy, yz là đơn thức<br />
                xy<RightWordNot>z</RightWordNot> là từ tối tiểu<br />
                E = xy + yz là một công thức đa thức<br />
                Và F = xyz + <RightWordNot>x</RightWordNot> <RightWordNot>y</RightWordNot> <RightWordNot>z</RightWordNot> là một dạng nối rời chính tắc</RightP>
            <RightP>
                Cho f &isin; F<sub>n</sub>, f có thể viết dưới dạng sau:<br />
                f = u<sub>1</sub> &or; u<sub>2</sub> &or; u<sub>3</sub> &or; ... &or;  u<sub>i</sub><br />
                Với u<sub>i</sub>  là các đơn thức tối tiểu bậc n (i = 1, …, n).<br />
                được gọi là dạng nối rời chính tắc của f.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
            <RightP>
                - Trong F<sub>4</sub> có dạng biểu diễn sau đây:<br />
                f(x,y,z,t) = x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot>t  ∨ <RightWordNot>x</RightWordNot>yzt ∨ xy<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot><br />
                ⇒ f có dạng nối rời chính tắc của hàm Bool.</RightP>
            <RightP><RightWordBold>Có 2 cách để xác định dạng nối rời chính tắc một hàm Bool:</RightWordBold></RightP>
            {/* Cach 1 */}
            <RightP><RightWordBold>Cách 1:</RightWordBold>Bổ sung từ đơn còn thiếu vào các đơn thức.</RightP>
            <RightP>
                - Bước 1: Khai triển hàm Bool thành tổng của các đơn thức.<br />
                - Bước 2: Với mỗi đơn thức thu được ở bước 1, ta nhân đơn thức đó với các tổng dạng với xi là những từ đơn bị thiếu trong đơn thức đó.<br />
                - Bước 3: Tiếp tục khai triển hàm thu được ở bước 2 và loại bỏ những đơn thức bị trùng. Công thức đa thức thu được chính là dạng nối rời chính tắc của hàm Bool ban đầu.</RightP>
            <RightP><RightWordBold>Ví dụ: </RightWordBold>Trong F<sub>3</sub> tìm dạng nối rời chính tắc</RightP>
            <RightP>
                f(x,y,z) = <RightWordNot>x</RightWordNot> &or; <RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                = <RightWordNot>x</RightWordNot>(y &or; <RightWordNot>y</RightWordNot>).(z &or; <RightWordNot>z</RightWordNot>) &or; (<RightWordNot>x</RightWordNot> &or; x)<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                = <RightWordNot>x</RightWordNot>yz &or; <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> ̅&or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; x<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br />
                &rArr; f có dạng nối rời chính tắc của hàm Bool.</RightP>
            {/* Cach 2 */}
            <RightP><RightWordBold>Cách 2:</RightWordBold>Dùng bảng chân trị. Để ý đến các vector boole trong bảng chân trị mà tại đó f = 1.</RightP>
            <RightP>Tại đó Vector bool thứ n là u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub> và f(u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub>) = 1</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Cho f(x,y) = x &or; <RightWordNot>y</RightWordNot>. <br />
                Tìm biểu thức dạng nối rời chính tắc của f.</RightP>
            <Div className="d-flex justify-content-between">
                <RightP>Lập bảng chân trị của f:</RightP>
                <Image src={require('../../images/boole/4_4.png').default} />
            </Div>
            <RightP>Các thể hiển làm cho f = 1 là 00, 10, 11.<br />
                &rarr; Lập được các từ tối tiểu tương ứng. <br />
                Vậy dạng nối rời chính tắc của f là f(x,y) = <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot> &or; x<RightWordNot>y</RightWordNot> &or; xy.</RightP>
        </>
    )
}
// 48
export const CongThucDaThucToiThieu = () => {
    return (
        <>
            <RightH2 id="5">Công thức đa thức tối thiểu</RightH2>
            <RightH3 id="5_1">1. Đơn giản hơn</RightH3>
            <RightP>Cho  hai công thức đa thức của một hàm Boole:<br />
                F = m<sub>1</sub> &or; m<sub>2</sub> &or; m<sub>3</sub> &or; ........ m<sub>k</sub><br />
                G = M<sub>1</sub> &or; M<sub>2</sub> &or; M<sub>3</sub> &or; ........ M<sub>l</sub><br />
                Ta nói rằng công thức F đơn giản hơn công thức G nếu tồn tại đơn ánh h:<br />
                {'{'}1, 2, …, k{'}'} &rarr; {'{'}1, 2, …, l{'}'} sao cho với mọi i &isin; {'{'}1, 2, …, k{'}'} thì số từ đơn của m<sub>i</sub> không nhiều hơn số từ đơn của M<sub>h(i)</sub>.</RightP>
            <RightH3 id="5_2">2. Đơn giản như nhau</RightH3>
            <RightP>Nếu F đơn giản hơn G và G đơn giản hơn F thì ta nói F và G <RightWordBold>đơn giản như nhau</RightWordBold>.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/5_2_1.png').default} />
            <RightH3 id="5_3">5.3 Công thức đa thức tối thiểu</RightH3>
            <RightP>Công thức F của hàm Boole f được gọi là <RightWordBold>Công thức đa thức tối tiểu</RightWordBold> nếu với bất kỳ công thức G của f mà đơn giản hơn F thì F và G đơn giản như nhau.</RightP>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Tìm công thức đa thức tối thiểu của các hàm sau<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = xyz + xy<span className="overline">z</span> + <span className='overline'>x</span>yz + <span className='overline'>x</span>y<span className='overline'>z</span><br />
                    b. F = x<span className='overline'>y</span>z + xy<span className='overline'>z</span> + x<span className='overline'>yz</span> + xy<br />
                    c. F = <span className='overline'>x</span>y + x<span className='overline'>y</span> + xy + <span className='overline'>xy</span><br />
                    d. F = (y + <span className='overline'>z</span>)(<span className='overline'>y</span> + z) + <span className='overline'>x</span> + y + <span className='overline'>z</span><br />
                    e. F = (x + <span className='overline'>y</span> + x<span className='overline'>y</span>)(xy + <span className='overline'>x</span>z + yz)<br />
                    f. F = (<span className='overline'>x</span> + y)(x + y)
                </RightP>
            </Div>
        </>
    )
}
// 49
export const BieuDoKarnaughCuaHamBoole = () => {
    return (
        <>
            <RightH2 id="6">Biểu đồ Karnaugh của hàm boole</RightH2>
            <RightH3 id="6_1">1. Biểu đồ Karnaugh</RightH3>
            <RightP>Sử dụng bảng Karnaugh là phương pháp xác định công thức đa thức tối tiểu.<br />
                Quy tắc gom nhóm:<br />
                - Gom các tiểu hạng mang biểu diễn là số 1.<br />
                - Khi gom 2<sup>n</sup> Ô kế cận sẽ loại được n biến. Những biến bị loại là những biến khi ta đi vòng qua các ô kế cận mà giá trị của chúng thay đổi.<br />
                - Các vòng phải được gom sao cho số ô có thể vào trong vòng là lớn nhất và để đạt được điều đó, thường ta phải gom cả những ô đã gom vào trong các vòng khác.<br />
                - Vòng gom phải là 1 hình chữ nhật.</RightP>
            <RightH3 id="6_2">2. Karnaugh hai biến</RightH3>
            <RightP>
                - Đối với hàm boole hai biến x, y:<br />
                - Bảng karnaugh 2 biến có 4 ô vuông, trong đó:</RightP>
            <Div className="d-flex justify-content-between align-items-center">
                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_2_1.png').default} />
                <RightP>
                    - Ô được đánh số 1 để biểu diễn tiểu hạng có mặt trong hàm.<br />
                    - Các ô được cho là liền nhau nếu các tiểu hạng mà chúng biểu diễn chỉ khác nhau 1 biến.</RightP>
            </Div>

            <RightP><RightWordBold>Gom nhóm:<br /></RightWordBold>
                - Từ bảng Karnaugh &rarr; Tổ hợp các tiểu hạng mang biểu diễn là số 1.<br />
                - Các tổ hợp được gom phải là khối khả dĩ lớn nhất và số ô là 2<sup>n</sup> , với n = 1, 2.</RightP>
            {/* Ví dụ 1 */}
            <RightP><RightWordBold>Ví dụ 1:</RightWordBold>
                Tìm bảng Karnaugh cho F = xy + x<RightWordNot>y</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_2_2.png').default} />
            {/* Ví dụ 2 */}
            <RightP><RightWordBold>Ví dụ 2:</RightWordBold>
                Tìm bảng Karnaugh cho F = xy + <RightWordNot>x</RightWordNot>y + <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_2_3.png').default} />
            <RightH3 id="6_3">3. Karnaugh ba biến</RightH3>
            <RightP>Bảng karnaugh 3 biến là 1 hình chữ nhật chia thành 8 ô.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_3_1.png').default} />
            <RightP>• Sau khi có bảng Karnaugh, ta bắt đầu gom nhóm các tiểu hạng.<br />
                • Quy tắc tương tự Bảng Karnaugh 2 biến.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Dùng bảng Karnaugh 3 biến để rút gọn tổng các tích sau<br />
                xy<RightWordNot>z</RightWordNot> + x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> +
                <RightWordNot>x</RightWordNot>yz +
                <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> +
                <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_3_2.png').default} />
            <RightH3 id="6_4">4. Karnaugh bốn biến</RightH3>
            <RightP>Bảng gồm 16 ô vuông như sau:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_4_1.png').default} />

            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Dùng bảng Karnaugh 4 biến để rút gọn tổng các tích sau<br />
                D = wxyz +
                wxy<RightWordNot>z</RightWordNot> +
                wx<RightWordNot>y</RightWordNot>z +
                w<RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> +
                w<RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z +
                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot>yz +
                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z +
                <RightWordNot>w</RightWordNot>x<RightWordNot>y</RightWordNot>z</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_4_2.png').default} />
            <RightP><RightWordBold>Phủ tối tiểu của một tập</RightWordBold>
                - Việc tìm tất cả các tổng chuẩn tắc không dư thừa của hàm Boole f, từ các tsc tối đại của f, là một vấn đề khá phức tạp.<br />
                - Trước hết, chúng ta xét bài toán tìm phủ tối tiểu của một tập như sau.<br />
                Phủ của tập X<br />
                Cho S = {'{'}X<sub>1</sub>, …, X<sub>n</sub>{'}'} là họ các tập con của X. S gọi là phủ của X nếu X = &#8899; X<sub>i</sub>.<br />
                Phủ tối tiểu của X<br />
                Giả sử S là một phủ của X. S gọi là phủ tối tiểu của X nếu với mọi i, S\X<sub>i</sub> không phủ X.</RightP>

            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                - X = {'{'}a, b, c, d{'}'}<br />
                - A = {'{'}a, b{'}'}	 B = {'{'}c, d{'}'}<br />
                - C = {'{'}a, d{'}'} 	 D = {'{'}b, c{'}'}<br />
                - {'{'}A, B, C, D{'}'} phủ không tối tiểu.<br />
                - {'{'}A, B{'}'}, {'{'}C, D{'}'} là các phủ tối tiểu.<br />
                - {'{'}A, C, D{'}'} phủ không tối tiểu.<br />
                - {'{'}B, D{'}'} không phủ.</RightP>
            <RightH3 id="6_5">5. Thuật toán tìm công thức đa thức tối thiểu</RightH3>
            <RightP><RightWordBold className="ml-3">Gồm 5 bước:<br /></RightWordBold>
                Bước 1: Vẽ biểu đồ Karnaugh của f.<br />
                Bước 2: Xác định tất cả các tế bào lớn của kar(f).<br />
                Bước 3: Xác định các tế bào lớn nhất thiết phải chọn.<br />
                Ta nhất thiết phải chọn tế bào lớn T khi tồn tại một ô của kar(f) mà ô này chỉ nằm trong tế bào lớn T và không nằm trong bất kỳ tế bào lớn nào khác.<br />
                Bước 4: Xác định các phủ tối tiểu gồm các tế bào lớn:<br />
                • Nếu các tế bào lớn chọn được ở bước 3 đã phủ được kar(f) thì ta có duy nhất một phủ tối tiểu gồm các tế bào lớn của kar(f).<br />
                • Nếu các tế bào lớn chọn được ở bước 3 chưa phủ được kar(f) thì:<br />
                <span className="ml-3">
                    - Xét một ô chưa bị phủ, sẽ có ít nhất hai tế bào lớn chứa ô này, ta chọn một trong các tế bào lớn này.  Cứ tiếp tục như thế ta sẽ tìm được tất cả các phủ gồm các tế bào lớn của kar(f).<br /></span>
                <span className="ml-3">
                    - Loại bỏ các phủ không tối tiểu, ta tìm được tất cả các phủ tối tiểu gồm các tế bào lớn của kar(f).<br /></span>
                Bước 5: Xác định các công thức đa thức tối tiểu của f.<br />
                • Từ các phủ tối tiểu gồm các tế bào lớn của kar(f) tìm được ở bước 4 ta xác định được các công thức đa thức tương ứng của f.<br />
                • Loại bỏ các công thức đa thức mà có một công thức đa  thức nào đó thực sự đơn giản hơn chúng.<br />
                • Các công thức đa thức còn lại chính là các công thức đa thức tối tiểu của f.</RightP>
            <RightP><RightWordBold>Ví dụ 1: </RightWordBold>
                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot><br />
                Bước 1: Bảng Kar(f)<br />
                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_1.png').default} />

            <RightP>Bước 2: Xác định tất cả các tế bào lớn của f. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_2.png').default} />

            <RightP>Bước 3: Chọn tế bào lớn nhất thiết phải chọn: (Vì chúng chứa các các ô không nằm trong tế bào nào khác – minh hoạ với ô vàng)<br />
                - Chọn tế bào lớn thứ 1: x<br />
                - Chọn tế bào lớn thứ 2: yz</RightP>

            <RightP>Bước 4: Xác định họ phủ của các tế bào lớn:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_3.png').default} />
            <RightP>Ta thấy các tế bào chọn ở bước 3 đã phủ hết bảng<br />
                &rarr; đây là họ phủ tối thiểu gồm các tế bào <br />
                Kar(f): x &or; yz</RightP>

            <RightP>Bước 5: Ứng với họ phủ tối thiểu của tế bào lớn tìm được ta được duy nhất 1 công thức đa thức tối tiểu của f:<br />
                &rarr; f = x &or; yz</RightP>

            <RightP><RightWordBold>Ví dụ 2: </RightWordBold>
                Tìm các công thức đa thức tối thiểu của hàm f: <br />
                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or;
                xyzt &or;
                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 1: Bảng Kar(f)<br />
                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or;
                xyzt &or;
                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_4.png').default} />

            <RightP>Bước 2: Xác định các tế bào lớn</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_5.png').default} />
            <RightP>
                + Tế bào lớn thứ 1: <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot><br />
                + Tbào lớn thứ 2: <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                + Tế bào lớn thứ 3: <RightWordNot>y</RightWordNot>zt<br />
                + Tế bào lớn thú 4: xzt<br />
                + Tế bào lớn thứ 5: <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 3: Xác định các tế bào lớn nhất thiết phải chọn</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_6.png').default} />
            <RightP>
                - Có 3 ô chỉ nằm trong 1 tế bào lớn<br />
                - Các tế bào lớn nhất thiết phải chọn là<br />
                <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> + xzt + <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 4: Xác định họ phủ tối thiểu của các tế bào lớn:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_7.png').default} />
            <RightP>
                - Ta có họ phủ : <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt<br />
                - Ta thấy còn một ô chưa được phủ và ô đó nằm ở 1 trong 2 tế bào lớn.<br />
                - Ta có 2 cách chọn:<br />
                Cách chọn thứ 1: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                Cách chọn thứ 2: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>

            <RightP>Bước 5: Xác định công thức đa thức cực tiểu:<br />
                - Ta thấy 2 công thức đơn giản như nhau cho nên công thức đa thức tối thiểu của hàm f là:<br />
                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Dùng phương pháp Karnaugh tối thiểu hóa các hàm 3 biến sau:<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = xyz + x<span className='overline'>y</span>z + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z + <span className='overline'>xyz</span><br />
                    b. F = x<span className='overline'>y</span> + xyz + xy<span className='overline'>z</span> + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span><br />
                    c. F = xy<span className='overline'>z</span> + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z<br />
                    d. F = xyz + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span>
                </RightP>
                <RightP>
                    Dùng phương pháp Karnaugh tối thiểu hóa các hàm 4 biến sau:<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = wxyz + wx<span className='overline'>y</span>z + wx<span className='overline'>yz</span> + w<span className='overline'>x</span>y<span className='overline'>z</span> + w<span className='overline'>xy</span>z<br />
                    b. F = wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    c. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>xy</span>z + w<span className='overline'>xyz</span> + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    d. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + w<span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>w</span>xyz + <span className='overline'>wx</span>yz + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z
                </RightP>
            </Div>
        </>
    )
}
// 50
export const BanDoKarnaugh = () => {
    return (
        <>
            <RightH3 id="6_1">Biểu đồ Karnaugh</RightH3>
            <RightP>Sử dụng bảng Karnaugh là phương pháp xác định công thức đa thức tối tiểu.<br />
                Quy tắc gom nhóm:<br />
                - Gom các tiểu hạng mang biểu diễn là số 1.<br />
                - Khi gom 2<sup>n</sup> Ô kế cận sẽ loại được n biến. Những biến bị loại là những biến khi ta đi vòng qua các ô kế cận mà giá trị của chúng thay đổi.<br />
                - Các vòng phải được gom sao cho số ô có thể vào trong vòng là lớn nhất và để đạt được điều đó, thường ta phải gom cả những ô đã gom vào trong các vòng khác.<br />
                - Vòng gom phải là 1 hình chữ nhật.</RightP>
        </>
    )
}
// 52
export const KarnaughHaiBien = () => {
    return (
        <>
            <RightH3 id="6_2">Karnaugh hai biến</RightH3>
            <RightP>
                - Đối với hàm boole hai biến x, y:<br />
                - Bảng karnaugh 2 biến có 4 ô vuông, trong đó:</RightP>
            <Div className="d-flex justify-content-between">
                <Image src={require('../../images/boole/6_2_1.png').default} />
                <RightP>
                    - Ô được đánh số 1 để biểu diễn tiểu hạng có mặt trong hàm.<br />
                    - Các ô được cho là liền nhau nếu các tiểu hạng mà chúng biểu diễn chỉ khác nhau 1 biến.</RightP>
            </Div>

            <RightP><RightWordBold>Gom nhóm:<br /></RightWordBold>
                - Từ bảng Karnaugh &rarr; Tổ hợp các tiểu hạng mang biểu diễn là số 1.<br />
                - Các tổ hợp được gom phải là khối khả dĩ lớn nhất và số ô là 2<sup>n</sup> , với n = 1, 2.</RightP>
            {/* Ví dụ 1 */}
            <RightP><RightWordBold>Ví dụ 1:</RightWordBold>
                Tìm bảng Karnaugh cho F = xy + x<RightWordNot>y</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_2_2.png').default} />
            {/* Ví dụ 2 */}
            <RightP><RightWordBold>Ví dụ 2:</RightWordBold>
                Tìm bảng Karnaugh cho F = xy + <RightWordNot>x</RightWordNot>y + <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_2_3.png').default} />
        </>
    )
}
// 53
export const KarnaughBaBien = () => {
    return (
        <>
            <RightH3 id="6_3">Karnaugh ba biến</RightH3>
            <RightP>Bảng karnaugh 3 biến là 1 hình chữ nhật chia thành 8 ô.</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_3_1.png').default} />
            <RightP>• Sau khi có bảng Karnaugh, ta bắt đầu gom nhóm các tiểu hạng.<br />
                • Quy tắc tương tự Bảng Karnaugh 2 biến.</RightP>
            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Dùng bảng Karnaugh 3 biến để rút gọn tổng các tích sau<br />
                xy<RightWordNot>z</RightWordNot> + x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> +
                <RightWordNot>x</RightWordNot>yz +
                <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> +
                <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_3_2.png').default} />
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Dùng phương pháp Karnaugh tối thiểu hóa các hàm 3 biến sau:<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = xyz + x<span className='overline'>y</span>z + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z + <span className='overline'>xyz</span><br />
                    b. F = x<span className='overline'>y</span> + xyz + xy<span className='overline'>z</span> + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span><br />
                    c. F = xy<span className='overline'>z</span> + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z<br />
                    d. F = xyz + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span>
                </RightP>
            </Div>
        </>
    )
}
// 54
export const KarnaughBonBien = () => {
    return (
        <>
            <RightH3 id="6_4">Karnaugh bốn biến</RightH3>
            <RightP>Bảng gồm 16 ô vuông như sau:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_4_1.png').default} />

            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                Dùng bảng Karnaugh 4 biến để rút gọn tổng các tích sau<br />
                D = wxyz +
                wxy<RightWordNot>z</RightWordNot> +
                wx<RightWordNot>y</RightWordNot>z +
                w<RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> +
                w<RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z +
                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot>yz +
                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z +
                <RightWordNot>w</RightWordNot>x<RightWordNot>y</RightWordNot>z</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_4_2.png').default} />
            <RightP><RightWordBold>Phủ tối tiểu của một tập</RightWordBold>
                - Việc tìm tất cả các tổng chuẩn tắc không dư thừa của hàm Boole f, từ các tsc tối đại của f, là một vấn đề khá phức tạp.<br />
                - Trước hết, chúng ta xét bài toán tìm phủ tối tiểu của một tập như sau.<br />
                Phủ của tập X<br />
                Cho S = {'{'}X<sub>1</sub>, …, X<sub>n</sub>{'}'} là họ các tập con của X. S gọi là phủ của X nếu X = &#8899; X<sub>i</sub>.<br />
                Phủ tối tiểu của X<br />
                Giả sử S là một phủ của X. S gọi là phủ tối tiểu của X nếu với mọi i, S\X<sub>i</sub> không phủ X.</RightP>

            <RightP><RightWordBold>Ví dụ:</RightWordBold>
                - X = {'{'}a, b, c, d{'}'}<br />
                - A = {'{'}a, b{'}'}	 B = {'{'}c, d{'}'}<br />
                - C = {'{'}a, d{'}'} 	 D = {'{'}b, c{'}'}<br />
                - {'{'}A, B, C, D{'}'} phủ không tối tiểu.<br />
                - {'{'}A, B{'}'}, {'{'}C, D{'}'} là các phủ tối tiểu.<br />
                - {'{'}A, C, D{'}'} phủ không tối tiểu.<br />
                - {'{'}B, D{'}'} không phủ.</RightP>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Dùng phương pháp Karnaugh tối thiểu hóa các hàm 4 biến sau:<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = wxyz + wx<span className='overline'>y</span>z + wx<span className='overline'>yz</span> + w<span className='overline'>x</span>y<span className='overline'>z</span> + w<span className='overline'>xy</span>z<br />
                    b. F = wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    c. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>xy</span>z + w<span className='overline'>xyz</span> + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    d. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + w<span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>w</span>xyz + <span className='overline'>wx</span>yz + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z
                </RightP>
            </Div>
        </>
    )
}
// 55
export const TimCongThucDaThucToiThieu = () => {
    return (
        <>
            <RightH3 id="6_5">Thuật toán tìm công thức đa thức tối thiểu</RightH3>
            <RightP><RightWordBold className="ml-3">Gồm 5 bước:<br /></RightWordBold>
                Bước 1: Vẽ biểu đồ Karnaugh của f.<br />
                Bước 2: Xác định tất cả các tế bào lớn của kar(f).<br />
                Bước 3: Xác định các tế bào lớn nhất thiết phải chọn.<br />
                Ta nhất thiết phải chọn tế bào lớn T khi tồn tại một ô của kar(f) mà ô này chỉ nằm trong tế bào lớn T và không nằm trong bất kỳ tế bào lớn nào khác.<br />
                Bước 4: Xác định các phủ tối tiểu gồm các tế bào lớn:<br />
                • Nếu các tế bào lớn chọn được ở bước 3 đã phủ được kar(f) thì ta có duy nhất một phủ tối tiểu gồm các tế bào lớn của kar(f).<br />
                • Nếu các tế bào lớn chọn được ở bước 3 chưa phủ được kar(f) thì:<br />
                <span className="ml-3">
                    - Xét một ô chưa bị phủ, sẽ có ít nhất hai tế bào lớn chứa ô này, ta chọn một trong các tế bào lớn này.  Cứ tiếp tục như thế ta sẽ tìm được tất cả các phủ gồm các tế bào lớn của kar(f).<br /></span>
                <span className="ml-3">
                    - Loại bỏ các phủ không tối tiểu, ta tìm được tất cả các phủ tối tiểu gồm các tế bào lớn của kar(f).<br /></span>
                Bước 5: Xác định các công thức đa thức tối tiểu của f.<br />
                • Từ các phủ tối tiểu gồm các tế bào lớn của kar(f) tìm được ở bước 4 ta xác định được các công thức đa thức tương ứng của f.<br />
                • Loại bỏ các công thức đa thức mà có một công thức đa  thức nào đó thực sự đơn giản hơn chúng.<br />
                • Các công thức đa thức còn lại chính là các công thức đa thức tối tiểu của f.</RightP>
            <RightP><RightWordBold>Ví dụ 1: </RightWordBold>
                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot><br />
                Bước 1: Bảng Kar(f)<br />
                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_1.png').default} />

            <RightP>Bước 2: Xác định tất cả các tế bào lớn của f. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_2.png').default} />

            <RightP>Bước 3: Chọn tế bào lớn nhất thiết phải chọn: (Vì chúng chứa các các ô không nằm trong tế bào nào khác – minh hoạ với ô vàng)<br />
                - Chọn tế bào lớn thứ 1: x<br />
                - Chọn tế bào lớn thứ 2: yz</RightP>

            <RightP>Bước 4: Xác định họ phủ của các tế bào lớn:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_3.png').default} />
            <RightP>Ta thấy các tế bào chọn ở bước 3 đã phủ hết bảng<br />
                &rarr; đây là họ phủ tối thiểu gồm các tế bào <br />
                Kar(f): x &or; yz</RightP>

            <RightP>Bước 5: Ứng với họ phủ tối thiểu của tế bào lớn tìm được ta được duy nhất 1 công thức đa thức tối tiểu của f:<br />
                &rarr; f = x &or; yz</RightP>

            <RightP><RightWordBold>Ví dụ 2: </RightWordBold>
                Tìm các công thức đa thức tối thiểu của hàm f: <br />
                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or;
                xyzt &or;
                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 1: Bảng Kar(f)<br />
                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or;
                xyzt &or;
                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_4.png').default} />

            <RightP>Bước 2: Xác định các tế bào lớn</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_5.png').default} />
            <RightP>
                + Tế bào lớn thứ 1: <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot><br />
                + Tbào lớn thứ 2: <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                + Tế bào lớn thứ 3: <RightWordNot>y</RightWordNot>zt<br />
                + Tế bào lớn thú 4: xzt<br />
                + Tế bào lớn thứ 5: <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 3: Xác định các tế bào lớn nhất thiết phải chọn</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_6.png').default} />
            <RightP>
                - Có 3 ô chỉ nằm trong 1 tế bào lớn<br />
                - Các tế bào lớn nhất thiết phải chọn là<br />
                <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> + xzt + <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

            <RightP>Bước 4: Xác định họ phủ tối thiểu của các tế bào lớn:</RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/6_5_7.png').default} />
            <RightP>
                - Ta có họ phủ : <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt<br />
                - Ta thấy còn một ô chưa được phủ và ô đó nằm ở 1 trong 2 tế bào lớn.<br />
                - Ta có 2 cách chọn:<br />
                Cách chọn thứ 1: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                Cách chọn thứ 2: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>

            <RightP>Bước 5: Xác định công thức đa thức cực tiểu:<br />
                - Ta thấy 2 công thức đơn giản như nhau cho nên công thức đa thức tối thiểu của hàm f là:<br />
                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br />
                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>
        </>
    )
}
// 56
export const QuineMcClusky = () => {
    return (
        <>
            <RightH2 id="7">Phương pháp quine - McCluskey</RightH2>
            <RightH3 id="7_1">1. Dạng tổng chuẩn tắc thu gọn</RightH3>
            <RightP>
                <RightWordBold>Bước 1:</RightWordBold> Viết vào cột thứ nhất các biểu diễn của các nguyên nhân hạng n của hàm Boole F. Các biểu diễn được chia thành từng nhóm, các biểu diễn trong mỗi nhóm có số các ký hiệu 1 bằng nhau và các nhóm xếp theo thứ tự số các ký hiệu 1 tăng dần. <br />
                <RightWordBold>Bước 2:</RightWordBold> Lần lượt thực hiện tất cả các phép dán các biểu diễn trong nhóm i với các biểu diễn trong nhóm i+1 (i=1, 2, …). Biểu diễn nào tham gia ít nhất một phép dán sẽ được ghi nhận một dấu * bên cạnh. Kết quả dán được ghi vào cột tiếp theo. <br />
                <RightWordBold>Bước 3:</RightWordBold> Lặp lại Bước 2 cho cột kế tiếp cho đến khi không thu thêm được cột nào mới. Khi đó tất cả các biểu diễn không có dấu * sẽ cho ta tất cả các nguyên nhân nguyên tố của F. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/7_1.png').default} />
            <RightH3 id="7_2">2. Dạng tổng chuẩn tắc tối thiểu</RightH3>
            <RightP>
                <RightWordBold>Bước 1:</RightWordBold> Phát hiện tất cả các nguyên nhân nguyên tố cốt yếu. <br />
                <RightWordBold>Bước 2:</RightWordBold> Xoá tất cả các cột được phủ bởi các nguyên nhân nguyên tố cốt yếu.  <br />
                <RightWordBold>Bước 3:</RightWordBold> Trong bảng còn lại, xoá nốt những dòng không còn dấu + và sau đó nếu có hai cột giống nhau thì xoá bớt một cột. <br />
                <RightWordBold>Bước 4:</RightWordBold> Sau các bước trên, tìm một hệ S các nguyên nhân nguyên tố với số biến ít nhất phủ các cột còn lại. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/7_2.png').default} />
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Dùng phương pháp Quine-McClusKey tổi thiểu hóa các hàm sau<br />
                </RightP>
                <RightP className='ml-5'>
                    a. F = xyz + <span className='overline'>x</span>yz + x<span className='overline'>yz</span> + x<span className='overline'>y</span>z<br />
                    b. F = wxyz + wx<span className='overline'>y</span>z + wx<span className='overline'>yz</span> + w<span className='overline'>x</span>y<span className='overline'>z</span> + w<span className='overline'>xy</span>z<br />
                    c. F = wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    d. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>xy</span>z + w<span className='overline'>xyz</span> + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    e. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + w<span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>w</span>xyz + <span className='overline'>wx</span>yz + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                    f. F = <span className='overline'>wxy</span>zt + <span className='overline'>w</span>x<span className='overline'>y</span>zt + <span className='overline'>wx</span>yzt + w<span className='overline'>xy</span>zt + w<span className='overline'>x</span>yzt + <span className='overline'>w</span>xyzt + wxyzt
                </RightP>
            </Div>
        </>
    )
}
// 57
export const DangTongChuanTacThuGon = () => {
    return (
        <>
            <RightH3 id="7_1">Dạng tổng chuẩn tắc thu gọn</RightH3>
            <RightP>
                <RightWordBold>Bước 1:</RightWordBold> Viết vào cột thứ nhất các biểu diễn của các nguyên nhân hạng n của hàm Boole F. Các biểu diễn được chia thành từng nhóm, các biểu diễn trong mỗi nhóm có số các ký hiệu 1 bằng nhau và các nhóm xếp theo thứ tự số các ký hiệu 1 tăng dần. <br />
                <RightWordBold>Bước 2:</RightWordBold> Lần lượt thực hiện tất cả các phép dán các biểu diễn trong nhóm i với các biểu diễn trong nhóm i+1 (i=1, 2, …). Biểu diễn nào tham gia ít nhất một phép dán sẽ được ghi nhận một dấu * bên cạnh. Kết quả dán được ghi vào cột tiếp theo. <br />
                <RightWordBold>Bước 3:</RightWordBold> Lặp lại Bước 2 cho cột kế tiếp cho đến khi không thu thêm được cột nào mới. Khi đó tất cả các biểu diễn không có dấu * sẽ cho ta tất cả các nguyên nhân nguyên tố của F. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/7_1.png').default} />
        </>
    )
}
// 58
export const DangTongChuanTacToiThieu = () => {
    return (
        <>
            <RightH3 id="7_2">Dạng tổng chuẩn tắc tối thiểu</RightH3>
            <RightP>
                <RightWordBold>Bước 1:</RightWordBold> Phát hiện tất cả các nguyên nhân nguyên tố cốt yếu. <br />
                <RightWordBold>Bước 2:</RightWordBold> Xoá tất cả các cột được phủ bởi các nguyên nhân nguyên tố cốt yếu.  <br />
                <RightWordBold>Bước 3:</RightWordBold> Trong bảng còn lại, xoá nốt những dòng không còn dấu + và sau đó nếu có hai cột giống nhau thì xoá bớt một cột. <br />
                <RightWordBold>Bước 4:</RightWordBold> Sau các bước trên, tìm một hệ S các nguyên nhân nguyên tố với số biến ít nhất phủ các cột còn lại. </RightP>
            <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/7_2.png').default} />
        </>
    )
}
// 59
export const CacCongLogic = () => {
    return (
        <>
            <Div>
                <RightH2 id="8">Các cổng logic</RightH2>
                <RightP>
                    Phép <RightWordBold>cộng</RightWordBold> thể hiện qua hàm <RightWordBold>OR</RightWordBold><br />
                    Phép <RightWordBold>nhân</RightWordBold> thể hiện qua hàm <RightWordBold>AND</RightWordBold><br />
                    Phép <RightWordBold>phủ định</RightWordBold> thể hiện qua hàm <RightWordBold>NOT</RightWordBold>.
                </RightP>
                <RightP>Các phép tính trên khi áp dụng cho logic 0 và 1</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_1.png').default} />
                <RightP><RightWordBold>Các cổng cơ bản</RightWordBold></RightP>
                {/* AND */}
                <RightP><RightWordBold>- Cổng AND</RightWordBold></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_2.png').default} />
                <RightP>Đầu ra chỉ = 1 khi tất cả ngõ vào = 1</RightP>
                {/* OR */}
                <RightP><RightWordBold>- Cổng OR</RightWordBold></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_3.png').default} />
                <RightP>Đầu ra = 1 khi có 1 ngõ vào = 1</RightP>
                {/* NOT */}
                <RightP><RightWordBold>- Cổng NOT</RightWordBold></RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_4.png').default} />
                <RightP>Bù của giá trị đầu vào</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_5.png').default} />

                <RightP>Sự chuyển đổi giữa các cổng cơ bản sang cổng NAND</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_6.png').default} />

                <RightP>Sự chuyển đổi giữa các cổng cơ bản sang cổng NOR</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_7.png').default} />

                <RightP><RightWordBold>Ví dụ: </RightWordBold>Viết lại biểu thức logic sau từ mạch logic:</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_8.png').default} />
                <RightP>
                    Các bước thiết kế logic tổng hợp:<br />
                    - Bước 1: Đặt các biến cho ngõ vào và các hàm của ngõ ra tương ứng.<br />
                    - Bước 2: Thiết lập bảng chân trị cho ngõ ra và ngõ vào. <br />
                    - Bước 3: Viết biểu thức logic liên hệ giữa ngõ ra và các ngõ vào.<br />
                    - Bước 4: Tìm công thức đa thức tối tiểu của biểu thức logic vừa tìm được.<br />
                    - Bước 5: Từ biểu thức logic rút gọn chuyển sang mạch logic tương ứng.</RightP>
                <RightP><RightWordBold>Ví dụ:<br /></RightWordBold>
                    - Một ngôi nhà có 3 công tắc, người chủ nhà muốn bóng đèn sáng khi cả 3 công tắc đều hở, hoặc khi công tắc 1 và 2 đóng còn công tắc thứ 3 hở. Hãy thiết kế mạch logic thực hiện sao cho <RightWordBold>số cổng là ít nhất</RightWordBold>.</RightP>
                <RightP><RightWordBold>Giải:<br /></RightWordBold>
                    - Bước 1: <br />
                    Gọi 3 công tắc lần lượt là A, B, C. <br />
                    Bóng đèn là Y. <br />
                    Trạng thái công tắc đóng là logic 1, hở là 0.<br />
                    Trạng thái đèn sáng là logic 1 và tắt là 0.<br />
                    - Bước 2: <br />
                    Từ yêu cầu bài toán ta có bảng chân trị:</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_9.png').default} />

                <RightP>- Bước 3: Từ bảng chân trị ta có biểu thức logic ngõ ra <br />
                    Y = <RightWordNot>A</RightWordNot><RightWordNot>B</RightWordNot><RightWordNot>C</RightWordNot> + AB<RightWordNot>C</RightWordNot></RightP>

                <RightP>- Bước 4: Rút gọn biểu thức logic:<br />
                    Y = <RightWordNot>A</RightWordNot><RightWordNot>B</RightWordNot><RightWordNot>C</RightWordNot> + AB<RightWordNot>C</RightWordNot></RightP>

                <RightP>- Bước 5: Mạch logic tương ứng của biểu thức</RightP>
                <Image style={{ marginLeft: "80px", width: "80%" }} src={require('../../images/boole/8_10.png').default} />
                <RightP>- Ngoài ra, ta cũng có thể sử dụng cổng XOR cho bài toán như sau:</RightP>
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_11.png').default} />
                <Image style={{ marginLeft: "80px" }} src={require('../../images/boole/8_12.png').default} />
            </Div>
            <Div>
                <RightH2>Bài Tập</RightH2>
                <RightP>
                    Hãy vẽ mạch logic ứng với mỗi biểu thức Boole sau:<br />
                </RightP>
                <RightP className='ml-5'>
                    a. A<span className='overline'>B</span> + AB<span className='overline'>C</span><br />
                    b. <span className='overline'>A + BC</span> + B<br />
                    c. <span className='overline'>AB</span> + <span className='overline'>A + C</span><br />
                    d. (X + <span className='overline'>Y</span>)Z + <span className='overline'>X</span><br />
                    e. <span className='overline'>X</span>(<span className='overline'>Y + Z</span>)
                </RightP>
                <RightP>
                    Hãy xác định biểu thức Boole dành cho mỗi mạch ngắt chuyển như hình dưới đây:<br />
                </RightP>
                <Div>
                    <RightP>a.</RightP>
                    <Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/mach_a.jpg').default} />
                </Div>
                <Div>
                    <RightP>b.</RightP>
                    <Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/mach_b.jpg').default} />
                </Div>
            </Div>
        </>
    )
}
