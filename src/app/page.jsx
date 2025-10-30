import Button from '../app/components/Button'
import pageStyles from './page.module.css'
import homeStyles from './styles/home.module.css'

export default function Page() {
  return (
    <main className={` ${pageStyles.Page}`}>
        <h1 className={homeStyles.h1}>Hello, Welcome to my first Next.js App!</h1>
        <Button />
    </main>
  )
}