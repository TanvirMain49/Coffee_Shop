import React from 'react'
import HoverExpand from './ui/hover-expand'

const images = [
  "public/cafe-1.jpg",
  "public/coffee-2.jpg",
  "public/cafe-2.jpg",
  "public/melted-cheese-burger.jpg",
  "public/coffee-1.jpg",
  "public/pepperoni-pizza-slice.jpg",
  "public/coffee-3.jpg",
]

export default function PairEnjoySection() {

  return (
    <div className='py-36'>
       <h1 className="text-secondary text-center font-semibold text-6xl uppercase tracking-wider mb-2">Brew.Pair.Enjoy</h1>
       <HoverExpand
          images={images}
          initialSelectedIndex={0}
          maxThumbnails={11}
    />
    </div>
  )
}
