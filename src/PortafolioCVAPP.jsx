import React from 'react'
import { Sidebar } from './portfolio/ui/components/Sidebar'
import { AppRouter } from './router/AppRouter'

export const PortafolioCVAPP = () => {
    return (
        <>
            <div className='d-flex'>
                <div className='d-flex w-25'>
                    <Sidebar />
                </div>
                <div className='d-flex w-75'>
                    <AppRouter />
                </div>
            </div>
        </>
    )
}
