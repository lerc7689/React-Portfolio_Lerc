import React from 'react'
import { ThreeDot } from 'react-loading-indicators'
import "./LoadingComponent.css"

const LoadingComponent = () => {
  return (
    <div className='loadingContainer'>
        <ThreeDot color="#e47c05" size="medium" text="" textColor="" />
    </div>
  )
}

export default LoadingComponent