import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Profetto Web</title>
        <meta name="description" content="pablo profetto web abogado músico escritor " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Bienvenido a mi&nbsp;
            <code className={styles.code}>Sitio Web</code>
          </p>
          <div>
            <a
              href="https://devzeppelin.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/devz.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={150}
                height={150}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            /* className={styles.logo} */
            src="/name.png"
            alt="Next.js Logo"
            width={400}
            height={80}
            priority
          />         
          
        </div>

        <div className={styles.grid}>
          <Link
            href="/mantenimiento"
            className={styles.card}            
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Abogado <span>&gt;</span>
            </h2>
            <p className={inter.className}>
              ¡Podés agendar una cita con migo!. Conocé acerca de mi profesión, asesoramiento y servicios en línea útiles para vos.
            </p>
          </Link>

          <Link
            href="/mantenimiento"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Escritor <span>&gt;</span>
            </h2>
            <p className={inter.className}>
              Además de dos libros, he escrito muchos cuentos. Entrá y empapate un poco de mi amor por la literatura.
            </p>
          </Link>

          <Link
            href="/mantenimiento"
            className={styles.card}            
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Músico <span>&gt;</span>
            </h2>
            <p className={inter.className}>
              -Incubando Prócer- es mi banda, y también tengo muchas microcanciones. ¿Querés saber más? ¡Click!
            </p>
          </Link>

          <a
            href="https:citroaventura.ar"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Citroaventura <span>&gt;</span>
            </h2>
            <p className={inter.className}>
              Mi Citroen 3CV rodando 30.000 km por el viejo mundo. Entrá a citroaventura.ar y viajalo con nosotros
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
