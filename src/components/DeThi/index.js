import React from 'react';
// import { Container, Div } from '../DetailCoursesElements';
import { DeThiPageContainer, DeThiDiv, DeThiContent, DeThiH4, DeThiLink } from './DeThiElements';

const DeThiPage = () => {
    return (
        <>
            <DeThiPageContainer />
            <DeThiContent>
                <DeThiDiv>
                    <DeThiH4>Đề thi mẫu cuối học kỳ 2, năm học 2020-2021</DeThiH4>
                    <DeThiLink href='http://127.0.0.1:5500/images/dethi/De_mau_ky_2_2020_2021.pdf' target="_blank" rel="noreferrer">Chi tiết</DeThiLink>
                </DeThiDiv>
                <DeThiDiv>
                    <DeThiH4>Đề ôn tập cuối kỳ - Bộ môn Toán Lý</DeThiH4>
                    <DeThiLink href='http://127.0.0.1:5500/images/dethi/De_on_tap_cuoi_ky.pdf' target="_blank" rel="noreferrer">Chi tiết</DeThiLink>
                </DeThiDiv>
            </DeThiContent>
        </>
    )
}

export default DeThiPage
