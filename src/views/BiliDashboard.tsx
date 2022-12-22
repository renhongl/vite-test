import styled from '@emotion/styled'
import React from 'react'
import { BiliCard } from '../components/card'
import { ClassicLayout } from '../components/lib'
import { cardList } from './mockData'

export default function BiliDashboard() {
    return (
        <ClassicLayout>
            <Flow>
                {cardList.map((item) => (
                    <BiliCard data={item} />
                ))}
            </Flow>
        </ClassicLayout>
    )
}

const Flow = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media only screen and (max-width: 1320px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
