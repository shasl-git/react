import logo from '/logo-name.svg'
import { useState } from 'react'
export default function Header() {
  
  const [now, newNow] = useState(new Date());

  setInterval(()=>newNow(new Date(),1000))
  return (
    <header>
        <img src={logo} alt={'result'} />
      {/* <h3>shasl educate</h3> просто коммментарий*/}
      
      <span>тут будет время: {now.toLocaleTimeString()}</span>
    </header>
  )
}
