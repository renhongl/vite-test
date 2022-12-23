import styled from '@emotion/styled'
import React from 'react'

export function CleanHeader() {
    return (
        <Container>
            <TitleRow>
                <Logo></Logo>
                <Title>哔哩哔哩</Title>
                <Tag>入职</Tag>
            </TitleRow>
        </Container>
    )
}

const Tag = styled.div`
    background-color: #fff;
    color: gray;
    border-radius: 4px;
    margin-left: 10px;
    height: 24px;
    line-height: 24px;
    width: 40px;
    text-align: center;
`

const Title = styled.div`
    font-size: 22px;
    color: #fff;
    /* padding: 2px 4px; */
    /* border-radius: 4px; */
`

const TitleRow = styled.div`
    display: flex;
    position: absolute;
    left: 20px;
    top: 20px;
    align-items: center;
`

const Logo = styled.div`
    height: 40px;
    width: 100px;
    /* background-color: gray; */
    background-image: url(bili.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-right: 10px;
`

const Container = styled.div`
    height: 40%;
    background-color: gray;
    background-image: url(https://i.pravatar.cc/800);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
`
