import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

export function AutoPlay() {
    const [index, setIndex] = useState(0)
    console.log(index)
    useEffect(() => {
        const timer = setInterval(() => {
            if (index < -2) {
                setIndex(0)
            } else {
                setIndex(index - 1)
            }
        }, 5000)
        return () => clearInterval(timer)
    }, [index])
    return (
        <Container>
            <Img url={1} i={index}>
                1
            </Img>
            <Img url={2} i={index + 1}>
                2
            </Img>
            <Img url={3} i={index + 2}>
                3
            </Img>
            <Img url={4} i={index + 3}>
                4
            </Img>
        </Container>
    )
}

const Img = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ url, i }: { url: number; i: number }) =>
        'https://i.pravatar.cc/50' + url});
    position: absolute;
    left: ${({ i }: { i: number }) => i * 100 + '%'};
    transition: all 0.5s linear;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: gray;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
`
