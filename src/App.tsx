
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
      <Navbar/>
    <section className='main-section'>
      <div className='page-heading'>
        <h1>Track your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
    </section>
    </main>
  )
}

export default App
