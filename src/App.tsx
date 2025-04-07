import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingBar from './components/FloatingBar'
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider>
      <Header />
        <main>
        </main>
          <FloatingBar />
      <Footer />
    </ThemeProvider>
  )
}

export default App
