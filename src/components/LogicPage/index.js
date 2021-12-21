import React, {useEffect, useState} from 'react'
import { Container, Title, LeftColumn, LeftH2, LeftH3, LeftH4, RightColumn, RightH2, RightH3, RightH4, RightP, Div, Image, RightWordBold, RightWordItalic } from '../DetailCoursesElements'
import { LGPageContainer } from './LogicPageElements';
import {FaCircle} from 'react-icons/fa'

const LogicPage = ({props}) => {
    // const [hint, setHint] = useState(false);
    // const isHint = () => {
    //     setHint(!hint);
    // }
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(props)
      }, [props]);
    return (
        <div style={{height: "100%"}}>
            <LGPageContainer />
            <Container>
                {/* Left Column */}
                <LeftColumn>
                    <LeftH2 activeClass="active"
                                to="1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1. Mệnh đề</LeftH2>
                        <LeftH3 activeClass="active"
                                to="1_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1.1 Định nghĩa</LeftH3>
                            <LeftH4 activeClass="active"
                                to="1_1_a"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>a. Ký hiệu</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_1_b"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>b. Chân trị</LeftH4>
                        <LeftH3 activeClass="active"
                                to="1_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1.2 Phân loại</LeftH3>
                            <LeftH4 activeClass="active"
                                to="1_2_a"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>a. Phức hợp</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_2_b"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>b. Sơ cấp</LeftH4>
                        <LeftH3 activeClass="active"
                                to="1_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1.3 Các phép toán</LeftH3>
                            <LeftH4 activeClass="active"
                                to="1_3_a"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>a. Phủ định</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_3_b"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>b. Hội</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_3_c"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>c. Tuyển</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_3_d"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>d. Kéo theo</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_3_e"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>e. Kéo theo hai chiều(Tương đương)</LeftH4>
                    <LeftH2 activeClass="active"
                                to="2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2. Biểu thức logic</LeftH2>
                        <LeftH3 activeClass="active"
                                to="2_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2.1 Định nghĩa</LeftH3>
                        <LeftH3 activeClass="active"
                                to="2_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2.2 Độ ưu tiên và bảng chân trị</LeftH3>
                        <LeftH3 activeClass="active"
                                to="2_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2.3 Tương đương logic</LeftH3>
                        <LeftH3 activeClass="active"
                                to="2_4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2.4 Các luật logic</LeftH3>
                    <LeftH2 activeClass="active"
                                to="3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3. Quy tắc suy diễn</LeftH2>
                        <LeftH3 activeClass="active"
                                to="3_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.1 Định nghĩa</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.2 Quy tắc khẳng định<br/>(Modus Ponens)</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.3 Quy tắc phủ định<br/>(Modus Tollens)</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.4 Quy tắc tam đoạn luận</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_5"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.5 Quy tắc phản chứng</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_6"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.6 Quy tắc chứng minh theo trường hợp</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_7"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.7 Quy tắc phản ví dụ</LeftH3>
                    <LeftH2 activeClass="active"
                                to="4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4. Vị từ, Lượng từ</LeftH2>
                        <LeftH3 activeClass="active"
                                to="4_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4.1 Định nghĩa</LeftH3>
                        <LeftH3 activeClass="active"
                                to="4_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4.2 Các phép toán trên vị từ</LeftH3>
                        <LeftH3 activeClass="active"
                                to="4_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4.3 Định lý</LeftH3>
                </LeftColumn>
                {/* Right Column */}
                <RightColumn>
                    <Title>CƠ SỞ LOGIC</Title>
                    {/* Mệnh đề Logic */}
                    <Div id="1">
                        <RightH2>1. Mệnh đề</RightH2>
                            <RightH3 id="1_1">1.1 Định nghĩa</RightH3>
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
                            <RightH3 id="1_2">1.2 Phân loại</RightH3>
                                <RightH4 id="1_2_a">a. Phức hợp</RightH4>
                                    <RightP>Phức hợp là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,…) hoặc trạng từ “không”.</RightP>
                                <RightH4 id="1_2_b">b. Sơ cấp</RightH4>
                                    <RightP>Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.</RightP>
                                    <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                    <RightP>- 2 là số nguyên tố.(Sơ cấp)</RightP>
                                    <RightP>- 2 không là số nguyên tố.(Sơ cấp)</RightP>
                                    <RightP>- 2 là số nguyên tố và là số lẻ.(Phức hợp)</RightP>
                                    <RightP>- An đang xem ti vi hay đang học bài.(Phức hợp)</RightP>
                            <RightH3 id="1_3">1.3 Các phép toán</RightH3>
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
                    {/* Biểu thức Logic */}
                    <Div>
                        <RightH2 id="2">2. Biểu thức logic</RightH2>
                            <RightH3 id="2_1">2.1 Định nghĩa</RightH3>
                                <RightP>Biểu thức logic được cấu tạo từ:</RightP>
                                <RightP>- Các mệnh đề (các hằng mệnh đề)</RightP>
                                <RightP>- Các biến mệnh đề p, q, r, …, tức là các biến lấy giá trị là các mệnh đề nào đó</RightP>
                                <RightP>- Các phép toán logic &#8514;, &#8743;, &#8744;, &rarr;, &harr; và dấu đóng mở ngoặc () để chỉ rõ thứ tự thực hiện của các phép toán.</RightP>
                                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                <RightP>- E(p,q) = &#8514;(&#8514;p &#8744; q)</RightP>
                                <RightP>- F(p,q,r) = (p &#8743; q) &rarr; &#8514;(q &#8744; r)</RightP>
                                {/* <RightP></RightP> */}
                            <RightH3 id="2_2">2.2 Độ ưu tiên và bảng chân trị</RightH3>
                                <RightP>- Ưu tiên mức 1: ()</RightP>
                                <RightP>- Ưu tiên mức 2: &#8514;</RightP>
                                <RightP>- Ưu tiên mức 3: &#8743;, &#8744;</RightP>
                                <RightP>- Ưu tiên mức 4: &rarr;, &harr;</RightP>
                                <RightP>Bảng chân trị của một biểu thức logic: là bảng liệt kê chân trị của biểu thức logic theo các trường hợp về chân trị của tất cả các biến mệnh đề trong biểu thức logic hay theo các bộ giá trị của bộ biến mệnh đề.</RightP>
                                <RightP><span className="font-weight-bold">Ví dụ:</span> Cho E(p,q,r) =(p &#8744; q) &rarr; r .</RightP>
                                <RightP>Ta có bảng chân trị sau:</RightP>
                                <Image style={{marginLeft: '90px'}} src={require('../../images/douutien_bangchantri.jpg').default} />
                                {/* <RightP></RightP> */}
                            <RightH3 id="2_3">2.3 Tương đương logic</RightH3>
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
                            <RightH3 id="2_4">2.4 Các luật logic</RightH3>
                                <RightP className="font-weight-bold">(1) Phủ định của phủ định: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>&#8514;&#8514;p &hArr; p</RightP>
                                <RightP className="font-weight-bold">(2) Qui tắc De Morgan: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>&#8514;(p &#8744; q) &hArr; &#8514;p &#8743; &#8514;q</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>&#8514;(p &#8743; q) &hArr; &#8514;p &#8744; &#8514;q</RightP>
                                <RightP className="font-weight-bold">(3) Luật giao hoán: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; q &hArr; q &#8744; p</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; q &hArr; q &#8743; p</RightP>
                                <RightP className="font-weight-bold">(4) Luật kết hợp: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>(p &#8744; q) &#8744; r &hArr; p &#8744; (q &#8744; r)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>(p &#8743; q) &#8743; r &hArr; p &#8743; (q &#8743; r)</RightP>
                                <RightP className="font-weight-bold">(5) Luật phân phối: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; (q &#8743; r) &hArr; (p &#8744; q) &#8743; (p &#8744; r)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; (q &#8744; r) &hArr; (p &#8743; q) &#8744; (p &#8743; r)</RightP>
                                <RightP className="font-weight-bold">(6) Luật lũy đẳng: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; p &hArr; p</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; p &hArr; p</RightP>
                                <RightP className="font-weight-bold">(7) Luật trung hòa: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; 0 &hArr; p</RightP>
                                <RightP> <FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; 1 &hArr; p</RightP>
                                <RightP className="font-weight-bold">(8) Luật về phần tử bù: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; &#8514;p &hArr; 0</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; &#8514;p &hArr; 1</RightP>
                                <RightP className="font-weight-bold">(9) Luật thống trị: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; 0 &hArr; 0</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; 1 &hArr; 1</RightP>
                                <RightP className="font-weight-bold">(10) Luật hấp thu: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8744; (p &#8743; q) &hArr; p</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &#8743; (p &#8744; q) &hArr; p</RightP>
                                <RightP className="font-weight-bold">(11) Luật về phép kéo theo: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>p &rarr; q &hArr; &#8514;p &#8744; q &hArr; &#8514;q &rarr; &#8514;p</RightP>
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
                    {/* Quy tắc suy diễn */}
                    <Div>
                        <RightH2 id="3">3. Quy tắc suy diễn</RightH2>
                            <RightH3 id="3_1">3.1 Định nghĩa</RightH3>
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
                                        P1 <br/>
                                        P2 <br/>
                                        &#8285; <br/>
                                        Pn <br/>
                                        &mdash; <br/>
                                        Q
                                    </RightWordItalic></RightP>
                                <RightP>Các biểu thức logic <RightWordItalic>P1, P2,…,Pn</RightWordItalic> được gọi là giả thiết (hay tiên đề), biểu thức <RightWordItalic>Q</RightWordItalic> được gọi là kết luận.</RightP>
                            <RightH3 id="3_2">3.2 Quy tắc khẳng định<br/>(Modus Ponens)</RightH3>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <RightP>[(p &rarr; q) &#8743; p] &rArr; q</RightP>
                                    <Image src={require('../../images/modus_ponens.jpg').default} />
                                </Div>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <Div>
                                    <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Học tốt thi đậu</RightP>
                                    <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Sinh viên A học tốt</RightP>
                                    </Div>
                                    <RightP>Suy ra: Sinh viên A  thi đậu</RightP>
                                </Div>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <Div>
                                    <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Nếu chuồn chuồn bay thấp thì mưa</RightP>
                                    <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Thấy chuồn chuồn bay thấp</RightP>
                                    </Div>
                                    <RightP>Suy ra: trời mưa</RightP>
                                </Div>
                                <RightP></RightP>
                            <RightH3 id="3_3">3.3 Quy tắc phủ định<br/>(Modus Tollens)</RightH3>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <RightP>[(p &rarr; q) &#8743; &#8514;q] &rArr; &#8514;p</RightP>
                                    <Image src={require('../../images/modus_tollens.jpg').default} />
                                </Div>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Nếu A đi học đầy đủ thì A đậu toán rời rạc.</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>A không đậu toán rời rạc.</RightP>     
                                <RightP style={{marginLeft: '150px'}}>Suy ra: A không đi học đầy đủ.</RightP>
                            <RightH3 id="3_4">3.4 Quy tắc tam đoạn luận</RightH3>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <RightP>[(p &rarr; q) &#8743; (q &rarr; r)] &rArr; (p &rarr; r)</RightP>
                                    <Image src={require('../../images/tamdoanluan.jpg').default} />
                                </Div>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Nếu trời mưa thì đường ướt</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Nếu đường ướt thì đường trơn</RightP>     
                                <RightP style={{marginLeft: '150px'}}>Suy ra: nếu trời mưa thì đường trơn.</RightP>
                            <RightH3 id="3_5">3.5 Quy tắc phản chứng</RightH3>
                                <RightP className="text-center">(p &rarr; q) &hArr; [(p &#8743; &#8514;q) &rarr; 0]</RightP>
                                <RightP><RightWordBold>Tổng quát:</RightWordBold></RightP>
                                <RightP><RightWordItalic>[(P1 &#8743; P2 &#8743; ... &#8743; Pn) &rarr; Q] &hArr; [(P1 &#8743; P2 &#8743; ... &#8743; Pn &#8743; &#8514;Q) &rarr; 0]</RightWordItalic></RightP>
                                <RightP>Để chứng minh vế trái là một hằng đúng, ta chứng minh nếu thêm phủ định của q vào các tiên đề thì được một mâu thuẫn.</RightP>
                                <Div className="d-flex justify-content-between" style={{width: '100%'}}>
                                    <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                    <Image style={{width: '35%'}} src={require('../../images/phanchung1.jpg').default} />
                                    <Image style={{width: '35%'}} src={require('../../images/phanchung2.jpg').default} />
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
                                    p &rarr; r <br/>
                                    p <br/>
                                    &#8514;r &rarr; q <br/>
                                    &mdash;&mdash;&mdash;&mdash; <br/>
                                    &#8278;q
                                    </RightWordItalic></RightP>
                                <RightP>Nhận xét: Ta sẽ tìm thấy p, q, r thỏa</RightP>
                                <RightP className="text-center"><RightWordItalic>
                                    p &rarr; r = 1<br/>
                                    p = 1<br/>
                                    &#8514;r &rarr; q = 1<br/>
                                    &mdash;&mdash;&mdash;&mdash;&mdash; <br/>
                                    &#8278;q = 0
                                </RightWordItalic></RightP>
                                <RightP>Dễ dàng tìm thấy một phản ví dụ:  p=1,q=0,r=1. <br/>Vậy suy luận đã cho là không đúng.</RightP>
                                <RightP><RightWordBold>Ví dụ: </RightWordBold>Ông Minh nói rằng nếu không được tăng lương thì ông ta sẽ nghỉ việc. Mặt khác, nếu ông ấy nghỉ việc và vợ ông ấy bị mất việc thì phải bán xe.Biết rằng nếu vợ ông Minh hay  đi làm trễ thì trước sau gì cũng sẽ bị mất việc và cuối cùng ông Minh đã được tăng lương. <br/>Suy ra nếu ông Minh không bán xe thì vợ ông ta đã không đi làm trễ.</RightP>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <Div>
                                        <RightP>p: ông Minh được tăng lương. <br/>
                                        q: ông Minh nghỉ việc.<br/>
                                        r: vợ ông Minh mất việc.<br/>
                                        s: gia đình phải bán xe.<br/>
                                        t: vợ ông hay đi làm trể. </RightP>
                                    </Div>
                                    <Image src={require('../../images/phanvidu.jpg').default}/>
                                </Div>

                    </Div>
                    {/* Vị từ lượng từ */}
                    <Div>
                        <RightH2 id="4">4. Vị từ, Lượng từ</RightH2>
                            <RightH3 id="4_1">4.1 Định nghĩa</RightH3>
                                <RightP>Vị từ là một khẳng định p(x,y,..), trong đó x,y...là các biến thuộc tập hợp A, B,.. cho trước sao cho: <br/>
                                - Bản thân p(x,y,..) không phải là mệnh đề.<br/>
                                - Nếu thay x,y,.. thành giá trị cụ thể thì p(x,y,..) là mệnh đề.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold> <br/>
                                - p(n) =  “n +1 là số nguyên tố” <br/>
                                - q(x,y) = “x + y = 1”</RightP>
                            <RightH3 id="4_2">4.2 Các phép toán trên vị từ</RightH3>
                                <RightP>Cho trước các vị từ p(x), q(x) theo một biến xA. Khi ấy, ta cũng có các phép toán tương ứng như trên mệnh đề: </RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Phủ định: &#8514;p(x)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Phép nối liền: p(x) &#8743; q(x)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Phép nối rời: p(x) &#8744; q(x)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Phép kéo theo: p(x) &rarr; q(x)</RightP>
                                <RightP><FaCircle style={{fontSize: '10px', marginRight: '10px', marginLeft: '30px'}}/>Phép kéo theo hao chiều: p(x) &harr; q(x)</RightP>
                                <RightP>
                                Cho p(x) là một vị từ theo một biến xác định trên A. Các mệnh đề lượng từ hóa của p(x) được định nghĩa như sau: <br/>
                                - Mệnh đề “Với mọi x thuộc A, p(x) ”, kí hiệu: “&forall;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi p(a) luôn đúng với mọi giá trị a &isin; A. &forall; đgl lượng từ phổ dụng.<br/>
                                - Mệnh đề “Tồn tại (có ít nhất một) x thuộc A, p(x)” kí hiệu “&exist;x &isin; A, p(x)” là mệnh đề đúng khi và chỉ khi có ít nhất một giá trị x = a’&isin; A nào đó sao cho mệnh đề p(a’) đúng. &exist; đgl lượng từ tồn tại.
                                </RightP>
                                <RightP>
                                Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Ta định nghĩa các mệnh đề lượng từ hóa của p(x, y) như sau: </RightP>
                                <RightP className="text-center">
                                “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&forall;y&isin;B, p(x, y))” <br/>
                                “&forall;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&forall;x&isin;A, (&exist;y&isin;B, p(x, y))”<br/>
                                “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&forall;y&isin;B, p(x, y))”<br/>
                                “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &equiv; “&exist;x&isin;A, (&exist;y&isin;B, p(x, y))”
                                </RightP>
                            <RightH3 id="4_3">4.3 Định lý</RightH3>
                                <RightP>Cho p(x, y) là một vị từ theo hai biến x, y xác định trên AxB. Khi đó:</RightP>
                                <RightP className="text-center">
                                “&forall;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &forall;x&isin;A, p(x, y)” <br/>
                                “&exist;x&isin;A, &exist;y&isin;B, p(x, y)” &hArr; “&exist;y&isin;B, &exist;x&isin;A, p(x, y)” <br/>
                                “&exist;x&isin;A, &forall;y&isin;B, p(x, y)” &hArr; “&forall;y&isin;B, &exist;x&isin;A, p(x, y)”
                                </RightP>
                                <RightP>Phủ định của mệnh đề lượng từ hóa vị từ p(x,y,..) có được bằng cách: thay &forall; thành &exist;, thay &exist; thành &forall;, và p(x,y,..) thành &#8514;p(x,y,..).</RightP>
                                <Div style={{width: '100%'}}>
                                    <RightP>Với vị từ theo 1 biến ta có: </RightP>
                                    <Image style={{width: '85%', marginLeft: '90px'}} src={require('../../images/ltvt1.jpg').default} />
                                </Div>
                                <Div style={{width: '100%'}}>
                                    <RightP>Với vị từ theo 2 biến ta có: </RightP>
                                    <Image style={{width: '85%', marginLeft: '90px'}} src={require('../../images/ltvt2.jpg').default} />
                                </Div>
                    </Div>
                </RightColumn>
            </Container>
        </div>
    )
}

export default LogicPage
