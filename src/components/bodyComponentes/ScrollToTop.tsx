'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 md:bottom-8 right-6 md:right-10 z-50 p-3 rounded-full bg-primary text-white shadow-lg transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Voltar ao topo"
        >
            <FaArrowUp className='w-6 h-6 md:w-8 md:h-8' />
        </button>
    )
}
