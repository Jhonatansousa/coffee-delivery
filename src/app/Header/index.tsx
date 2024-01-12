import Image from 'next/image'
import logo from './logo.png'
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'

import { ShoppingCart } from '@phosphor-icons/react/dist/ssr/ShoppingCart'
export function Header() {
  return (
    <nav className="py-8 px-40 flex items-center justify-between bg-base-bg">
      <div>
        <Image src={logo} alt="logomark" />
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 flex items-center gap-1 bg-purple-light rounded-md">
          <MapPin size={32} color="#8047f8" weight="fill" />
          <p className="text-purple-dark text-s">Angra dos Reis, RJ</p>
        </div>
        <a className="relative p-2 rounded-md bg-yellow-light" href="#">
          <ShoppingCart size={32} color="#c47f17" weight="fill" />
          <div className="w-5 h-5 flex items-center justify-center bg-yellow-dark rounded-full absolute -top-2 -right-2">
            <p className="text-xs">3</p>
          </div>
        </a>
      </div>
    </nav>
  )
}
