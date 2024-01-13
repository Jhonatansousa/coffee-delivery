import Image from 'next/image'
import { Header } from './Header'
import coffeeImg from '../../public/coffeeImage.png'
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr/ShoppingCart'

export default function Home() {
  return (
    <main className="bg-base-bg bg-hero-bg">
      <Header />

      <div className="mx-40 py-24 flex items-center justify-between gap-14">
        <aside>
          <div className="max-w-147">
            <h1 className="mb-4 title-xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <h3 className="w-11/12 text-l text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </div>
          <div>
            <div>
              <i></i>
              <ShoppingCart
                className="p-2 bg-yellow-dark rounded-full"
                size={32}
                color="#fafafa"
                weight="fill"
              />
              <p className="text-m text-base-text">Compra simples e segura</p>
            </div>
            <div>
              <i></i>
              <p className="text-m text-base-text">
                Embalagem mantém o café intacto
              </p>
            </div>
            <div>
              <i></i>
              <p className="text-m text-base-text">
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <i></i>
              <p className="text-m text-base-text">
                O café chega fresquinho até você
              </p>
            </div>
          </div>
        </aside>
        <Image className="max-w-119" src={coffeeImg} alt="coffee image" />
      </div>
    </main>
  )
}
