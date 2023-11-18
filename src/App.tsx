import Header from './components/Header'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  )
}

export default App
