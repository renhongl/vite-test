import React from 'react'
import './App.css'
import Onboarding from './views/Onboarding'
import styled from '@emotion/styled'
import { BrowserRouter } from 'react-router-dom'
import UnAuthApps from './routes/unAuthApps'

function App() {
    return (
        <BrowserRouter>
            <UnAuthApps />
        </BrowserRouter>
    )
}

export default App

const Container = styled.div`
    width: 100%;
    height: 100%;
`
