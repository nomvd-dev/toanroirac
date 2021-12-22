import React from 'react'
import { Button } from '../Button'
import { QuanheColumn1, QuanheContainer, QuanheContent, QuanheH, QuanheImage, QuanheP } from './QuanheElements'

const QuanheSection = ({ srcImg, tagH, tagP, buttonText }) => {
    return (
        <>
            <QuanheContainer>
                <QuanheContent>
                    <QuanheH>{tagH}</QuanheH>
                    <QuanheP>{tagP}</QuanheP>
                    <Button to='/toanroirac/quanhe'>{buttonText}</Button>
                </QuanheContent>
                <QuanheColumn1>
                    <QuanheImage src={srcImg} />
                </QuanheColumn1>
            </QuanheContainer>
        </>
    )
}

export default QuanheSection
