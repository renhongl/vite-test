import styled from '@emotion/styled'
import React, { useState } from 'react'

export interface SubTitleData {
    id: number
    text: string
}

export function SubTitle({ data }: { data: SubTitleData[] }) {
    const [index, setIndex] = useState(0)

    return (
        <Container>
            <Active i={index}>{data[index].text}</Active>
            {data.map((item, i) => (
                <Item
                    key={item.id}
                    onClick={(e: any) => {
                        console.log(i)
                        setIndex(i)
                    }}
                >
                    {item.text}
                </Item>
            ))}
        </Container>
    )
}

const Active = styled.div`
    background: #229dff;
    border-radius: 20px;
    position: absolute;
    left: ${({ i }: { i: number }) => i * 60 + 'px'};
    z-index: 1;
    width: 60px;
    height: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    color: #fff;
`

const Item = styled.div`
    border-radius: 20px;
    width: 60px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    color: #525252;
`

const Container = styled.div`
    display: inline-flex;
    position: relative;
    background: #dbdbdb;
    border-radius: 20px;
    width: 80vw;
    margin: 0 auto;
`
