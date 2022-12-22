import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import BiliDashboard from '../views/BiliDashboard'
import Onboarding from '../views/Onboarding'

export default function unAuthApps() {
    return (
        <Routes>
            <Route path='public'>
                <Route index element={<Onboarding />}></Route>
                <Route path='bili' element={<BiliDashboard />}></Route>
            </Route>
        </Routes>
    )
}
