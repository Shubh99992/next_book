import React from 'react'

import PropTypes from 'prop-types'

const Slide = (props) => {
  return (
    <>
      <div
        data-type="slide"
        className={`slide-slide slide ${props.rootClassName} `}
      >
        <div className="slide-max-wdith max-content-container">
          <h1 className="slide-text Heading2">{props.heading}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .slide-slide {
            align-items: center;
            justify-content: center;
          }
          .slide-max-wdith {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
          }
          .slide-text {
            color: var(--dl-color-scheme-white);
          }
          .slide-root-class-name {
            background-color: #ff9b1d;
          }
          .slide-root-class-name1 {
            background-color: #15bd19;
          }
          .slide-root-class-name2 {
            background-color: #fb275a;
          }
          .slide-root-class-name3 {
            background-color: #0975f1;
          }
          .slide-root-class-name4 {
            background-color: #0d1f3a;
          }
          @media (max-width: 991px) {
            .slide-root-class-name4 {
              background-color: #0d1f3a;
            }
          }
        `}
      </style>
    </>
  )
}

Slide.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
