import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CustomLink from './CustomLink/CustomLink'
import style from './layout.module.css'
function Layout() {
  return (
    <div className={style.wraper}>
    <header className={style.header}>
        <Link to='/'>Главная</Link>
    </header>
    <nav className={style.nav}>
    <CustomLink to='/users'>Пользователи</CustomLink>
    <CustomLink to='/bushes'>Кустарники</CustomLink>
    <CustomLink to='/trees'>Деревья</CustomLink>
    <CustomLink to='/openground'>Открытый грунт</CustomLink>
    <CustomLink to='/greenhouse'>Теплица</CustomLink>
    <CustomLink to='flowers'>Цветы</CustomLink>
    <CustomLink to='/microgreens'>Микрозелень</CustomLink>
    </nav>
    <div className={style.content}>
      <Outlet/>
    </div>
    
    </div>
  )
}

export default Layout