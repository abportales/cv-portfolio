import React from 'react'
import { Sidebar } from './portfolio/ui/components/Sidebar'
import { AppRouter } from './router/AppRouter'

export const PortafolioCVAPP = () => {
    return (
        <>
            <div className='mainGrid'>
                <Sidebar />
                <AppRouter />
            </div>
        </>
    )
}
