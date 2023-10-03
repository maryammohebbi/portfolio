import React from 'react'

function Portfolio() {
  return (
    <div className='container mb-20'>

      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Portfolio</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-4 h-72 rounded-lg">
          <div>
              <img src="" alt="" />
          </div>
          <div>
              <a href="">Preview</a>
              <a href="">Source Code</a>
          </div>
        </div>
        <div class="bg-gray-100 p-4 h-72 rounded-lg">Column 2</div>
        <div class="bg-gray-100 p-4 h-72 rounded-lg">Column 3</div>
        <div class="bg-gray-200 p-4 h-72 rounded-lg">c-4</div>
        <div class="bg-gray-200 p-4 h-72 rounded-lg">c-5</div>
        <div class="bg-gray-200 p-4 h-72 rounded-lg">c-6</div>

      </div>

    </div>
  )
}

export default Portfolio