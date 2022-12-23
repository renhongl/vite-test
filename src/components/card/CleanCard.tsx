import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

export function CleanCard({
    title,
    children,
}: {
    title?: string
    children?: ReactNode
}) {
    return (
        <Container>
            {title && <Header>{title}</Header>}
            <Content>{children}</Content>
        </Container>
    )
}

const Content = styled.div`
    padding: 10px;
`

const Header = styled.div`
    font-size: 18px;
`

const Container = styled.div`
    border: 1px solid #d3d3d3;
    display: inline-block;
    /* width: 100%;
    height: 100%; */
    border-radius: 4px;
    padding: 10px;
    background: #fff;
`
