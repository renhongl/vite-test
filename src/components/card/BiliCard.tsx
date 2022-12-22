import styled from '@emotion/styled'
import React from 'react'
import {
    AiOutlinePlaySquare,
    AiOutlineComment,
    AiOutlinePlayCircle,
} from 'react-icons/ai'

export enum ContentType {
    UP,
    SHOW,
}

export interface IBiliCard {
    id: number
    title: string
    author: string
    date: string
    play: string
    comment: number
    time: string
    contentType: ContentType
    img: string
}

const defaultData = {
    id: 1,
    title: '世界杯决赛上演帽子戏法，姆巴佩赢得了这个世界的尊重吗',
    author: '巴黎姆学院',
    date: '12-5',
    play: '31万',
    comment: 955,
    time: '05:32',
    contentType: ContentType.SHOW,
    img: 'bg.jpg',
}

export function BiliCard({ data = defaultData }: { data?: IBiliCard }) {
    return (
        <Container>
            <Bg url={data.img}>
                <DarkBar />
                <Play>
                    <AiOutlinePlaySquare />
                    {data.play}
                </Play>
                <Comment>
                    <AiOutlineComment />
                    {data.comment}
                </Comment>
                <Time>{data.time}</Time>
                <PlayIcon />
            </Bg>
            <Title>{data.title}</Title>
            <InforRow>
                {data.contentType === ContentType.SHOW && (
                    <ShowIcon>综艺</ShowIcon>
                )}
                {data.contentType === ContentType.UP && <UpIcon>UP</UpIcon>}
                <Author>{data.author}</Author>
                <Dot />
                <Date>{data.date}</Date>
            </InforRow>
        </Container>
    )
}

const ShowIcon = styled.div`
    border-radius: 4px;
    border: 1px solid #ec2828;
    padding: 0 4px;
    font-size: 12px;
    transform: scale(0.8);
    color: #ec2828;
`

const UpIcon = styled.div`
    border-radius: 4px;
    border: 1px solid gray;
    padding: 0 4px;
    font-size: 12px;
    transform: scale(0.8);
    color: gray;
`

const PlayIcon = styled(AiOutlinePlayCircle)`
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: #fff;
    font-size: 2rem;
    background: #000000b3;
    border-radius: 10px;
    padding: 5px;
`

const Dot = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 6px;
`

const Time = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
    font-size: 12px;
`

const Comment = styled.div`
    position: absolute;
    left: 60px;
    bottom: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 12px;
`

const DarkBar = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0 0 10px 10px;
`

const Play = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 12px;
`

const InforRow = styled.div`
    display: flex;
    align-items: center;
`

const Date = styled.div`
    color: gray;
    font-size: 12px;
`

const Author = styled.div`
    color: gray;
    font-size: 12px;
`

const Title = styled.div`
    font-size: 1em;
    margin-top: 2%;
    margin-bottom: 1%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const Bg = styled.div`
    width: 100%;
    height: calc(100% - 72px);
    background-image: url(${({ url }: { url: string }) => url});
    border-radius: 10px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 14vw;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.2s linear;
    cursor: pointer;
    @media only screen and (max-width: 1320px) {
        height: 20vw;
    }
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        ${Bg} {
            border-radius: 0%;
        }
        ${DarkBar} {
            border-radius: 0%;
        }
        ${InforRow} {
            padding-left: 10px;
            padding-right: 10px;
        }
        ${Title} {
            padding-left: 10px;
            padding-right: 10px;
        }
        ${PlayIcon} {
            display: block;
        }
    }
`
