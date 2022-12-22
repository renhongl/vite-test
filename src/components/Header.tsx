import React from 'react'
import styled from '@emotion/styled'
import {
    AiOutlineChrome,
    AiOutlineCloudUpload,
    AiOutlineHistory,
    AiOutlineMessage,
    AiOutlinePayCircle,
    AiOutlineSlack,
    AiOutlineStar,
} from 'react-icons/ai'
import { keyframes } from '@emotion/react'

export function Header() {
    return (
        <Container>
            <DarkBarLeft />
            <Navi>
                <NaviItem>首页</NaviItem>
                <NaviItem>番剧</NaviItem>
                <NaviItem>直播</NaviItem>
                <NaviItem>游戏中心</NaviItem>
                <NaviItem>会员购</NaviItem>
                <NaviItem>漫画</NaviItem>
            </Navi>
            <Profiles>
                <Logo></Logo>
                <ProItem>
                    <AiOutlinePayCircle />
                    <span>大会员</span>
                </ProItem>
                <ProItem>
                    <AiOutlineMessage />
                    <span>消息</span>
                </ProItem>
                <ProItem>
                    <AiOutlineChrome />
                    <span>动态</span>
                </ProItem>
                <ProItem>
                    <AiOutlineStar />
                    <span>收藏</span>
                </ProItem>
                <ProItem>
                    <AiOutlineHistory />
                    <span>历史</span>
                </ProItem>
                <ProItem>
                    <AiOutlineSlack />
                    <span>创作中心</span>
                </ProItem>
                <PostButton>
                    <AiOutlineCloudUpload />
                    <div>投稿</div>
                </PostButton>
            </Profiles>
            <DarkBarRight />
        </Container>
    )
}

const jump = keyframes`
    0%, 100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-6px);
    }
`

const PostButton = styled.div`
    background-color: #fa3152;
    border-radius: 4px;
    padding: 2px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 30px;
    svg {
        color: #fff;
        font-size: 20px;
        margin-right: 4px;
    }
    div {
        color: #fff;
    }
`

const ProItem = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
        font-size: 12px;
    }
    svg {
        font-size: 25px;
    }
    &:hover svg {
        animation: ${jump} 0.2s ease-in-out;
    }
`

const Profiles = styled.div`
    display: flex;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 10;
    justify-content: space-between;
    width: 480px;
    align-items: center;
`

const DarkBarRight = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, #000000ab, #0000);
    right: 0;
`

const DarkBarLeft = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, #000000ab, #0000);
    position: absolute;
    left: 0;
`

const NaviItem = styled.div`
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
        animation: ${jump} 0.2s ease-in-out;
    }
`

const Navi = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
`

const Logo = styled.div`
    background-image: url(https://i.pravatar.cc/100);
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    cursor: pointer;
`

const Container = styled.div`
    height: 20vw;
    background-color: gray;
    background-image: url(bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
`
