import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogpage from './Blogpage'
import Homepage from './Homepage'
import PageNotFound from './PageNotFound'
import PostNewBlog from './PostNewBlog'

const Routepage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/blog/:id' element={<Blogpage/>}/>
            <Route path='/blog/create' element={<PostNewBlog/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default Routepage