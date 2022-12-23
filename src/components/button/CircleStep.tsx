import styled from '@emotion/styled'
import React from 'react'

export function CircleStep({ step }: { step: number }) {
    return (
        <Container>
            <Step>{step}</Step>
            <Title>填写个人信息</Title>
            <Desc>即将审核完成</Desc>
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
