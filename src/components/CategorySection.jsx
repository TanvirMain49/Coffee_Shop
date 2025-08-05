import React from 'react'

const CategorySection = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div>
        <h1 className="font-heading text-secondary">Coffee</h1>
        {/* OR using the CSS variable directly */}
        <h1 className="font-[Anton]">Coffee</h1>
        <p>Take a coffee and have a great day</p>
      </div>
    </div>
  )
}

export default CategorySection
