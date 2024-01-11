import Image from 'next/image'
import logo from './logo.png'
import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <nav className="py-8 flex justify-between">
      <div>
        <Image src={logo} alt="logomark" />
      </div>
      <div>
        <p>Rio de Janeiro, RJ</p>
        <div>
          <a href="">
            <MapPin size={32} color="#c47f17" weight="fill" />
          </a>
        </div>
      </div>
    </nav>
  )
}
