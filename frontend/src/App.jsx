import React from 'react'
import Blogs from './pages/blogs/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Create from './pages/create/create'
import Update from './pages/update/update'

const App = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
