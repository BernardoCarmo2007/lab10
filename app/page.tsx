import MagiaDoJSX from '@/app/MagiaDoJSX/MagiaDoJSX'
import Saudacao from '@/app/Saudacao/Saudacao'
import Contador from '@/app/contador10/contador10'
import contador10 from '@/app/contador10/contador10'

export default function HomePage() {

  return (
    <>
      <h2>Innnterfaces Web Modernas</h2>
      <p>O que aprendeste até agora (HTML, CSS, JavaScript) 
        será agora potenciado pelo React & Next.js.</p>
      <p>React é uma biblioteca JS para construir interfaces de utilizador (UI) através de componentes.</p>
        <section>
                <h2>Contador</h2>
                <div className="bg-blue-300 px-2 py-4 rounded-xl">
                    <p>
                      Lab 10 Ex 1 contador
                    </p>
                    
                    
                </div>
            </section>
      <MagiaDoJSX />

      <Saudacao />
      <Contador />
    </>
  )
}
