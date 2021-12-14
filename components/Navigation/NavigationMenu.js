import React from 'react'

export default function NavigationMenu({shouldOpen, closeNavMenu}) {
  return (
    <div className={!shouldOpen ? 'hidden' : ''}>
      <div>

      </div>
    </div>
  )
}
