import Link from 'next/link'
import { Header } from '../Header'

export default function checkout() {
  return (
    <div>
      <Header />
      <h1 className="text-8xl">checkout page</h1>
      <Link className="text-cyan-500 hover:text-cyan-200" href="/">
        voltar para home
      </Link>
    </div>
  )
}
