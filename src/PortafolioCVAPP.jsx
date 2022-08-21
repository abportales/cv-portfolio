import React from 'react'
import { Sidebar } from './portfolio/ui/components/Sidebar'
import { AppRouter } from './router/AppRouter'

export const PortafolioCVAPP = () => {
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='mainSideBar'>
                    <Sidebar />
                </div>
                <div className='mainContent'>
                    <AppRouter />
                </div>
            </div>
        </>
    )
}
