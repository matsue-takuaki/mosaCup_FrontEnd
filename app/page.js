import Image from 'next/image'
import styles from './page.module.css'
import SignIn from './SignIn'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 suppressHydrationWarning>hello world</h1>
      <SignIn/>
    </main>
  )
}
