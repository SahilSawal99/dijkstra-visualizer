import Main from '../components/main'
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className='m-2 min-w-[1200px] flex justify-center bg-gray-100 dark:bg-gray-900 transition-colors'>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </main>
  )
}
