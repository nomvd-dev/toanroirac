import React from 'react';
import { DeThiPageContainer, DeThiDiv, DeThiContent, DeThiH4, DeThiLink } from './DeThiElements';
import pdf1 from '../../images/dethi/De_mau_ky_2_2020_2021.pdf';
import pdf2 from '../../images/dethi/De_on_tap_cuoi_ky.pdf';
import pdf3 from '../../images/dethi/De_on_tap_cuoi_ky_DA.pdf';

const DeThiPage = () => {
    return (
        <>
            <DeThiPageContainer />
            <DeThiContent>
                <DeThiDiv>
                    <DeThiH4>Đề thi mẫu cuối học kỳ 2, năm học 2020-2021 + Đáp án</DeThiH4>
                    <DeThiLink href={pdf1} target="_blank" rel="noreferrer">Chi tiết</DeThiLink>
                </DeThiDiv>
                <DeThiDiv>
                    <DeThiH4>Đề ôn tập cuối kỳ - Bộ môn Toán Lý</DeThiH4>
                    <DeThiLink href={pdf2} target="_blank" rel="noreferrer">Chi tiết</DeThiLink>
                </DeThiDiv>
                <DeThiDiv>
                    <DeThiH4>Đề ôn tập cuối kỳ - Bộ môn Toán Lý + Đáp án</DeThiH4>
                    <DeThiLink href={pdf3} target="_blank" rel="noreferrer">Chi tiết</DeThiLink>
                </DeThiDiv>
            </DeThiContent>
        </>
    )
}

export default DeThiPage
