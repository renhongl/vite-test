import styled from '@emotion/styled'
import React from 'react'
import { BiliCard } from '../components/card'
import { ClassicLayout } from '../components/layout'
import { cardList, carouselList } from './mockData'
import { AutoPlay } from '../components/carousel'

export default function BiliDashboard() {
    return (
        <ClassicLayout>
            <Main>
                <AutoCon>
                    <AutoPlay data={carouselList} auto={true} />
                </AutoCon>
                {cardList.slice(0, 11).map((item) => (
                    <BiliCard key={item.id} data={item} />
                ))}
            </Main>
            <Line></Line>
            <Flow>
                {cardList.map((item) => (
                    <BiliCard key={item.id} data={item} />
                ))}
            </Flow>
        </ClassicLayout>
    )
}

const Line = styled.div`
    height: 4px;
    width: 80vw;
    background: #8080802e;
    margin: 20px auto;
    margin-bottom: 20px;
`

const AutoCon = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    height: 87%;
`

const Main = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
`

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
