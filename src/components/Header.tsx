import React from 'react'
import { ToggleTheme } from './ToggleTheme'

export default function Header() {
  return(
    <header className='w-full h-16'>
      <div className='flex justify-between items-center h-full max-w-[900px] mx-auto'>
        <p>Jogo da Forca</p>
        <div className='flex gap-4 items-center'>
          <ToggleTheme />
          <p>Entrar</p>
        </div>
      </div>
    </header>
  )
}