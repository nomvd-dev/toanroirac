import React from 'react'
import { Button } from '../Button'
import { LogicContainer, LogicContent, LogicH, LogicImage, QuanheColumn1 } from './LogicElements'

const LogicSection = ({ srcImg, tagH, tagP, buttonText }) => {
    return (
        <>
            <LogicContainer id='logic'>
                <QuanheColumn1>
                    <LogicImage src={srcImg} />
                </QuanheColumn1>
                <LogicContent>
                    <LogicH>{tagH}</LogicH>
                    {/* <LogicP>{tagP}</LogicP> */}
                    <Button to='/toanroirac/logic'>{buttonText}</Button>
                </LogicContent>
            </LogicContainer>
        </>
    )
}

export default LogicSection
