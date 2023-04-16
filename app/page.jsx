import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li><Link href='/'>home</Link></li>
        <li><Link href='/about'>about</Link></li>
        <li><Link href='/about/team'>team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage