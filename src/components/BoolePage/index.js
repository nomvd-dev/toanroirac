import React from 'react'
import { BoolePageContainer } from './BoolePageElements'
import { Container, Title, LeftColumn, LeftH2, LeftH3, LeftH4, RightColumn, RightH2, RightH3, RightH4, RightP, Div, Image, RightWordBold, RightWordItalic } from '../DetailCoursesElements'
import {FaCircle} from 'react-icons/fa'

const BoolePage = () => {
    return (
        <>
            <BoolePageContainer />
            <Container>
                {/* Left Column */}
                <LeftColumn>
                    <LeftH2 activeClass="active"
                                to="1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1. Đại số logic B</LeftH2>
                    <LeftH2 activeClass="active"
                                to="2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2. Một số phép toán 2 ngôi</LeftH2>
                    <LeftH2 activeClass="active"
                                to="3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3. Đại số Boole</LeftH2>
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
                                duration={500}>3.2 Các phép toán logic</LeftH3>
                    <LeftH2 activeClass="active"
                                to="4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4. Hàm Boole</LeftH2>
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
                                duration={500}>4.2 Tích sơ cấp, các phép toán trên hàm boole</LeftH3>
                        <LeftH3 activeClass="active"
                                to="4_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4.3 Biểu thức boole</LeftH3>
                        <LeftH3 activeClass="active"
                                to="4_4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>4.4 Dạng nối rời chính tắc</LeftH3>
                    <LeftH2 activeClass="active"
                                to="5"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>5. Công thức đa thức tối thiểu</LeftH2>
                        <LeftH3 activeClass="active"
                                to="5_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>5.1 Đơn giản hơn</LeftH3>
                        <LeftH3 activeClass="active"
                                to="5_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>5.2 Đơn giản như nhau</LeftH3>
                        <LeftH3 activeClass="active"
                                to="5_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>5.3 Công thức đa thức tối thiểu</LeftH3>
                    <LeftH2 activeClass="active"
                                to="6"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6. Biểu đồ Karnaugh của hàm boole</LeftH2>
                        <LeftH3 activeClass="active"
                                to="6_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6.1 Bản đồ Karnaugh</LeftH3>
                        <LeftH3 activeClass="active"
                                to="6_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6.2 Karnaugh hai biến</LeftH3>
                        <LeftH3 activeClass="active"
                                to="6_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6.3 Karnaugh ba biến</LeftH3>
                        <LeftH3 activeClass="active"
                                to="6_4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6.4 Karnaugh bốn biến</LeftH3>
                        <LeftH3 activeClass="active"
                                to="6_5"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>6.5 Thuật toán tìm công thức đa thức tối thiểu</LeftH3>
                    <LeftH2 activeClass="active"
                                to="7"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>7. Phương pháp Quine - McCluskey</LeftH2>
                        <LeftH3 activeClass="active"
                                to="7_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>7.1 Dạng tổng chuẩn tắc thu gọn</LeftH3>
                        <LeftH3 activeClass="active"
                                to="7_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>7.2 Dạng tổng chuẩn tắc tối thiểu</LeftH3>
                    <LeftH2 activeClass="active"
                                to="8"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>8. Các cổng logic</LeftH2>
                </LeftColumn>
                {/* Right Column */}
                <RightColumn>
                    <Title>Đại số Boole</Title>
                    {/* Đại số logic B */}
                    <Div id="1">
                        <RightH2>1. Đại số logic B</RightH2>
                            <RightP>Trên tập logic B = {'{'}0, 1{'}'} xét các phép toán logic <br/>
                            &and; (tích Boole)		x &and; y<br/>
                            &or; (tổng Boole)		x &or; y<br/>
                            &#9489; (phép bù)		&#9489;x<br/>
                            trong đó x, y &isin; B gọi là các biến logic hoặc biến Boole.</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/1.png').default} />
                    </Div>
                    {/* Một số phép toán hai ngôi */}
                    <Div>
                        <RightH2 id="2">2. Một số phép toán hai ngôi</RightH2>
                            <RightP>
                            1. Tổng modulo 2, x + y<br/>
                            2. Kéo theo x &rarr; y<br/>
                            3. Tương đương x &harr; y<br/>
                            4. Vebb (NOR)  x &darr; y<br/>
                            5. Sheffer (NAND) x &uarr; y</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/2.png').default} />
                            {/* <RightP></RightP> */}
                    </Div>
                    {/* Đại số boole */}
                    <Div>
                        <RightH2 id="3">3. Đại số boole</RightH2>
                            <RightH3 id="3_1">3.1 Định nghĩa</RightH3>
                                <RightP>Cho tập A có ít nhất 2 phần tử, trong đó có 2 phần tử đặc biệt được ký hiệu là 0 và 1. Trên A xét các phép toán 2 – ngôi &and; và &or;, và phép toán 1 – ngôi <sup>/</sup><br/>
                                Ký hiệu là (A, &and;, &or;, <sup>/</sup>, 0, 1)</RightP>
                            <RightH3 id="3_2">3.2 Các phép toán logic</RightH3>
                            {/* Giao hoán */}
                                <RightP><RightWordBold>- Giao hoán:</RightWordBold></RightP>
                                <RightP>&forall; a, b &isin; A:<br/>
                                a &or; b = b &or; a<br/>
                                a &and; b = b &and; a</RightP>
                                {/* Kết hợp */}
                                <RightP><RightWordBold>- Kết hợp:</RightWordBold></RightP>
                                <RightP>&forall; a, b, c &isin; A:<br/>
                                (a &or; b) &or; c = a &or; (b &or; c)<br/>
                                (a &and; b) &and; c = a &and; (b &and; c)</RightP>
                                {/* Phân phối */}
                                <RightP><RightWordBold>- Phân phối:</RightWordBold></RightP>
                                <RightP>&forall; a, b, c &isin; A:<br/>
                                a &or; (b &and; c) = (a &or; b) &and; (a &or; c)<br/>
                                a &and; (b &or; c) = (a &and; b) &or; (a &and; c)</RightP>
                                {/* Phần tử trung hòa */}
                                <RightP><RightWordBold>- Phần tử trung hòa:</RightWordBold></RightP>
                                <RightP>Trong A tồn tại phần tử 0 và 1: &forall; a &isin; A:<br/>
                                a &and; 1 = 1 &and; a = a<br/>
                                a &or; 0 = 0 &or; a = a</RightP>
                                {/* Phần tử bù */}
                                <RightP><RightWordBold>- Phần tử bù:</RightWordBold></RightP>
                                <RightP>&forall; a &isin; A, tồn tại duy nhất phần tử bù <span style={{borderTop: "1px solid #000"}}>a</span> sao cho:<br/>
                                a &and; <span style={{borderTop: "1px solid #000"}}>a</span> = 0<br/>
                                a &or; <span style={{borderTop: "1px solid #000"}}>a</span> = 1</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/3_2.png').default} />
                    </Div>
                    {/* Hàm Boole */}
                    <Div>
                        <RightH2 id="4">4. Hàm Boole</RightH2>
                            <RightH3 id="4_1">4.1 Định nghĩa</RightH3>
                                <RightP>
                                    - Ánh xạ f: B<sup>n</sup> &rarr;B gọi là một hàm Boole n biến.<br/>
                                    - Hàm đồng nhất bằng 1 ký hiệu là 1, hàm đồng nhất bằng 0 ký hiệu là 0. Tập tất cả các hàm Boole n – biến ký hiệu là F<sub>n</sub>.</RightP>
                                <RightP>Cho f và g là hai hàm Boole n biến. Chúng ta có các định nghĩa như sau:<br/>
                                1. (f &and; g)(x<sub>1</sub>, …, x<sub>n</sub>) = f(x<sub>1</sub>, …, x<sub>n</sub>) &and; g(x<sub>1</sub>, …, x<sub>n</sub>)<br/>
                                2. (f &or; g)(x<sub>1</sub>, …, x<sub>n</sub>) = f(x<sub>1</sub>, …, x<sub>n</sub>) &or; g(x<sub>1</sub>, …, x<sub>n</sub>)<br/>
                                3. f<sub>/</sub>(x<sub>1</sub>, …, x<sub>n</sub>) = (f(x<sub>1</sub>, …, x<sub>n</sub>))<br/>
                                với mọi x1, …, xn.</RightP>
                                <RightP>
                                - Ta có F<sub>n</sub> cùng các phép toán này lập thành một đại số Boole.<br/> 
                                - Ngoài ra còn có:<br/> 
                                f &le; g &hArr; f &or; g = g &hArr; f &and; g = f<br/>
                                trong đó f &le; g nếu <br/>
                                f(x<sub>1</sub>, …, x<sub>n</sub>) &le; g(x<sub>1</sub>, …, x<sub>n</sub>)<br/>
                                Cách thông thường nhất để xác định một hàm Boole là dùng bảng giá trị.</RightP>
                                <RightP><RightWordItalic>Hàm Boole hai biến</RightWordItalic></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/4_1.png').default} />
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP>
                                - Xét kết quả f trong việc thông qua một quyết định dựa vào 3 phiếu bầu x, y, z: <br/> 
                                1.	Mỗi phiếu chỉ lấy một trong hai giá trị:<br/> 
                                1 (tán thành) hoặc 0 (bác bỏ).<br/>
                                2.	Kết quả f: <br/> 
                                - là 1 (thông qua quyết định) nếu được đa số phiếu tán thành.<br/>
                                - là 0 (không thông qua quyết định) nếu đa số phiếu bác bỏ.<br/>
                                - Khi đó f là hàm Bool theo 3 biến x,y,x có bảng chân trị như sau:</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/4_1_2.png').default} />
                                <RightP>
                                Chúng ta cũng có thể xác định hàm Boole bằng một biểu thức Boole. Đó là một biểu thức gồm các biến Boole và các phép toán &and; (hội), &or; (tuyển), / (phép lấy bù).<br/>
                                <RightWordItalic>Mỗi biểu thức Boole cũng được xem như một hàm Boole.</RightWordItalic></RightP>

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
        </>
    )
}

export default BoolePage
