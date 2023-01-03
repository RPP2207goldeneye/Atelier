import React, { useState, useEffect } from 'react'
import * as css from './ImageGalleryCSS.jsx'


const DefaultGallery = (props) => {
  let currentStyle = props.style || {}
  let currentImage = props.main || ''
  let imageArr = props.images || []
  let display = []
  let leftArrowOption, rightArrowOption

  if (props.style === {}) {
    currentStyle.name = ''
  } else {
    imageArr.map((photo) => {
      display.push(photo.url)
    })
  }

  display.forEach((photo, index) => {
    if (photo === currentImage) {
      if (index === 0) {
        leftArrowOption = photo
      } else {
        leftArrowOption = display[index - 1]
      }

      if (index === imageArr.length - 1) {
        rightArrowOption = photo
      } else {
        rightArrowOption = display[index + 1]
      }
    }
  })

  let handleClick = (e) => {
    e.preventDefault()
    let url = e.target.src
    props.thumbnailChange(url)
  }

  let handleArrowLeft = () => {
    props.thumbnailChange(leftArrowOption)
  }

  let handleArrowRight = () => {
    props.thumbnailChange(rightArrowOption)
  }

  return (
    <>
      <div style={css.mainImageContainer}>
        <img src={currentImage} style={css.mainImage} alt={currentStyle.name} onClick={() => props.onClick()} id="default-view-click" widgetname="Overview" />
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.rightArrowOverlay} onClick={() => handleArrowRight()} id="default-right-arrow" widgetname="Overview"></div>
          </div>
        </div>
        <div style={css.overlay}>
          <div style={css.arrowOverlay}>
            <div style={css.leftArrowOverlay} onClick={() => handleArrowLeft()} id="default-left-arrow" widgetname="Overview"></div>
          </div>
        </div>
      </div>

      <div style={css.thumbnailContainer}>
        {display.map((photo, index) => {
          if (photo === currentImage) {
            return <img key={index} src={photo} style={css.thumbnailSelected} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumnail-img-selected" widgetname="Overview" />
          } else {
            return <img key={index} src={photo} style={css.thumbnailImage} alt="thumnail image" height="75" onClick={(e) => handleClick(e)} id="default-view-thumbnail-img" widgetname="Overview" />
          }
        })}
      </div>
    </>
  )
}

export default DefaultGallery;