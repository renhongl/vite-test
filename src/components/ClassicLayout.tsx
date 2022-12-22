import React, { ReactNode } from 'react'
import { Header } from './Header'
import styled from '@emotion/styled'

export function ClassicLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <Header></Header>
            <main>{children}</main>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
`
