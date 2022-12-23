import styled from '@emotion/styled'
import React from 'react'
import { CircleStep, IconStep } from '../components/button'
import { CleanCard } from '../components/card'
import { CleanLayout } from '../components/layout'

export default function Onboarding() {
    return (
        <CleanLayout>
            <Content>
                <Task>
                    <CleanCard title={'入职任务'}>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                        <CircleStep step={3}></CircleStep>
                    </CleanCard>
                    <CleanCard title={'入职信息'}>
                        <IconStep text='09:30 GMT+8 | 2021年6月13日'></IconStep>
                        <IconStep text='远程入职'></IconStep>
                    </CleanCard>
                    <CleanCard title={'常见问题'}>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                    </CleanCard>
                </Task>
                <Infor>
                    <CleanCard title={'个人信息'}>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                    </CleanCard>
                    <CleanCard title={'帮助中心'}>
                        <CircleStep step={1}></CircleStep>
                        <CircleStep step={2}></CircleStep>
                    </CleanCard>
                </Infor>
            </Content>
        </CleanLayout>
    )
}

const Infor = styled.div`
    display: grid;
    gap: 20px;
    grid-template-rows: 1fr 1fr 1fr;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`

const Task = styled.section`
    width: 100%;
    height: 600px;
    /* background-color: red; */
    display: grid;
    gap: 20px;
    grid-template-rows: auto auto auto;
`
