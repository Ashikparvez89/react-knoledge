import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heads from './Heads'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmark/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <div className="container mx-auto">
      <Heads></Heads>
      <div className="flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>

    </>
  )
}

export default App
