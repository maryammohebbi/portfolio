import React from 'react'

function Blog() {
  return (
    <div className='mb-20'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>My Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-4 h-72 rounded-lg"></div>
        <div class="bg-gray-100 p-4 h-72 rounded-lg"></div>
        <div class="bg-gray-100 p-4 h-72 rounded-lg"></div>
      </div>

    </div>
  )
}

export default Blog