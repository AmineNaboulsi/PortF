import Header from './components/Header'
import Footer from './components/Footer'
import FloatingBar from './components/FloatingBar'
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider>
      <div className='md:max-w-[80%] xl:max-w-[60%] max-w-[90%] pt-8 mx-auto'>
        <Header />
          <main>
          </main>
            <FloatingBar />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
