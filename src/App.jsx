import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Pages/Main/index'
import Receitas from './components/Pages/Receitas'
import { globalStyles } from './GlobalStyle'

function App() {

  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/receitas' element={<Receitas />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
