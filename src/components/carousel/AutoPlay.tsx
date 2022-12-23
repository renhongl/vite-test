import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { PacMan } from '../PacMan'

export interface Data {
    id: number
    url: string
    title: string
}

export function AutoPlay({
    data = [],
    delay = 4000,
    auto = true,
}: {
    data?: Data[]
    delay?: number
    auto?: boolean
}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let timer: number
        if (auto) {
            timer = setInterval(() => {
                if (index < -(data.length - 2)) {
                    setIndex(0)
                } else {
                    setIndex(index - 1)
                }
            }, delay)
        }
        return () => {
            timer && clearInterval(timer)
        }
    }, [index])

    return (
        <Container>
            {data.map((item, i) => (
                <Img key={item.id} url={item.url} i={index + i}></Img>
            ))}
            <Title>{data[-index].title}</Title>
            <DotRow>
                {data.map((item, i) => {
                    if (index + i !== 0) {
                        return (
                            <Dot
                                className={index + i === 0 ? 'active' : ''}
                                key={item.id}
                            ></Dot>
                        )
                    } else {
                        return <PacMan></PacMan>
                    }
                })}
            </DotRow>
            <ActionRow>
                <Button
                    onClick={() =>
                        index >= 0
                            ? setIndex(-(data.length - 1))
                            : setIndex(index + 1)
                    }
                >
                    <AiOutlineLeft></AiOutlineLeft>
                </Button>
                <Button
                    onClick={() =>
                        index < -(data.length - 2)
                            ? setIndex(0)
                            : setIndex(index - 1)
                    }
                >
                    <AiOutlineRight></AiOutlineRight>
                </Button>
            </ActionRow>
            <DarkBar></DarkBar>
        </Container>
    )
}

const Button = styled.div`
    background: #ffffff5d;
    padding: 6px 6px;
    border-radius: 8px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background: #ffffff87;
    }
`

const ActionRow = styled.div`
    position: absolute;
    bottom: 40px;
    height: 30px;
    z-index: 10;
    right: 10px;
    /* width: 50%; */
    display: flex;
    align-items: center;
`

const Title = styled.div`
    position: absolute;
    left: 20px;
    bottom: 40px;
    color: #fff;
    font-size: 16px;
    z-index: 11;
    font-weight: bold;
`

const DarkBar = styled.div`
    width: 100%;
    height: 40%;
    background: linear-gradient(#0000, #000000ab);
    position: absolute;
    left: 0;
    bottom: 0;
`

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff73;
    margin-right: 10px;
    &.active {
        background: #ffffff;
        transform: scale(1.4);
    }
`

const DotRow = styled.div`
    position: absolute;
    bottom: 10px;
    height: 30px;
    z-index: 10;
    left: 20px;
    width: 50%;
    display: flex;
    align-items: center;
`

const Img = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ url, i }: { url: string; i: number }) => url});
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
