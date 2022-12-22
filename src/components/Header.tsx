import React, { useEffect, useRef, useState } from 'react'
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
    const [small, setSmall] = useState(false)
    const smallRef = useRef(small)

    useEffect(() => {
        const root = document.getElementById('root')
        root?.addEventListener('scroll', () => {
            console.log(smallRef.current)
            if (root.scrollTop >= 300) {
                if (!smallRef.current) {
                    smallRef.current = true
                    setSmall(true)
                }
            } else {
                if (smallRef.current) {
                    smallRef.current = false
                    setSmall(false)
                }
            }
        })

        return () => {
            root?.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <Container className={small ? 'small' : ''}>
            <DarkBarLeft className={small ? 'small' : ''} />
            <HeaderRow className={small ? 'small' : ''}>
                <Navi>
                    <NaviItem className={small ? 'small' : ''}>首页</NaviItem>
                    <NaviItem className={small ? 'small' : ''}>番剧</NaviItem>
                    <NaviItem className={small ? 'small' : ''}>直播</NaviItem>
                    <NaviItem className={small ? 'small' : ''}>
                        游戏中心
                    </NaviItem>
                    <NaviItem className={small ? 'small' : ''}>会员购</NaviItem>
                    <NaviItem className={small ? 'small' : ''}>动漫</NaviItem>
                </Navi>
                <Profiles>
                    <Avator></Avator>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlinePayCircle />
                        <span>大会员</span>
                    </ProItem>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlineMessage />
                        <span>消息</span>
                    </ProItem>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlineChrome />
                        <span>动态</span>
                    </ProItem>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlineStar />
                        <span>收藏</span>
                    </ProItem>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlineHistory />
                        <span>历史</span>
                    </ProItem>
                    <ProItem className={small ? 'small' : ''}>
                        <AiOutlineSlack />
                        <span>创作中心</span>
                    </ProItem>
                    <PostButton>
                        <AiOutlineCloudUpload />
                        <span>投稿</span>
                    </PostButton>
                </Profiles>
            </HeaderRow>
            <Logo />
            <DarkBarRight className={small ? 'small' : ''} />
        </Container>
    )
}

const jump = keyframes`
    0%, 100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-4px);
    }
`

const HeaderRow = styled.div`
    height: 70px;
    background: none;
    width: 100%;
    position: absolute;
    &.small {
        background: white;
        border-bottom: 1px solid #ebebeb;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
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
    span {
        color: #fff;
        &.small {
            color: #000;
        }
    }
`

const ProItem = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.small {
        color: #000;
    }
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
    &.small {
        background: none;
    }
`

const DarkBarLeft = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, #000000ab, #0000);
    position: absolute;
    left: 0;
    &.small {
        background: none;
    }
`

const NaviItem = styled.div`
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
        animation: ${jump} 0.2s ease-in-out;
    }
    &.small {
        color: #000;
    }
`

const Navi = styled.div`
    display: flex;
    position: absolute;
    top: 25px;
    left: 20px;
    z-index: 10;
`

const Logo = styled.div`
    background-image: url(bili.png);
    width: 200px;
    height: 70px;
    -webkit-background-size: contain;
    background-size: contain;
    -webkit-background-position: center center;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    position: absolute;
    left: 7vw;
    bottom: 10px;
`

const Avator = styled.div`
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
    height: 15%;
    background-color: gray;
    background-image: url(bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
`
