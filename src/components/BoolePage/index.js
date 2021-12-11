import React from 'react'
import { BoolePageContainer } from './BoolePageElements'
import { Container, Title, LeftColumn, LeftH2, LeftH3, RightColumn, RightH2, RightH3, RightP, Div, Image, RightWordBold, RightWordItalic, RightWordNot } from '../DetailCoursesElements';
// import {FaCircle} from 'react-icons/fa'

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
                                duration={500}>2. Một số phép toán hai ngôi</LeftH2>
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
                                - Chúng ta cũng có thể xác định hàm Boole bằng một biểu thức Boole. Đó là một biểu thức gồm các biến Boole và các phép toán &and; (hội), &or; (tuyển), / (phép lấy bù).<br/>
                                <RightWordItalic>Mỗi biểu thức Boole cũng được xem như một hàm Boole.</RightWordItalic></RightP>

                            <RightH3 id="4_2">4.2 Tích sơ cấp, các phép toán trên hàm boole</RightH3>
                                <RightP>
                                - Biến x gọi là biến Boole nếu x chỉ nhận một trong hai giá trị 0/1.<br/>
                                - Giả sử x là một biến Boole. Khi đó ký hiệu x<sup>1</sup> = x, x<sup>0</sup> = &#9488;x.<br/>
                                <RightWordBold>Các phép toán trên hàm boole</RightWordBold></RightP>
                                {/* Phép cộng boole */}
                                <RightP><RightWordBold>• Phép cộng Boole &or;:</RightWordBold></RightP>
                                <RightP>
                                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br/>
                                f &or; g = f + g - fg<br/>
                                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br/>
                                &rarr; (f &or; g)(x) = f(x) + g(x) – f(x)g(x)</RightP>
                                {/* Phép nhân boole */}
                                <RightP><RightWordBold>• Phép cộng Boole &and;:</RightWordBold></RightP>
                                <RightP>
                                Với f, g &isin; F<sub>n</sub>, ta định nghĩa tổng Boole của f và g:<br/>
                                f &and; g = fg<br/>
                                &forall; x = (x<sub>1</sub>, x<sub>2</sub>,…, x<sub>n</sub> ) &isin; B<sub>n</sub>,<br/>
                                &rarr; (f &and; g)(x) = f(x)g(x)</RightP>
                                {/* Phép lấy phần bù */}
                                <RightP><RightWordBold>• Phép lấy phần bù:</RightWordBold></RightP>
                                <RightP><span style={{borderTop: "1px solid #000"}}>f</span> = 1 - f</RightP>
                            <RightH3 id="4_3">4.3 Biểu thức Boole</RightH3>
                                <RightP>
                                - Là một biểu thức được tạo bởi các biến và các phép toán Boole.<br/>
                                VD: E= (x &and; y &and; z) &or; (z &and; <span style={{borderTop: "1px solid #000"}}>y</span>)<br/>
                                - Để dễ đọc hơn, người ta có thể viết:<br/>
                                E = xyz + z<span style={{borderTop: "1px solid #000"}}>y</span></RightP>
                            <RightH3 id="4_4">4.4 Dạng nối rời chính tắc</RightH3>
                                <RightP>Xét tập hợp các hàm Boole n biến F<sub>n</sub> theo n biến x<sub>1</sub>, x<sub>2</sub>, …,x<sub>n</sub>.</RightP>
                                <RightP>- Mỗi hàm Boole x<sub>i</sub> hay <span style={{borderTop: "1px solid #000"}}>x<sub>i</sub></span> được gọi là một từ đơn.<br/>
                                - Đơn thức là tích khác không của một số hữu hạn từ đơn.<br/>
                                - Từ tối tiểu (đơn thức tối tiểu) là tích khác không của đúng n từ đơn.<br/>
                                - Công thức đa thức là công thức biểu diễn hàm Boole thành tổng của các đơn thức.<br/>
                                - Dạng nối rời chính tắc là công thức biểu diễn hàm Boole thành tổng của các từ tối tiểu.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP>Xét hàm boole, với 3 biến: x, y, z<br/>
                                x, y, z, <RightWordNot>x</RightWordNot>, <RightWordNot>y</RightWordNot>, <RightWordNot>z</RightWordNot> là các từ đơn.<br/>
                                xy, yz là đơn thức<br/>
                                xy<RightWordNot>z</RightWordNot> là từ tối tiểu<br/>
                                E = xy + yz là một công thức đa thức<br/>
                                Và F = xyz + <RightWordNot>x</RightWordNot> <RightWordNot>y</RightWordNot> <RightWordNot>z</RightWordNot> là một dạng nối rời chính tắc</RightP>
                                <RightP>
                                Cho f &isin; F<sub>n</sub>, f có thể viết dưới dạng sau:<br/>
                                f = u<sub>1</sub> &or; u<sub>2</sub> &or; u<sub>3</sub> &or; ... &or;  u<sub>i</sub><br/>
                                Với u<sub>i</sub>  là các đơn thức tối tiểu bậc n (i = 1, …, n).<br/>
                                được gọi là dạng nối rời chính tắc của f.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP>
                                - Trong F<sub>4</sub> có dạng biểu diễn sau đây:<br/>
                                f(x,y,z,t) = x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot>t  ∨ <RightWordNot>x</RightWordNot>yzt ∨ xy<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot><br/>
                                ⇒ f có dạng nối rời chính tắc của hàm Bool.</RightP>
                                <RightP><RightWordBold>Có 2 cách để xác định dạng nối rời chính tắc một hàm Bool:</RightWordBold></RightP>
                                {/* Cach 1 */}
                                <RightP><RightWordBold>Cách 1:</RightWordBold>Bổ sung từ đơn còn thiếu vào các đơn thức.</RightP>
                                <RightP>
                                - Bước 1: Khai triển hàm Bool thành tổng của các đơn thức.<br/>
                                - Bước 2: Với mỗi đơn thức thu được ở bước 1, ta nhân đơn thức đó với các tổng dạng với xi là những từ đơn bị thiếu trong đơn thức đó.<br/>
                                - Bước 3: Tiếp tục khai triển hàm thu được ở bước 2 và loại bỏ những đơn thức bị trùng. Công thức đa thức thu được chính là dạng nối rời chính tắc của hàm Bool ban đầu.</RightP>
                                <RightP><RightWordBold>Ví dụ: </RightWordBold>Trong F<sub>3</sub> tìm dạng nối rời chính tắc</RightP>
                                <RightP>
                                f(x,y,z) = <RightWordNot>x</RightWordNot> &or; <RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br/>
                                = <RightWordNot>x</RightWordNot>(y &or; <RightWordNot>y</RightWordNot>).(z &or; <RightWordNot>z</RightWordNot>) &or; (<RightWordNot>x</RightWordNot> &or; x)<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br/>
                                = <RightWordNot>x</RightWordNot>yz &or; <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> ̅&or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z &or; x<RightWordNot>y</RightWordNot>z &or; xy<RightWordNot>z</RightWordNot><br/>
                                &rArr; f có dạng nối rời chính tắc của hàm Bool.</RightP>
                                {/* Cach 2 */}
                                <RightP><RightWordBold>Cách 2:</RightWordBold>Dùng bảng chân trị. Để ý đến các vector boole trong bảng chân trị mà tại đó f = 1.</RightP>
                                <RightP>Tại đó Vector bool thứ n là u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub> và f(u<sub>1</sub>, u<sub>2</sub>, …, u<sub>n</sub>) = 1</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Cho f(x,y) = x &or; <RightWordNot>y</RightWordNot>. <br/>
                                Tìm biểu thức dạng nối rời chính tắc của f.</RightP>
                                <Div className="d-flex justify-content-between">
                                        <RightP>Lập bảng chân trị của f:</RightP>
                                        <Image src={require('../../images/boole/4_4.png').default} />
                                </Div>
                                <RightP>Các thể hiển làm cho f = 1 là 00, 10, 11.<br/>
                                &rarr; Lập được các từ tối tiểu tương ứng. <br/>
                                Vậy dạng nối rời chính tắc của f là f(x,y) = <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot> &or; x<RightWordNot>y</RightWordNot> &or; xy.</RightP>

                    </Div>
                    {/* 5. Công thức đa thức tối thiểu */}
                    <Div>
                        <RightH2 id="5">5. Công thức đa thức tối thiểu</RightH2>
                            <RightH3 id="5_1">5.1 Đơn giản hơn</RightH3>
                                <RightP>Cho  hai công thức đa thức của một hàm Boole:<br/>
                                F = m<sub>1</sub> &or; m<sub>2</sub> &or; m<sub>3</sub> &or; ........ m<sub>k</sub><br/>
                                G = M<sub>1</sub> &or; M<sub>2</sub> &or; M<sub>3</sub> &or; ........ M<sub>l</sub><br/>
                                Ta nói rằng công thức F đơn giản hơn công thức G nếu tồn tại đơn ánh h:<br/>
                                {'{'}1, 2, …, k{'}'} &rarr; {'{'}1, 2, …, l{'}'} sao cho với mọi i &isin; {'{'}1, 2, …, k{'}'} thì số từ đơn của m<sub>i</sub> không nhiều hơn số từ đơn của M<sub>h(i)</sub>.</RightP>
                            <RightH3 id="5_2">5.2 Đơn giản như nhau</RightH3>
                                <RightP>Nếu F đơn giản hơn G và G đơn giản hơn F thì ta nói F và G <RightWordBold>đơn giản như nhau</RightWordBold>.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>.</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/5_2_1.png').default} />
                            <RightH3 id="5_3">5.3 Công thức đa thức tối thiểu</RightH3>
                                <RightP>Công thức F của hàm Boole f được gọi là <RightWordBold>Công thức đa thức tối tiểu</RightWordBold> nếu với bất kỳ công thức G của f mà đơn giản hơn F thì F và G đơn giản như nhau.</RightP>
                    </Div>
                    {/* 6. Biểu đồ Karnaugh của hàm boole */}
                    <Div>
                        <RightH2 id="6">6. Biểu đồ Karnaugh của hàm boole</RightH2>
                            <RightH3 id="6_1">6.1 Bản đồ Karnaugh</RightH3>
                                <RightP>Sử dụng bảng Karnaugh là phương pháp xác định công thức đa thức tối tiểu.<br/>
                                Quy tắc gom nhóm:<br/>
                                - Gom các tiểu hạng mang biểu diễn là số 1.<br/>
                                - Khi gom 2<sup>n</sup> Ô kế cận sẽ loại được n biến. Những biến bị loại là những biến khi ta đi vòng qua các ô kế cận mà giá trị của chúng thay đổi.<br/>
                                - Các vòng phải được gom sao cho số ô có thể vào trong vòng là lớn nhất và để đạt được điều đó, thường ta phải gom cả những ô đã gom vào trong các vòng khác.<br/>
                                - Vòng gom phải là 1 hình chữ nhật.</RightP>
                            <RightH3 id="6_2">6.2 Karnaugh hai biến</RightH3>
                                <RightP>
                                - Đối với hàm boole hai biến x, y:<br/>
                                - Bảng karnaugh 2 biến có 4 ô vuông, trong đó:</RightP>
                                <Div className="d-flex justify-content-between">
                                        <Image src={require('../../images/boole/6_2_1.png').default} />
                                        <RightP>
                                        - Ô được đánh số 1 để biểu diễn tiểu hạng có mặt trong hàm.<br/>
                                        - Các ô được cho là liền nhau nếu các tiểu hạng mà chúng biểu diễn chỉ khác nhau 1 biến.</RightP>
                                </Div>

                                <RightP><RightWordBold>Gom nhóm:<br/></RightWordBold>
                                - Từ bảng Karnaugh &rarr; Tổ hợp các tiểu hạng mang biểu diễn là số 1.<br/>
                                - Các tổ hợp được gom phải là khối khả dĩ lớn nhất và số ô là 2<sup>n</sup> , với n = 1, 2.</RightP>
                                {/* Ví dụ 1 */}
                                <RightP><RightWordBold>Ví dụ 1:</RightWordBold>
                                Tìm bảng Karnaugh cho F = xy + x<RightWordNot>y</RightWordNot></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_2_2.png').default} />
                                {/* Ví dụ 2 */}
                                <RightP><RightWordBold>Ví dụ 2:</RightWordBold>
                                Tìm bảng Karnaugh cho F = xy + <RightWordNot>x</RightWordNot>y + <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_2_3.png').default} />
                            <RightH3 id="6_3">6.3 Karnaugh ba biến</RightH3>
                                <RightP>Bảng karnaugh 3 biến là 1 hình chữ nhật chia thành 8 ô.</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_3_1.png').default} />
                                <RightP>• Sau khi có bảng Karnaugh, ta bắt đầu gom nhóm các tiểu hạng.<br/>
                                • Quy tắc tương tự Bảng Karnaugh 2 biến.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Dùng bảng Karnaugh 3 biến để rút gọn tổng các tích sau<br/>
                                xy<RightWordNot>z</RightWordNot> + x<RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot> + 
                                <RightWordNot>x</RightWordNot>yz + 
                                <RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> + 
                                <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_3_2.png').default} />
                            <RightH3 id="6_4">6.4 Karnaugh bốn biến</RightH3>
                                <RightP>Bảng gồm 16 ô vuông như sau:</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_4_1.png').default} />

                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Dùng bảng Karnaugh 4 biến để rút gọn tổng các tích sau<br/>
                                D = wxyz + 
                                wxy<RightWordNot>z</RightWordNot> + 
                                wx<RightWordNot>y</RightWordNot>z +
                                w<RightWordNot>x</RightWordNot>y<RightWordNot>z</RightWordNot> + 
                                w<RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z + 
                                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot>yz + 
                                <RightWordNot>w</RightWordNot><RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z +
                                <RightWordNot>w</RightWordNot>x<RightWordNot>y</RightWordNot>z</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_4_2.png').default} />
                                <RightP><RightWordBold>Phủ tối tiểu của một tập</RightWordBold>
                                - Việc tìm tất cả các tổng chuẩn tắc không dư thừa của hàm Boole f, từ các tsc tối đại của f, là một vấn đề khá phức tạp.<br/> 
                                - Trước hết, chúng ta xét bài toán tìm phủ tối tiểu của một tập như sau.<br/>
                                Phủ của tập X<br/>
                                Cho S = {'{'}X<sub>1</sub>, …, X<sub>n</sub>{'}'} là họ các tập con của X. S gọi là phủ của X nếu X = &#8899; X<sub>i</sub>.<br/>
                                Phủ tối tiểu của X<br/>
                                Giả sử S là một phủ của X. S gọi là phủ tối tiểu của X nếu với mọi i, S\X<sub>i</sub> không phủ X.</RightP>

                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                - X = {'{'}a, b, c, d{'}'}<br/>
                                - A = {'{'}a, b{'}'}	 B = {'{'}c, d{'}'}<br/>
                                - C = {'{'}a, d{'}'} 	 D = {'{'}b, c{'}'}<br/>
                                - {'{'}A, B, C, D{'}'} phủ không tối tiểu.<br/>
                                - {'{'}A, B{'}'}, {'{'}C, D{'}'} là các phủ tối tiểu.<br/>
                                - {'{'}A, C, D{'}'} phủ không tối tiểu.<br/>
                                - {'{'}B, D{'}'} không phủ.</RightP>
                            <RightH3 id="6_5">6.5 Thuật toán tìm công thức đa thức tối thiểu</RightH3>
                                <RightP><RightWordBold className="ml-3">Gồm 5 bước:<br/></RightWordBold>
                                Bước 1: Vẽ biểu đồ Karnaugh của f.<br/>
                                Bước 2: Xác định tất cả các tế bào lớn của kar(f).<br/>
                                Bước 3: Xác định các tế bào lớn nhất thiết phải chọn.<br/>
                                Ta nhất thiết phải chọn tế bào lớn T khi tồn tại một ô của kar(f) mà ô này chỉ nằm trong tế bào lớn T và không nằm trong bất kỳ tế bào lớn nào khác.<br/>
                                Bước 4: Xác định các phủ tối tiểu gồm các tế bào lớn:<br/>
                                • Nếu các tế bào lớn chọn được ở bước 3 đã phủ được kar(f) thì ta có duy nhất một phủ tối tiểu gồm các tế bào lớn của kar(f).<br/>
                                • Nếu các tế bào lớn chọn được ở bước 3 chưa phủ được kar(f) thì:<br/>
                                <span className="ml-3">
                                - Xét một ô chưa bị phủ, sẽ có ít nhất hai tế bào lớn chứa ô này, ta chọn một trong các tế bào lớn này.  Cứ tiếp tục như thế ta sẽ tìm được tất cả các phủ gồm các tế bào lớn của kar(f).<br/></span>
                                <span className="ml-3">
                                - Loại bỏ các phủ không tối tiểu, ta tìm được tất cả các phủ tối tiểu gồm các tế bào lớn của kar(f).<br/></span>
                                Bước 5: Xác định các công thức đa thức tối tiểu của f.<br/>
                                • Từ các phủ tối tiểu gồm các tế bào lớn của kar(f) tìm được ở bước 4 ta xác định được các công thức đa thức tương ứng của f.<br/>
                                • Loại bỏ các công thức đa thức mà có một công thức đa  thức nào đó thực sự đơn giản hơn chúng.<br/>
                                • Các công thức đa thức còn lại chính là các công thức đa thức tối tiểu của f.</RightP>
                                <RightP><RightWordBold>Ví dụ 1: </RightWordBold>
                                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot><br/>
                                Bước 1: Bảng Kar(f)<br/>
                                f(x,y,z,t) = xyzt &or; x<RightWordNot>y</RightWordNot> &or; x<RightWordNot>z</RightWordNot> &or; yz &or; xy<RightWordNot>z</RightWordNot> &or; xy<RightWordNot>t</RightWordNot></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_1.png').default} />

                                <RightP>Bước 2: Xác định tất cả các tế bào lớn của f. </RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_2.png').default} />

                                <RightP>Bước 3: Chọn tế bào lớn nhất thiết phải chọn: (Vì chúng chứa các các ô không nằm trong tế bào nào khác – minh hoạ với ô vàng)<br/>
                                - Chọn tế bào lớn thứ 1: x<br/>
                                - Chọn tế bào lớn thứ 2: yz</RightP>

                                <RightP>Bước 4: Xác định họ phủ của các tế bào lớn:</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_3.png').default} />
                                <RightP>Ta thấy các tế bào chọn ở bước 3 đã phủ hết bảng<br/>
                                &rarr; đây là họ phủ tối thiểu gồm các tế bào <br/>
                                Kar(f): x &or; yz</RightP>

                                <RightP>Bước 5: Ứng với họ phủ tối thiểu của tế bào lớn tìm được ta được duy nhất 1 công thức đa thức tối tiểu của f:<br/>
                                &rarr; f = x &or; yz</RightP>

                                <RightP><RightWordBold>Ví dụ 2: </RightWordBold>
                                Tìm các công thức đa thức tối thiểu của hàm f: <br/>
                                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; 
                                xyzt &or; 
                                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>

                                <RightP>Bước 1: Bảng Kar(f)<br/>
                                f(x,y,z,t)=<RightWordNot>y</RightWordNot>zt &or; <RightWordNot>y</RightWordNot><RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; y<RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot> &or; 
                                xyzt &or; 
                                <RightWordNot>x</RightWordNot>z<RightWordNot>t</RightWordNot></RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_4.png').default} />

                                <RightP>Bước 2: Xác định các tế bào lớn</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_5.png').default} />
                                <RightP>
                                + Tế bào lớn thứ 1: <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot><br/>
                                + Tbào lớn thứ 2: <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br/>
                                + Tế bào lớn thứ 3: <RightWordNot>y</RightWordNot>zt<br/>
                                + Tế bào lớn thú 4: xzt<br/>
                                + Tế bào lớn thứ 5: <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

                                <RightP>Bước 3: Xác định các tế bào lớn nhất thiết phải chọn</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_6.png').default} />
                                <RightP>
                                - Có 3 ô chỉ nằm trong 1 tế bào lớn<br/>
                                - Các tế bào lớn nhất thiết phải chọn là<br/> 
                                <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> + xzt + <RightWordNot>z</RightWordNot><RightWordNot>t</RightWordNot></RightP>

                                <RightP>Bước 4: Xác định họ phủ tối thiểu của các tế bào lớn:</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/6_5_7.png').default} />
                                <RightP>
                                - Ta có họ phủ : <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt<br/>
                                - Ta thấy còn một ô chưa được phủ và ô đó nằm ở 1 trong 2 tế bào lớn.<br/>
                                - Ta có 2 cách chọn:<br/>
                                Cách chọn thứ 1: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br/>
                                Cách chọn thứ 2: <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>

                                <RightP>Bước 5: Xác định công thức đa thức cực tiểu:<br/>
                                - Ta thấy 2 công thức đơn giản như nhau cho nên công thức đa thức tối thiểu của hàm f là:<br/>
                                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>x</RightWordNot><RightWordNot>y</RightWordNot>z<br/>
                                + <RightWordNot>z</RightWordNot>t &or; <RightWordNot>x</RightWordNot><RightWordNot>t</RightWordNot> &or; xzt &or; <RightWordNot>y</RightWordNot>zt</RightP>
                    </Div>
                    {/* 7. Phương pháp quine - McCluskey */}
                    <Div>
                        <RightH2 id="7">7. Phương pháp quine - McCluskey</RightH2>
                            <RightH3 id="7_1">7.1 Dạng tổng chuẩn tắc thu gọn</RightH3>
                                <RightP>
                                <RightWordBold>Bước 1:</RightWordBold> Viết vào cột thứ nhất các biểu diễn của các nguyên nhân hạng n của hàm Boole F. Các biểu diễn được chia thành từng nhóm, các biểu diễn trong mỗi nhóm có số các ký hiệu 1 bằng nhau và các nhóm xếp theo thứ tự số các ký hiệu 1 tăng dần. <br/>
                                <RightWordBold>Bước 2:</RightWordBold> Lần lượt thực hiện tất cả các phép dán các biểu diễn trong nhóm i với các biểu diễn trong nhóm i+1 (i=1, 2, …). Biểu diễn nào tham gia ít nhất một phép dán sẽ được ghi nhận một dấu * bên cạnh. Kết quả dán được ghi vào cột tiếp theo. <br/>
                                <RightWordBold>Bước 3:</RightWordBold> Lặp lại Bước 2 cho cột kế tiếp cho đến khi không thu thêm được cột nào mới. Khi đó tất cả các biểu diễn không có dấu * sẽ cho ta tất cả các nguyên nhân nguyên tố của F. </RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/7_1.png').default} />
                            <RightH3 id="7_2">7.2 Dạng tổng chuẩn tắc tối thiểu</RightH3>
                                <RightP>
                                <RightWordBold>Bước 1:</RightWordBold> Phát hiện tất cả các nguyên nhân nguyên tố cốt yếu. <br/>
                                <RightWordBold>Bước 2:</RightWordBold> Xoá tất cả các cột được phủ bởi các nguyên nhân nguyên tố cốt yếu.  <br/>
                                <RightWordBold>Bước 3:</RightWordBold> Trong bảng còn lại, xoá nốt những dòng không còn dấu + và sau đó nếu có hai cột giống nhau thì xoá bớt một cột. <br/>
                                <RightWordBold>Bước 4:</RightWordBold> Sau các bước trên, tìm một hệ S các nguyên nhân nguyên tố với số biến ít nhất phủ các cột còn lại. </RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/boole/7_2.png').default} />
                    </Div>
                    {/* 8. Các cổng logic */}
                    <Div>
                        <RightH2 id="8">8. Các cổng logic</RightH2>
                            <RightP>
                            Phép <RightWordBold>cộng</RightWordBold> thể hiện qua hàm <RightWordBold>OR</RightWordBold><br/>
                            Phép <RightWordBold>nhân</RightWordBold> thể hiện qua hàm <RightWordBold>AND</RightWordBold><br/>
                            Phép <RightWordBold>phủ định</RightWordBold> thể hiện qua hàm <RightWordBold>NOT</RightWordBold>.
                            </RightP>
                            <RightP>Các phép tính trên khi áp dụng cho logic 0 và 1</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_1.png').default} />
                            <RightP><RightWordBold>Các cổng cơ bản</RightWordBold></RightP>
                            {/* AND */}
                            <RightP><RightWordBold>- Cổng AND</RightWordBold></RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_2.png').default} />
                            <RightP>Đầu ra chỉ = 1 khi tất cả ngõ vào = 1</RightP>
                            {/* OR */}
                            <RightP><RightWordBold>- Cổng OR</RightWordBold></RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_3.png').default} />
                            <RightP>Đầu ra = 1 khi có 1 ngõ vào = 1</RightP>
                            {/* NOT */}
                            <RightP><RightWordBold>- Cổng NOT</RightWordBold></RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_4.png').default} />
                            <RightP>Bù của giá trị đầu vào</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_5.png').default} />

                            <RightP>Sự chuyển đổi giữa các cổng cơ bản sang cổng NAND</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_6.png').default} />

                            <RightP>Sự chuyển đổi giữa các cổng cơ bản sang cổng NOR</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_7.png').default} />

                            <RightP><RightWordBold>Ví dụ: </RightWordBold>Viết lại biểu thức logic sau từ mạch logic:</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_8.png').default} />
                            <RightP>
                            Các bước thiết kế logic tổng hợp:<br/>
                            - Bước 1: Đặt các biến cho ngõ vào và các hàm của ngõ ra tương ứng.<br/>
                            - Bước 2: Thiết lập bảng chân trị cho ngõ ra và ngõ vào. <br/> 
                            - Bước 3: Viết biểu thức logic liên hệ giữa ngõ ra và các ngõ vào.<br/>
                            - Bước 4: Tìm công thức đa thức tối tiểu của biểu thức logic vừa tìm được.<br/> 
                            - Bước 5: Từ biểu thức logic rút gọn chuyển sang mạch logic tương ứng.</RightP>
                            <RightP><RightWordBold>Ví dụ:<br/></RightWordBold>
                            - Một ngôi nhà có 3 công tắc, người chủ nhà muốn bóng đèn sáng khi cả 3 công tắc đều hở, hoặc khi công tắc 1 và 2 đóng còn công tắc thứ 3 hở. Hãy thiết kế mạch logic thực hiện sao cho <RightWordBold>số cổng là ít nhất</RightWordBold>.</RightP>
                            <RightP><RightWordBold>Giải:<br/></RightWordBold>
                            - Bước 1: <br/>
                            Gọi 3 công tắc lần lượt là A, B, C. <br/>
                            Bóng đèn là Y. <br/>
                            Trạng thái công tắc đóng là logic 1, hở là 0.<br/> 
                            Trạng thái đèn sáng là logic 1 và tắt là 0.<br/>
                            - Bước 2: <br/>
                            Từ yêu cầu bài toán ta có bảng chân trị:</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_9.png').default} />

                            <RightP>- Bước 3: Từ bảng chân trị ta có biểu thức logic ngõ ra <br/>
                            Y = <RightWordNot>A</RightWordNot><RightWordNot>B</RightWordNot><RightWordNot>C</RightWordNot> + AB<RightWordNot>C</RightWordNot></RightP>

                            <RightP>- Bước 4: Rút gọn biểu thức logic:<br/>
                            Y = <RightWordNot>A</RightWordNot><RightWordNot>B</RightWordNot><RightWordNot>C</RightWordNot> + AB<RightWordNot>C</RightWordNot></RightP>

                            <RightP>- Bước 5: Mạch logic tương ứng của biểu thức</RightP>
                            <Image style={{marginLeft: "80px", width: "80%"}} src={require('../../images/boole/8_10.png').default} />
                            <RightP>- Ngoài ra, ta cũng có thể sử dụng cổng XOR cho bài toán như sau:</RightP>
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_11.png').default} />
                            <Image style={{marginLeft: "80px"}} src={require('../../images/boole/8_12.png').default} />
                    </Div>
                </RightColumn>
            </Container>
        </>
    )
}

export default BoolePage
