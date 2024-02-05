import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
  )
}

export default App
