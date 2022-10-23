import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function PageLayout() {
  return (
    <div>
        <Header/>

        <Outlet/>

        <div>footer</div>
    </div>
  )
}
