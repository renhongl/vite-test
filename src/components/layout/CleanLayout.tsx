import React, { ReactNode } from 'react'
import { CleanHeader } from '../header'
import styled from '@emotion/styled'

export function CleanLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <CleanHeader></CleanHeader>
            <Main>{children}</Main>
        </Container>
    )
}

const Main = styled.main`
    position: relative;
    top: -60px;
    width: 60vw;
    margin: 0 auto;
`

const Container = styled.div`
    height: 100%;
`
