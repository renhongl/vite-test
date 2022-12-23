import styled from '@emotion/styled'
import React from 'react'

export function PacMan() {
    return (
        <Container>
            <Top></Top>
            <Bottom></Bottom>
        </Container>
    )
}

const Bottom = styled.div`
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 8px solid #fff;
    border-left: 8px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(-45deg);
    animation: rotate 0.5s linear 2;
    @keyframes rotate {
        from {
            transform: rotate(-45deg);
        }
        to {
            transform: rotate(10deg);
        }
    }
`

const Top = styled.div`
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top: 8px solid #fff;
    border-left: 8px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(45deg);
    animation: rotate2 0.5s linear 2;
    @keyframes rotate2 {
        from {
            transform: rotate(45deg);
        }
        to {
            transform: rotate(-10deg);
        }
    }
`

const Container = styled.div`
    width: 16px;
    height: 16px;
    background-color: none;
    border-radius: 50%;
    position: relative;
    margin-right: 10px;
`
