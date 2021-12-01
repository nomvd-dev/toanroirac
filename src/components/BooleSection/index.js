import React from 'react'
import { Button } from '../Button'
import { BooleColumn1, BooleContainer, BooleContent, BooleH, BooleImage, BooleP } from './BooleElements'

const BooleSection = ({ srcImg, tagH, tagP, buttonText }) => {
    return (
        <>
            <BooleContainer>
                <BooleColumn1>
                    <BooleImage src={srcImg} />
                </BooleColumn1>
                <BooleContent>
                    <BooleH>{tagH}</BooleH>
                    <BooleP>{tagP}</BooleP>
                    <Button to='/toanroirac/boole'>{buttonText}</Button>
                </BooleContent>
            </BooleContainer>
        </>
    )
}

export default BooleSection
