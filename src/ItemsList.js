import React, { useLayoutEffect, useRef } from 'react'
import Item from './Item'
import './styles/itemlist_styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ItemsList = ({ items = [], onItemClick }) => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (!gsap.plugins.ScrollTrigger) gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current || items.length === 0) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.selector(containerRef)('.item')
      if (!cards.length) return

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        once: true,
        onEnter: batch => {
          gsap.to(batch, {
            '--ty': '0px',
            opacity: 1,
            duration: .6,
            ease: 'power2.out',
            stagger: { each: .08, from: 'start' }
          })
        }
      })

      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { '--s': 1.05, duration: .18, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { '--s': 1, duration: .18, ease: 'power2.out' })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [items])

  return (
    <div ref={containerRef} className='items products'>
      {items.map(item =>
        <Item key={item.id} item={item} onClick={onItemClick} />
      )}
    </div>
  )
}

export default ItemsList
