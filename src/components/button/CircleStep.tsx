import styled from '@emotion/styled'
import React from 'react'

export interface CircleStepData {
    step?: number
    title?: string
    desc?: string
}

const defaultData = {
    step: 1,
    title: 'no title',
    desc: 'no desc',
}

export function CircleStep({ data = defaultData }: { data?: CircleStepData }) {
    return (
        <Container>
            <Step>{data.step}</Step>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
        </Container>
    )
}

const Desc = styled.div`
    position: absolute;
    left: 40px;
    bottom: 0;
    font-size: 12px;
    color: gray;
`

const Title = styled.div`
    position: absolute;
    left: 40px;
    top: 0;
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
