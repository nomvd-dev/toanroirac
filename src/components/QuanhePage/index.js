/* eslint-disable no-sequences */
import React from 'react';
import { QHPageContainer } from './QuanhePageElements';
import { Container, Title, LeftColumn, LeftH2, LeftH3, LeftH4, RightColumn, RightH2, RightH3, RightH4, RightP, Div, Image, RightWordBold, RightWordItalic } from '../DetailCoursesElements';
// import {FaCircle} from 'react-icons/fa';

const QuanhePage = () => {
    return (
        <div style={{height: "100%"}}>
            <QHPageContainer />
            <Container>
                {/* Left Column */}
                <LeftColumn>
                    <LeftH2 activeClass="active"
                                to="1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1. Quan hệ hai ngôi</LeftH2>
                        <LeftH3 activeClass="active"
                                to="1_1"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1.1 Định nghĩa</LeftH3>
                        <LeftH3 activeClass="active"
                                to="1_2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>1.2 Các tính chất</LeftH3>
                            <LeftH4 activeClass="active"
                                to="1_2_a"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>a. Tính phản xạ</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_2_b"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>b. Tính đối xứng, phản xứng</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_2_c"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>c. Tính bắc cầu (truyền)</LeftH4>
                            <LeftH4 activeClass="active"
                                to="1_2_d"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>d. Biểu diễn quan hệ</LeftH4>
                    <LeftH2 activeClass="active"
                                to="2"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2. Quan hệ tương đương</LeftH2>
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
                                duration={500}>2.2	Lớp tương đương</LeftH3>
                        <LeftH3 activeClass="active"
                                to="2_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>2.3 Sự phân hoạch các lớp tương đương</LeftH3>

                    <LeftH2 activeClass="active"
                                to="3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3. Quan hệ thứ tự</LeftH2>
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
                                duration={500}>3.2 Thứ tự toàn phần và bán phần</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_3"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.3 Biểu đồ Hasse</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_4"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.4 Phần tử nhỏ nhất, lớn nhất</LeftH3>
                        <LeftH3 activeClass="active"
                                to="3_5"
                                spy={true}
                                smooth={true}
                                offset={-85}
                                duration={500}>3.5 Phần tử tối thiểu, tối đại</LeftH3>
                </LeftColumn>
                {/* Right Column */}
                <RightColumn>
                    <Title>Quan hệ</Title>
                    {/* Mệnh đề Logic */}
                    <Div id="1">
                        <RightH2>1. Quan hệ hai ngôi</RightH2>
                            <RightH3 id="1_1">1.1 Định nghĩa</RightH3>
                                <RightP>Cho hai tập A, B. Ta gọi tập R là một quan hệ hai ngôi từ A đến B <br/> nếu R &sube; A x B.</RightP>
                                <RightP>Nếu (a, b) &isin; R thì ta nói a có quan hệ R với b và ký hiệu a R b; ngược lại nếu (a, b) &notin; R thì ta kí hiệu  a <span style={{borderTop: "1px solid"}}>R</span> b.</RightP>
                                <RightP>Khi A = B, ta gọi R là một quan hệ hai ngôi trên A.</RightP>
                                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                <RightP>Cho A = {1, 2, 3, 4}, R là một quan hệ (hai ngôi) trên A và <br/> R = {'{'}(a, b) &isin; A | a là ước của b {'}'}.</RightP>
                                <RightP>Khi đó: </RightP>
                                <RightP>R = {'{'}(1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (2, 4), (3, 3), (4,4){'}'}</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_1.png').default} />
                            <RightH3 id="1_2">1.2 Các tính chất</RightH3>
                                <RightH4 id="1_2_a">a. Tính phản xạ</RightH4>
                                    <RightP>Giả sử R là một quan hệ hai ngôi trên tập A.<br/>Ta nói quan hệ R có tính phản xạ nếu và chỉ nếu a R a ,  &forall; a &isin; A.</RightP>
                                    <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                    <RightP>Trên tập A = {1, 2, 3, 4}, <br/> 
                                    quan hệ R1 = {'{'}(1,1), (1,2), (2,1), (2, 2), (3, 4), (4, 1), (4, 4){'}'} không phản xạ vì (3, 3) &notin; R1 <br/>
                                    R2 = {'{'}(1,1), (1,2), (1,4), (2, 2), (3, 3), (4, 1), (4, 4){'}'} phản xạ vì (1,1), (2, 2), (3, 3), (4, 4) &isin; R2 </RightP>
                                    <RightP>
                                    - Quan hệ  ≤  trên Z phản xạ vì a  ≤  a, &forall; a &isin; Z. <br/>
                                    - Quan hệ &gt; trên Z không phản xạ vì 1 không lớn hơn 1. <br/>
                                    - Quan hệ “ | ” (“ước số”) trên Z+ là phản xạ vì mọi số nguyên dương a là ước của chính nó.</RightP>
                                <RightH4 id="1_2_b">b. b)	Tính đối xứng, phản xứng</RightH4>
                                    <RightP>Giả sử R là một quan hệ hai ngôi trên tập A. <br/>
                                    - Ta nói quan hệ R có tính đối xứng nếu và chỉ nếu a R b &rArr; b R a , &forall; a, b &isin; A. <br/>
                                    - Ta nói quan hệ R có tính phản xứng nếu và chỉ nếu (a R b &and;  b R a) &rArr; a = b ,  &forall; a, b &isin; A.</RightP>
                                    <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                    <RightP>
                                        - Quan hệ R1 = {'{'}(1,1), (1,2), (2,1){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} là đối xứng.<br/>
                                        - Quan hệ  ≤  trên Z không đối xứng, tuy nhiên nó phản xứng vì (a ≤  b) &and; (b  ≤  a) &rArr; (a = b).<br/>
                                        - Quan hệ “ | ” ( “ước số” ) trên Z+  không đối xứng, tuy nhiên nó có tính phản xứng vì (a | b) &and; (b | a) &rArr; (a = b).</RightP>
                                <RightH4 id="1_2_c">c. Tính bắc cầu ( truyền )</RightH4>
                                    <RightP>
                                    Giả sử R là một quan hệ hai ngôi trên tập A.<br/>
                                    - Ta nói quan hệ R có tính bắc cầu (truyền) nếu và chỉ nếu <br/>
                                    (a R b &and; b R c) &rArr; a R c , &forall; a,b,c &isin; A.
                                    </RightP>
                                    <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                    <RightP>
                                    Quan hệ R = {'{'}(1,1), (1,2), (2,1), (2, 2), (1, 3), (2, 3){'}'} trên tập A = {'{'}1, 2, 3, 4{'}'} có tính bắc cầu.<br/> 
                                    - Quan hệ ≤ và “|” trên Z có tính bắc cầu vì <br/> 
                                    (a ≤ b) &and; (b ≤ c) &rArr; (a ≤ c)<br/>(a | b) &and; (b | c) &rArr; (a | c)</RightP>
                                <RightH4 id="1_2_d">d. Biểu diễn quan hệ</RightH4>
                                    <RightP>
                                        Cho R là quan hệ từ A = {'{'}a1, a2, …, a<sub>m</sub>{'}'} đến B = {'{'}b1, b2, …, bn{'}'}. Ma trận biểu diễn của R là ma trận M<sub>R</sub> = [m<sub>ij</sub>] <sub>mxn</sub> xác định bởi:
                                    </RightP>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d.png').default} />
                                    <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                    <RightP>
                                    Cho R là quan hệ từ A = {'{'}1, 2, 3, 4{'}'} đến B = {'{'}u, v, w{'}'},<br/> R = {'{'}(1, u), (1, v), (2, w), (3, w), (4, u){'}'}.<br/> Khi đó R có thể biễu diễn như sau:<br/>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d1.png').default} />
                                    </RightP>
                                    <RightP>Đây là ma trận cấp 4×3 biễu diễn cho quan hệ R</RightP>
                                    <RightP></RightP>
                                    <RightP>Cho R là quan hệ từ A = {'{'}1, 2, 3{'}'} đến B = {'{'}1, 2{'}'}:<br/> a R b &hArr; a &gt; b. Khi đó ma trận biểu diễn của R là: <br/></RightP>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d2.png').default} />
                                    <RightP>Cho R là quan hệ trên tập A, khi đó MR là ma trận vuông.</RightP>

                                    <RightP>+ R là phản xạ nếu tất cả các phần tử trên đường chéo của M<sub>R</sub> đều bằng 1:<br/></RightP>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d3.png').default} />

                                    <RightP>+ R là đối xứng nếu M<sub>R</sub> là đối xứng m<sub>ij</sub> = m<sub>ji</sub>, &forall; i, j.<br/></RightP>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d4.png').default} />

                                    <RightP>+ R là phản xứng nếu M<sub>R</sub> thỏa: <br/>
                                    m<sub>ij</sub> = 0 hoặc  m<sub>ji</sub> = 0 nếu i &ne; j.<br/></RightP>
                                    <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/1_2_d5.png').default} />
                    </Div>
                    {/* Quan hệ tương đương */}
                    <Div>
                        <RightH2 id="2">2. Quan hệ tương đương</RightH2>
                            <RightH3 id="2_1">2.1 Định nghĩa</RightH3>
                                <RightP>Quan hệ R trên tập A được gọi là tương đương nếu và chỉ nếu nó có tính chất phản xạ, đối xứng và bắc cầu.</RightP>
                        
                                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                <RightP>
                                    - Quan hệ R trên tập các chuỗi ký tự xác định bởi aRb nếu a và b có cùng độ dài. Khi đó R là quan hệ tương đương.<br/>
                                    - Cho R là quan hệ trên tập R sao cho <br/> 
                                        aRb &hArr; a – b &isin; Z<br/>
                                    Khi đó R là quan hệ tương đương.<br/>
                                    - Cho m là số nguyên dương và R là quan hệ trên Z :<br/>
                                    aRb &hArr; (a – b) chia hết m<br/>
                                    Khi đó R là quan hệ tương đương.<br/>
                                    - Rõ ràng quan hệ này có tính phản xạ và đối xứng.<br/>
                                    - Cho a, b, c sao cho a – b và b – c chia hết cho m, khi đó a – c = a – b + b – c cũng chia hết cho m. Suy ra R có tính chất bắc cầu.<br/>
                                    - Quan hệ này được gọi là đồng dư modulo m và chúng ta viết a &equiv; b (mod m) thay vì aRb.
                                    </RightP>
                                {/* <RightP></RightP> */}
                            <RightH3 id="2_2">2.2 Lớp tương đương</RightH3>
                                <RightP>Cho R là quan hệ tương đương trên A và a &isin; A . Lớp tương đương chứa a theo quan hệ R được ký hiệu bởi [a]<sub>R</sub> hoặc [a] là tập hợp tất cả những phần tử có quan hệ R với a.<br/>
                                [a]<sub>R</sub> = {'{'}b &isin; A| b R a{'}'}</RightP>
                                <RightP>• Mỗi phần tử x &isin; [a]<sub>R</sub> được gọi là một phần tử đại diện của lớp tương đương [a]<sub>R</sub>.</RightP>
                                <RightP>• Tập thương của A theo quan hệ R, ký hiệu là A/R, được định nghĩa là tập tất cả các lớp tương đương của các phần tử thuộc A, nghĩa là <br/> 
                                A/R = {'{'}[a]<sub>R</sub> | &forall; a &isin; A{'}'}</RightP>

                                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                <RightP>Tìm các lớp tương đương modulo 8 chứa 0 và 1?</RightP>
                                <RightP>Giải: Lớp tương đương modulo 8 chứa 0 gồm tất cả các số nguyên a chia hết cho 8. Do đó: <br/>
                                [0]<sub>8</sub> = {'{'} …, – 16, – 8, 0, 8, 16, … {'}'}<br/> 
                                Tương tự<br/>
                                [1]<sub>8</sub> = {'{'}a | a chia 8 dư 1{'}'} = {'{'} …, – 15, – 7, 1, 9, 17, … {'}'}</RightP>
                                {/* <RightP></RightP> */}
                            <RightH3 id="2_3">2.3 Sự phân hoạch các lớp tương đương</RightH3>
                                <RightP><span className="font-weight-bold">Nhận xét:</span> Trong ví dụ trên, các lớp tương đương [0]<sub>8</sub> và [1]<sub>8</sub> là rời nhau.</RightP>
                                <RightP><span className="font-weight-bold">Mệnh đề:</span> Cho R là quan hệ tương đương trên tập A. Với mọi a,b &isin; A các điều kiện sau đây tương đương với nhau.</RightP>
                                <RightP>
                                    (i) a R b <br/>
                                    (ii) [a]<sub>R</sub> = [b]<sub>R</sub> <br/>
                                    (iii) [a]<sub>R</sub> &cap; [b]<sub>R</sub> &ne; &empty;
                                </RightP>
                                <RightP><span className="font-weight-bold">Chú ý:</span> 
                                - Từ mệnh đề trên ta thấy rằng các lớp tương đương của các phần tử của tập A hoặc trùng nhau, hoặc rời nhau.<br/>
                                - Hơn nữa, hợp của tất cả các lớp tương đương này trùng với A, cho nên tập A là hợp rời rạc của các lớp tương đương.Ta cũng nói rằng tập A được phân hoạch thành các lớp tương đương theo quan hệ R.<br/>
                                - Cho {'{'}A<sub>1</sub>, A<sub>2</sub>, … {'}'} là phân hoạch A thành các tập con không rỗng, rời nhau. Khi đó có duy nhất quan hệ tương đương trên A sao cho mỗi A<sub>i</sub> là một lớp tương đương.<br/>
                                - Thật vậy với mỗi a, b &isin; A, ta đặt a R b nếu có tập con Ai sao cho a, b &isin; A<sub>i</sub>.
                                - Dễ dàng chứng minh rằng R là quan hệ tương đương trên A và [a]<sub>R</sub> = A<sub>i</sub> nếu a &isin; A<sub>i</sub>.</RightP>

                                <RightP><span className="font-weight-bold">Ví dụ:</span></RightP>
                                <RightP>
                                - Cho m là số nguyên dương, khi đó có m lớp đồng dư modulo m là [0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>.<br/>
                                - Chúng lập thành phân hoạch của Z thành các tập con rời nhau.<br/>
                                Chú ý rằng:<br/>
                                [0]<sub>m</sub> = [m]<sub>m</sub> = [2m]<sub>m</sub> = …<br/>
                                [1]<sub>m</sub> = [m + 1]<sub>m</sub> = [2m +1]<sub>m</sub> = …<br/>
                                …………………………………<br/>
                                [m – 1]<sub>m</sub> = [2m – 1]<sub>m</sub> = [3m – 1]<sub>m</sub> = … <br/>
                                - Mỗi lớp tương đương này được gọi là số nguyên modulo m.<br/>
                                - Tập hợp các số nguyên modulo m được ký hiệu bởi Z<sub>m</sub> , đó chính là tập thương của Z theo quan hệ đồng dư modulo m.<br/>
                                Z<sub>m</sub> = Z/R = {'{'}[0]<sub>m</sub> , [1]<sub>m</sub> , …, [m – 1]<sub>m</sub>{'}'}</RightP>
                                {/* <RightP></RightP> */}
                    </Div>
                    {/* Quy tắc suy diễn */}
                    <Div>
                        <RightH2 id="3">3. Quan hệ thứ tự</RightH2>
                            <RightH3 id="3_1">3.1 Định nghĩa</RightH3>
                                <RightP>Quan hệ R trên tập A được gọi là quan hệ thứ tự nếu và chỉ nếu nó có tính chất phản xạ, phản xứng và bắc cầu.<br/>
                                Ta thường kí hiệu quan hệ thứ tự bởi ≺.<br/>
                                Cặp (A, ≺) được gọi là tập sắp thứ tự (tập được sắp) hay poset.</RightP>
                                <RightWordBold className="ml-5">Ví dụ: </RightWordBold>
                                <RightP>Quan hệ ước số “ | ”trên tập số nguyên dương là quan hệ thứ tự, nghĩa là (Z<sup>+</sup>, | ) là poset</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_1_1.png').default} />
                                <RightP>- (Z<sup>+</sup>, | ) là poset ? &rArr; không phải</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_1_2.png').default} />
                                <RightP>- (P(S), &sube; ), ở đây P(S) là tập hợp các con của S, là một poset?</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_1_3.png').default} />
                                {/* <RightP></RightP> */}
                            <RightH3 id="3_2">3.2 Thứ tự toàn phần và bán phần</RightH3>
                                <RightP>Định nghĩa. Các phần tử a và b của poset (S, ≺) gọi là so sánh được nếu a ≺ b hoặc b ≺ a. <br/>
                                Trái lại thì ta nói a và b không so sánh được.<br/>
                                Cho (S, ≺). Nếu hai phần tử tùy ý của S đều so sánh được với nhau thì ta gọi (S, ≺) là tập sắp thự tự toàn phần.<br/>
                                Ta cũng nói rằng ≺ là thứ tự toàn phần hay thứ tự tuyến tính trên S.<br/>
                                Trái lại thì ta nói ≺ là thứ tự bán phần.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold></RightP>
                                <RightP>- Quan hệ “≤ ” trên tập số Z+ là thứ tự toàn phần.<br/>
                                - Quan hệ ước số “ | ”trên tập hợp số Z<sup>+</sup> không là thứ tự toàn phần, vì các số 5 và 7 là không so sánh được.<br/>
                                - Với tập A cho trước, tập P(A) tất cả các tập con của A với quan hệ &sube; là một tập được sắp, nhưng không toàn phần khi A có nhiều hơn một phần tử.</RightP>
                                {/* <RightP></RightP> */}
                            <RightH3 id="3_3">3.3 Biểu đồ Hasse</RightH3>
                                <RightP>Mỗi poset có thể biểu diễn bởi 1 đồ thị đặc biệt ta gọi là biểu đồ Hasse.<br/>
                                Để định nghĩa biểu đồ Hasse chúng ta cần các khái niệm phần tử trội và trội trực tiếp.</RightP>
                                <RightP><RightWordBold>Định nghĩa:</RightWordBold></RightP>
                                <RightP>- Phần tử b có trong poset (S, ) được gọi là phần tử trội của phần tử a trong S nếu a ≺ b.<br/>
                                - Chúng ta cũng nói rằng a là được trội bởi b. Phần tử b được gọi là trội trực tiếp của a nếu b là trội của a và không tồn tại c sao cho:  a ≺ c ≺ b, a ≠ c ≠ b.<br/>
                                Ta định nghĩa biểu đồ Hasse của poset (S, ≺) là đồ thị:<br/>
                                - Mỗi phần tử của S được biểu diễn bởi 1 điểm trên mặt phẳng.<br/>
                                - Nếu b là trội trực tiếp của a thì sẽ vẽ 1 cung đi từ a đến b.</RightP>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <Image style={{marginLeft: "80px", width: "50%"}} src={require('../../images/quanhe/3_3_1.png').default} />
                                    <RightP>a ≺ b ≺ d,  a ≺ c</RightP>
                                </Div>
                                <RightP>Biểu đồ Hasse của poset ({1, 2, 3, 4}, ≤) có thể vẽ như sau: </RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_3_2.png').default} />
                                <RightP>Biểu đồ Hasse của P({'{'}a,b,c{'}'}): </RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_3_3.png').default} />
                            <RightH3 id="3_4">3.4 Phần tử nhỏ nhất, lớn nhất</RightH3>
                                <RightP><RightWordBold>Định nghĩa:</RightWordBold>
                                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:</RightP>
                                <RightP>- <RightWordItalic>Phần tử nhỏ nhất</RightWordItalic> nếu &forall; x &isin; S ta có a ≺ x.<br/>
                                - <RightWordItalic>Phần tử lớn nhất</RightWordItalic> nếu &forall; x &isin; S ta có x ≺ a.</RightP>
                                <RightP><RightWordBold>Nhận xét:</RightWordBold>
                                Phần tử nhỏ nhất (lớn nhất) của một tập hợp (nếu có) là duy nhất. Ta kí hiệu phần tử của tập hợp S là min(S), và kí hiệu phần tử lớn nhất của S là max(S).</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Trong tập có thứ tự (S, &le;), S = {'{'}m &isin; Z | m^2 &lt; 100 {'}'} có<br/> 
                                min(S) = -9, max(S) = 9.<br/>
                                Trong tập có thứ tự (A, &le;), A={'{'}x &isin; R | x^2 &lt; 100 {'}'} không có phần tử nhỏ nhất và cũng không có phần tử lớn nhất.<br/>
                                Cho tập B, ta biết (P(B), &sub;) là tập có thứ tự. Với thứ tự này thì min(P(B)) = &empty;, max(P(B)) = B.</RightP>
                                <RightP><RightWordBold>Định nghĩa: (Thứ tự tốt)</RightWordBold></RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                - Tập hợp có thứ tự (N, &le;) là một tập hợp được sắp tốt.<br/>
                                - Tập hợp có thứ tự (Z, &le;) không phải là một tập hợp được sắp tốt vì Z không có phần tử nhỏ nhất.</RightP>
                            <RightH3 id="3_5">3.5 Phần tử tối thiểu, tối đại</RightH3>
                                <RightP><RightWordBold>Định nghĩa: </RightWordBold>
                                Một phần tử a trong tập sắp thứ tự (S, ≺) được gọi là:<br/>
                                - <RightWordItalic>Phần tử tối tiểu</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và x ≺ a.<br/>
                                - <RightWordItalic>Phần tử tối đại</RightWordItalic> nếu không tồn tại x &isin; S sao cho x &ne; a và a ≺ x.</RightP>
                                <RightP><RightWordBold>Nhận xét:</RightWordBold>
                                Phần tử tối tiểu (tối đại) của một tập có thứ tự không nhất thiết là duy nhất.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Xét tập S = {'{'}1, 2, 3{'}'} với quan hệ R cho bởi R = {'{'}(1,1), (2,2), (3,3), (1,2), (3,2){'}'}. Dễ dàng kiểm chứng rằng (S,R) là tập có thứ tự. Với thứ tự R này, S có hai phần tử tối tiểu là 1 và 3.<br/>
                                - Phần tử lớn nhất (nhỏ nhất) của một tập có thứ tự, nếu có, là phần tử tối đại (tối tiểu) duy nhất của tập hợp đó.</RightP>
                                <RightP><RightWordBold>Ví dụ:</RightWordBold>
                                Xét poset có biểu đồ Hasse dưới đây:</RightP>
                                <Div className="d-flex justify-content-between align-items-center">
                                    <Image style={{marginLeft: "80px", width: "50%"}} src={require('../../images/quanhe/3_5_1.png').default} />
                                    <RightP>Mỗi đỉnh màu đỏ là <RightWordBold>tối đại</RightWordBold>.<br/>
                                    Mỗi đỉnh màu xanh là <RightWordBold>tối tiểu</RightWordBold>.<br/>
                                    Không có cung nào xuất phát từ điểm tối đại.<br/>
                                    Không có cung nào kết thúc ở điểm tối tiểu.</RightP>
                                </Div>
                                <RightP><RightWordBold>Chú ý: Trong một poset S hữu hạn, phần tử tối tiểu và phần tử tối đại luôn luôn tồn tại.</RightWordBold></RightP>
                                <RightP>- Thật vậy, chúng ta xuất phát từ điểm bất kỳ a<sub>0</sub> &isin; S. Nếu a<sub>0</sub> không là phần tử tối tiểu thì &exist; a<sub>1</sub> &isin; S: a<sub>1</sub> ≺ a<sub>0</sub> . Tiếp tục  như vậy cho đến khi tìm được phần tử tối tiểu.<br/> 
                                - Phần tử tối đại cũng tìm được bằng phương pháp tương tự.</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_5_2.png').default} />

                                <RightP><RightWordBold>Ví dụ. Tìm phần tử tối đại, tối tiểu của poset ({'{'}2, 4, 5, 10, 12, 20, 25{'}'}, | ) ?</RightWordBold></RightP>
                                <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 12, 20, 25 là các phần tử tối đại, còn 2, 5 là các phần tử tối tiểu. <br/>
                                - Như vậy phần tử tối đại, tối tiểu của poset có thể không duy nhất.</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_5_3.png').default} />

                                <RightP><RightWordBold>Ví dụ: Tìm phần tử tối đại, tối tiểu của poset các chuỗi bit độ dài 3?</RightWordBold></RightP>
                                <RightP><RightWordBold>Giải: </RightWordBold>Từ biểu đồ Hasse, chúng ta thấy rằng 111 là phần tử tối đại duy nhất và 000 là phần tử tối tiểu duy nhất.</RightP>
                                <Image style={{marginLeft: "80px"}} src={require('../../images/quanhe/3_5_4.png').default} />
                                <RightP>111 là phần tử lớn nhất và 000 là phần tử nhỏ nhất theo nghĩa:<RightWordBold>000 ≺ abc ≺ 111 </RightWordBold>với mọi chuỗi abc.</RightP>
                    </Div>
                </RightColumn>
            </Container>
        </div>
    )
}

export default QuanhePage
