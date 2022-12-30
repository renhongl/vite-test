import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import { AiOutlineBug } from 'react-icons/ai'

export interface IconStepData {
    icon?: ReactElement
    text?: string
}

export function IconStep({ data }: { data: IconStepData }) {
    return (
        <Container>
            <Step>{data.icon}</Step>
            <Title>{data.text}</Title>
        </Container>
    )
}

const Title = styled.div`
    position: absolute;
    left: 40px;
    top: 8px;
`

const Step = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #cbcbcb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #303030;
`

const Container = styled.div`
    display: flex;
    position: relative;
    height: 34px;
    align-items: center;
    margin-bottom: 10px;
`
