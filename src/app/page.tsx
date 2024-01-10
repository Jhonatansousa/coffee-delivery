import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="title-xl">Hello worldasd!</h1>
      <Link className="text-cyan-500 hover:text-cyan-200" href="/teste">
        link para a pagina teste
      </Link>
    </div>
  )
}
