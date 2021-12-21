import React, { useState } from 'react';
import { BaiTapContainer, ShowAnswer, ShowHint } from './BaiTapElements';
import * as BaiTap from '../DetailCoursesElements/index';
import * as GoiY from '../Parts/index'

const BaiTapPage = () => {
    const [show, setShow] = useState([
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: true },
        { id: 4, value: true },
        { id: 5, value: true },
        { id: 6, value: true },
        { id: 7, value: true },
        { id: 8, value: true },
        { id: 9, value: true },
        { id: 10, value: true },
        { id: 11, value: true },
        { id: 12, value: true },
        { id: 13, value: true },
        { id: 14, value: true },
        { id: 15, value: true },
        { id: 16, value: true }
    ]);

    const handleClick = (index) => {
        let newArray = [...show];
        newArray[index - 1].value = !show[index - 1].value;
        setShow(newArray);
        console.log(show)
    }

    return (
        <>
            <BaiTapContainer />
            <BaiTap.Container>
                <BaiTap.LeftColumn>
                    {/* 1 */}
                    <BaiTap.LeftH2 activeClass="active"
                        to="1"
                        spy={true}
                        smooth={true}
                        offset={-145}
                        duration={500}>Cơ sở Logic</BaiTap.LeftH2>
                    <BaiTap.LeftH3 activeClass="active"
                        to="1_1"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>1.1 Mệnh đề - Biểu thức logic </BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="1_2"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>1.2 Quy tắc suy diễn </BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="1_3"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>1.3 Quy nạp toán học</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="1_4"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>1.4 Vị từ, lượng từ</BaiTap.LeftH3>
                    {/* 2 */}
                    <BaiTap.LeftH2 activeClass="active"
                        to="2"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>Quan hệ</BaiTap.LeftH2>
                    <BaiTap.LeftH3 activeClass="active"
                        to="2_1"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>2.1 Quan hệ hai ngôi</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="2_2"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>2.2 Quan hệ tương đương</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="2_3"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>2.3 Quan hệ thứ tự</BaiTap.LeftH3>
                    {/* 3 */}
                    <BaiTap.LeftH2 activeClass="active"
                        to="3"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}>Đại số Boole</BaiTap.LeftH2>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_1"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.1 Đại số logic B</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_2"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.2 Đại số Boole</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_3"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.3 Công thức đa thức tối thiểu</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_4"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.4 Biểu đồ Karnaugh của hàm Boole</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_5"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.5 Phương pháp Quine - McCluskey</BaiTap.LeftH3>
                    <BaiTap.LeftH3 activeClass="active"
                        to="3_6"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}>3.6 Các cổng logic</BaiTap.LeftH3>
                </BaiTap.LeftColumn>
                {/* RightColumn */}
                <BaiTap.RightColumn>
                    {/* 1 */}
                    <BaiTap.Div id="1">
                        <BaiTap.RightH2>1. Cơ sở Logic</BaiTap.RightH2>
                    </BaiTap.Div>
                    {/* 1_1 */}
                    <BaiTap.Div id="1_1">
                        <BaiTap.RightH3>1.1 Mệnh đề - Biểu thức logic</BaiTap.RightH3>
                        <BaiTap.RightP>
                            <BaiTap.RightWordBold>Bài tập: </BaiTap.RightWordBold>
                            Bằng biến đổi tương đương, chứng minh các biểu thức mệnh đề sau là hằng đúng: <br />
                            a. (P &and; Q) &rarr; P <br />
                            b. P &rarr; (&#9490;P &rarr; P) <br />
                            c. P &rarr; (Q &rarr; (P &and; Q)) <br />
                        </BaiTap.RightP>
                        {/* Đáp án */}
                        <ShowAnswer onClick={() => handleClick(1)}>Đáp án</ShowAnswer>
                        <BaiTap.Div hidden={show[0].value}>
                            <BaiTap.RightP>
                                <BaiTap.RightWordBold>Bài giải: </BaiTap.RightWordBold><br />
                                n = 1: 7 + 3 - 1 = 9 chia hết cho 9 <br />
                                - Giả sử với n = k &gt; 1: 7<sup>k</sup> + 3k - 1 chia hết cho 9 <br />
                                - Phải CM: 7<sup>k + 1</sup> + 3(k+1) - 1 chia hết cho 9 <br />
                                - Thật vậy:
                                7<sup>k + 1</sup> + 3(k+1) - 1 = 7(7<sup>k</sup> + 3k - 1) - 18k + 9 chia hết cho 9
                            </BaiTap.RightP>
                        </BaiTap.Div>
                        {/* <ShowAnswer onClick={() => handleClick(1)}>Đáp án</ShowAnswer> */}
                        {/* Gợi ý */}
                        <ShowHint onClick={() => handleClick(2)} target="_blank">Gợi ý</ShowHint>
                        <BaiTap.Div style={{ border: "1px solid var(--quinary-color)", marginLeft: "60px", padding: "10px 10px", marginBottom: "20px" }} hidden={show[1].value}>
                            {<GoiY.CacLuatLogic />}
                        </BaiTap.Div>
                        {/* <ShowHint onClick={() => handleClick(2)} target="_blank">Gợi ý</ShowHint> */}
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}</BaiTap.Div>
                    {/* 1_2 */}
                    <BaiTap.Div id="1_2">
                        <BaiTap.RightH3>1.2 Quy tắc suy diễn</BaiTap.RightH3>
                        <BaiTap.RightP>
                            <BaiTap.RightWordBold>Bài tập: </BaiTap.RightWordBold>
                            Dùng quy tắc suy luận chứng minh rằng: <br />
                            a. (p &rarr; (q &rarr; r)) &and; &#9490;(t &or; v) &and; (s &rarr; (p &and; q)) &and; (&#9490;p &rarr; t) &and; (s &or; v) &rArr; u <br />
                            b. ((p &and; q) &rarr; &#9490;r) &and; s &and; t &and; p &and; (p &rarr; (u &rarr; q)) &and; (s &rarr; (r &or; &#9490;t)) &rArr; &#9490;u
                        </BaiTap.RightP>
                        {/* Đáp án */}
                        <ShowAnswer onClick={() => handleClick(3)}>Đáp án</ShowAnswer>
                        <BaiTap.Div hidden={show[2].value}>
                            <BaiTap.RightP>
                                <BaiTap.RightWordBold>Bài giải: </BaiTap.RightWordBold><br />
                                n = 1: 7 + 3 - 1 = 9 chia hết cho 9 <br />
                                - Giả sử với n = k &greater; 1: 7<sup>k</sup> + 3k - 1 chia hết cho 9 <br />
                                - Phải CM: 7<sup>k + 1</sup> + 3(k+1) - 1 chia hết cho 9 <br />
                                - Thật vậy:
                                7<sup>k + 1</sup> + 3(k+1) - 1 = 7(7<sup>k</sup> + 3k - 1) - 18k + 9 chia hết cho 9
                            </BaiTap.RightP>
                        </BaiTap.Div>
                        {/* Gợi ý */}
                        <ShowHint onClick={() => handleClick(4)} target="_blank">Gợi ý</ShowHint>
                        <BaiTap.Div style={{ border: "1px solid var(--quinary-color)", marginLeft: "60px", padding: "0 10px", marginBottom: "20px" }} hidden={show[3].value}>
                            {<GoiY.QuyTacSuyDien />}
                        </BaiTap.Div>
                    </BaiTap.Div>
                    {/* 1_3 */}
                    <BaiTap.Div id="1_3">
                        <BaiTap.RightH3>1.3 Quy nạp toán học</BaiTap.RightH3>
                        <BaiTap.RightP>
                            <BaiTap.RightWordBold>Bài tập: </BaiTap.RightWordBold>
                            Bằng phương pháp chứng minh quy nạp, chứng minh rằng : với mọi số nguyên dương n, 7n + 3n - 1 chia hết cho 9 <br />
                            {/* n = 1: 7 + 3 – 1 = 9 chia hết cho 9 
                            giả sử với n = k > 1: 7k + 3k – 1 chia hết cho 9
                            phải CM: 7k+1 + 3(k+1) – 1 chia hết cho 9
                            thật vậy:
                            7k+1 + 3(k+1) – 1 = 7(7k + 3k – 1) – 18k + 9 chia hết cho 9 */}
                        </BaiTap.RightP>
                        {/* Đáp án */}
                        <ShowAnswer onClick={() => handleClick(5)}>Đáp án</ShowAnswer>
                        <BaiTap.Div hidden={show[4].value}>
                            <BaiTap.RightP>
                                <BaiTap.RightWordBold>Bài giải: </BaiTap.RightWordBold><br />
                                n = 1: 7 + 3 - 1 = 9 chia hết cho 9 <br />
                                - Giả sử với n = k &greater; 1: 7<sup>k</sup> + 3k - 1 chia hết cho 9 <br />
                                - Phải CM: 7<sup>k + 1</sup> + 3(k+1) - 1 chia hết cho 9 <br />
                                - Thật vậy:
                                7<sup>k + 1</sup> + 3(k+1) - 1 = 7(7<sup>k</sup> + 3k - 1) - 18k + 9 chia hết cho 9
                            </BaiTap.RightP>
                        </BaiTap.Div>
                        {/* Gợi ý */}
                        <ShowHint onClick={() => handleClick(6)} target="_blank">Gợi ý</ShowHint>
                        <BaiTap.Div style={{ border: "1px solid var(--quinary-color)", marginLeft: "60px", padding: "0 10px", marginBottom: "20px" }} hidden={show[5].value}>
                            {<GoiY.QuyTacPhanViDu />}
                        </BaiTap.Div>
                    </BaiTap.Div>
                    {/* 1_4 */}
                    <BaiTap.Div id="1_4">
                        <BaiTap.RightH3>1.4 Vị từ, lượng từ</BaiTap.RightH3>
                        <BaiTap.RightP>
                            <BaiTap.RightWordBold>Bài tập: </BaiTap.RightWordBold>
                            Cho P(x, y) là câu “x + y = y + x”. Xác định giá trị chân lý của các lượng từ ∀x ∀y ∈ P(x,y)<br />
                            Chứng minh: ∀x ∀y ∈ P(x, y) là ký hiệu của mệnh đề.
                        </BaiTap.RightP>
                        {/* Đáp án */}
                        <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                        {/* <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint> */}
                        <BaiTap.Div hidden={show[6].value}>
                            <BaiTap.RightP>
                                <BaiTap.RightWordBold>Bài giải: </BaiTap.RightWordBold><br />
                                “Với mọi số thực x và mọi số thực y, x + y = y + x là đúng”<br />
                                Vì P(x, y) đúng với mọi số thực x và y, nên mệnh đề ∀x ∀y ∈ P(x, y)là đúng.
                            </BaiTap.RightP>
                        </BaiTap.Div>
                        {/* Gợi ý */}
                        <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                        <BaiTap.Div style={{ border: "1px solid var(--quinary-color)", marginLeft: "60px", padding: "0 10px", marginBottom: "20px" }} hidden={show[7].value}>
                            {<GoiY.QuyTacPhanViDu />}
                        </BaiTap.Div>
                    </BaiTap.Div>
                    {/* 2 */}
                    <BaiTap.Div id="2">
                        <BaiTap.RightH2>2. Quan hệ</BaiTap.RightH2>
                    </BaiTap.Div>
                    {/* 2_1 */}
                    <BaiTap.Div id="2_1">
                        <BaiTap.RightH3>2.1 Quan hệ hai ngôi</BaiTap.RightH3>
                        <BaiTap.RightP>Cho D<sub>70</sub>={'{'}1, 2, 5, 7, 10, 14, 35, 70{'}'} là tập hợp các ước dương của 70. Trên D<sub>70</sub> ta trang bị các phép toán như sau:<br />
                            - a + b = LCM(a,b): BCNN của a và b<br />
                            - a * b = GCD(a,b): UCLN của a và b<br />
                            - a' = 70/a<br />
                            a. CMR: D<sub>70</sub> là một đại số Bool.<br />
                            b. Xét 2 tập con của D<sub>70</sub> : X={'{'}1, 5, 10, 70{'}'} và Y={'{'}1, 2, 35, 70{'}'}. Khi đó X, Y có phải là các đại số con của D<sub>70</sub> hay không? Vì sao?</BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 2_2 */}
                    <BaiTap.Div id="2_2">
                        <BaiTap.RightH3>2.1 Quan hệ tương đương</BaiTap.RightH3>
                        <BaiTap.RightP>Cho D<sub>70</sub>={'{'}1, 2, 5, 7, 10, 14, 35, 70{'}'} là tập hợp các ước dương của 70. Trên D<sub>70</sub> ta trang bị các phép toán như sau:<br />
                            - a + b = LCM(a,b): BCNN của a và b<br />
                            - a * b = GCD(a,b): UCLN của a và b<br />
                            - a' = 70/a<br />
                            a. CMR: D<sub>70</sub> là một đại số Bool.<br />
                            b. Xét 2 tập con của D<sub>70</sub> : X={'{'}1, 5, 10, 70{'}'} và Y={'{'}1, 2, 35, 70{'}'}. Khi đó X, Y có phải là các đại số con của D<sub>70</sub> hay không? Vì sao?</BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 2_3 */}
                    <BaiTap.Div id="2_3">
                        <BaiTap.RightH3>2.3 Quan hệ thứ tự</BaiTap.RightH3>
                        <BaiTap.RightP>Cho D<sub>70</sub>={'{'}1, 2, 5, 7, 10, 14, 35, 70{'}'} là tập hợp các ước dương của 70. Trên D<sub>70</sub> ta trang bị các phép toán như sau:<br />
                            - a + b = LCM(a,b): BCNN của a và b<br />
                            - a * b = GCD(a,b): UCLN của a và b<br />
                            - a' = 70/a<br />
                            a. CMR: D<sub>70</sub> là một đại số Bool.<br />
                            b. Xét 2 tập con của D<sub>70</sub> : X={'{'}1, 5, 10, 70{'}'} và Y={'{'}1, 2, 35, 70{'}'}. Khi đó X, Y có phải là các đại số con của D<sub>70</sub> hay không? Vì sao?</BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3 */}
                    <BaiTap.Div id="3">
                        <BaiTap.RightH2>3. Đại số Boole</BaiTap.RightH2>
                    </BaiTap.Div>
                    {/* 3_1 */}
                    <BaiTap.Div id="3_1">
                        <BaiTap.RightH3>3.1 Đại số logic B</BaiTap.RightH3>
                        <BaiTap.RightP>Cho D<sub>70</sub>={'{'}1, 2, 5, 7, 10, 14, 35, 70{'}'} là tập hợp các ước dương của 70. Trên D<sub>70</sub> ta trang bị các phép toán như sau:<br />
                            - a + b = LCM(a,b): BCNN của a và b<br />
                            - a * b = GCD(a,b): UCLN của a và b<br />
                            - a' = 70/a<br />
                            a. CMR: D<sub>70</sub> là một đại số Bool.<br />
                            b. Xét 2 tập con của D<sub>70</sub> : X={'{'}1, 5, 10, 70{'}'} và Y={'{'}1, 2, 35, 70{'}'}. Khi đó X, Y có phải là các đại số con của D<sub>70</sub> hay không? Vì sao?</BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3_2 */}
                    <BaiTap.Div id="3_2">
                        <BaiTap.RightH3>3.2 Đại số Boole</BaiTap.RightH3>
                        <BaiTap.RightP>
                            Tìm các biểu thức Bool biểu diễn các hàm F(x, y, z) và G(x, y, z) với bảng chân trị sau :<br />
                            <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/2.png').default} />
                        </BaiTap.RightP>
                        <BaiTap.RightP></BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3_3 */}
                    <BaiTap.Div id="3_3">
                        <BaiTap.RightH3>3.3 Công thức đa thức tối thiểu</BaiTap.RightH3>
                        <BaiTap.RightP>
                            Tìm công thức đa thức tối thiểu của các hàm sau<br />
                        </BaiTap.RightP>
                        <BaiTap.RightP className='ml-5'>
                            a. F = xyz + xy<span className="overline">z</span> + <span className='overline'>x</span>yz + <span className='overline'>x</span>y<span className='overline'>z</span><br />
                            b. F = x<span className='overline'>y</span>z + xy<span className='overline'>z</span> + x<span className='overline'>yz</span> + xy<br />
                            c. F = <span className='overline'>x</span>y + x<span className='overline'>y</span> + xy + <span className='overline'>xy</span><br />
                            d. F = (y + <span className='overline'>z</span>)(<span className='overline'>y</span> + z) + <span className='overline'>x</span> + y + <span className='overline'>z</span><br />
                            e. F = (x + <span className='overline'>y</span> + x<span className='overline'>y</span>)(xy + <span className='overline'>x</span>z + yz)<br />
                            f. F = (<span className='overline'>x</span> + y)(x + y)
                        </BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3_4 */}
                    <BaiTap.Div id="3_4">
                        <BaiTap.RightH3>3.4 Biểu đồ Karnaugh của hàm Boole</BaiTap.RightH3>
                        <BaiTap.RightP>
                            Dùng phương pháp Karnaugh tối thiểu hóa các hàm 3 biến sau:<br />
                        </BaiTap.RightP>
                        <BaiTap.RightP className='ml-5'>
                            a. F = xyz + x<span className='overline'>y</span>z + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z + <span className='overline'>xyz</span><br />
                            b. F = x<span className='overline'>y</span> + xyz + xy<span className='overline'>z</span> + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span><br />
                            c. F = xy<span className='overline'>z</span> + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>xy</span>z<br />
                            d. F = xyz + x<span className='overline'>y</span>z + x<span className='overline'>yz</span> + <span className='overline'>x</span>yz + <span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>xyz</span>
                        </BaiTap.RightP>
                        <BaiTap.RightP>
                            Dùng phương pháp Karnaugh tối thiểu hóa các hàm 4 biến sau:<br />
                        </BaiTap.RightP>
                        <BaiTap.RightP className='ml-5'>
                            a. F = wxyz + wx<span className='overline'>y</span>z + wx<span className='overline'>yz</span> + w<span className='overline'>x</span>y<span className='overline'>z</span> + w<span className='overline'>xy</span>z<br />
                            b. F = wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                            c. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>xy</span>z + w<span className='overline'>xyz</span> + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                            d. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + w<span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>w</span>xyz + <span className='overline'>wx</span>yz + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z
                        </BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3_5 */}
                    <BaiTap.Div id="3_5">
                        <BaiTap.RightH3>3.5 Phương pháp Quine-McCluskey</BaiTap.RightH3>
                        <BaiTap.RightP>
                            Dùng phương pháp Quine-McClusKey tổi thiểu hóa các hàm sau<br />
                        </BaiTap.RightP>
                        <BaiTap.RightP className='ml-5'>
                            a. F = xyz + <span className='overline'>x</span>yz + x<span className='overline'>yz</span> + x<span className='overline'>y</span>z<br />
                            b. F = wxyz + wx<span className='overline'>y</span>z + wx<span className='overline'>yz</span> + w<span className='overline'>x</span>y<span className='overline'>z</span> + w<span className='overline'>xy</span>z<br />
                            c. F = wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                            d. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>xy</span>z + w<span className='overline'>xyz</span> + <span className='overline'>w</span>x<span className='overline'>y</span>z + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                            e. F = wxyz + wxy<span className='overline'>z</span> + wx<span className='overline'>y</span>z + w<span className='overline'>x</span>yz + w<span className='overline'>x</span>y<span className='overline'>z</span> + <span className='overline'>w</span>xyz + <span className='overline'>wx</span>yz + <span className='overline'>wx</span>y<span className='overline'>z</span> + <span className='overline'>wxy</span>z<br />
                            f. F = <span className='overline'>wxy</span>zt + <span className='overline'>w</span>x<span className='overline'>y</span>zt + <span className='overline'>wx</span>yzt + w<span className='overline'>xy</span>zt + w<span className='overline'>x</span>yzt + <span className='overline'>w</span>xyzt + wxyzt
                        </BaiTap.RightP>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                    {/* 3_6 */}
                    <BaiTap.Div id="3_6"></BaiTap.Div>
                    <BaiTap.Div id="3_6">
                        <BaiTap.RightH3>3.6 Các cổng logic</BaiTap.RightH3>
                        <BaiTap.RightP>
                            Hãy vẽ mạch logic ứng với mỗi biểu thức Boole sau:<br />
                        </BaiTap.RightP>
                        <BaiTap.RightP className='ml-5'>
                            a. A<span className='overline'>B</span> + AB<span className='overline'>C</span><br />
                            b. <span className='overline'>A + BC</span> + B<br />
                            c. <span className='overline'>AB</span> + <span className='overline'>A + C</span><br />
                            d. (X + <span className='overline'>Y</span>)Z + <span className='overline'>X</span><br />
                            e. <span className='overline'>X</span>(<span className='overline'>Y + Z</span>)
                        </BaiTap.RightP>
                        <BaiTap.RightP>
                            Hãy xác định biểu thức Boole dành cho mỗi mạch ngắt chuyển như hình dưới đây:<br />
                        </BaiTap.RightP>
                        <BaiTap.Div>
                            <BaiTap.RightP>a.</BaiTap.RightP>
                            <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/mach_a.jpg').default} />
                        </BaiTap.Div>
                        <BaiTap.Div>
                            <BaiTap.RightP>b.</BaiTap.RightP>
                            <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole_baitap/mach_b.jpg').default} />
                        </BaiTap.Div>
                        {/* <BaiTap.Image style={{ marginLeft: "80px" }} src={require('../../images/boole/1.png').default} /> */}
                    </BaiTap.Div>
                    <ShowAnswer onClick={() => handleClick(7)}>Đáp án</ShowAnswer>
                    <ShowHint onClick={() => handleClick(8)} target="_blank">Gợi ý</ShowHint>
                </BaiTap.RightColumn>
            </BaiTap.Container>

        </>
    )
}

export default BaiTapPage
