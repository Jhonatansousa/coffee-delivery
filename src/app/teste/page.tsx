import Link from 'next/link'

export default function teste() {
  return (
    <div>
      <h1 className="text-8xl">test page</h1>
      <Link className="text-cyan-500 hover:text-cyan-200" href="/">
        voltar para home
      </Link>
    </div>
  )
}
