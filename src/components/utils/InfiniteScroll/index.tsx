import React, { useEffect, useRef } from 'react'

import { Container } from './styles'

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

interface Props {
  fetchMore(): void
  children: JSX.Element
}

const InfiniteScroll: React.FC<Props> = ({ fetchMore, children }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finalOptions = { ...defaultOptions }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= finalOptions.threshold) {
        observer.disconnect()
        fetchMore()
      }
    }, finalOptions)

    observer.observe(containerRef.current!)

    return () => {
      observer.disconnect()
    }
  }, [fetchMore])

  console.log('inf sc - - ')
  return <Container ref={containerRef}>{children}</Container>
}

export default InfiniteScroll
