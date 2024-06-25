import React from 'react'

import PropTypes from 'prop-types'

const Testimonial18 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial18-max-width thq-section-max-width">
          <div className="testimonial18-container thq-grid-2">
            {/* Book Components */}
            <div className="testimonial18-section-title">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <div className="testimonial18-container1"></div>
              <div className="testimonial18-container2">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="testimonial18-image"
                />
              </div>
              <p className="thq-body-large">{props.content1}</p>
              <div className="testimonial18-container3">
                <button
                  type="button"
                  className="testimonial18-button thq-button-outline"
                >
                  {props.action2}
                </button>
                <button
                  type="button"
                  className="testimonial18-button1 thq-button-filled"
                >
                  {props.action1}
                </button>
              </div>
              <div className="testimonial18-stars">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
            </div>
            {/* Book Components End */}
            <div className="testimonial18-content">
              <div className="testimonial18-column thq-card">
                <div className="testimonial18-stars1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span className="testimonial18-text thq-body-small">
                  {props.review1}
                </span>
                <div className="testimonial18-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial18-avatar-image thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial18-avatar-content">
                    <span className="testimonial18-text01 thq-body-small">
                      {props.author1Name}
                    </span>
                    <span className="testimonial18-text02 thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column1 thq-card">
                <div className="testimonial18-stars2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span className="testimonial18-text03 thq-body-small">
                  {props.review2}
                </span>
                <div className="testimonial18-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial18-avatar-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial18-avatar-content1">
                    <span className="testimonial18-text04 thq-body-small">
                      {props.author2}
                    </span>
                    <span className="testimonial18-text05 thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column2 thq-card">
                <div className="testimonial18-stars3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span className="testimonial18-text06 thq-body-small">
                  {props.review3}
                </span>
                <div className="testimonial18-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial18-avatar-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial18-avatar-content2">
                    <span className="testimonial18-text07 thq-body-small">
                      {props.author3}
                    </span>
                    <span className="testimonial18-text08 thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial18-column3 thq-card">
                <div className="testimonial18-stars4">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <span className="testimonial18-review4 thq-body-small">
                  {props.review4}
                </span>
                <div className="testimonial18-avatar3">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial18-author4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="testimonial18-avatar-content3">
                    <span className="testimonial18-author41 thq-body-small">
                      {props.author4}
                    </span>
                    <span className="testimonial18-text09 thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial18-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .testimonial18-container {
            align-self: center;
            align-items: start;
          }
          .testimonial18-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            width: 535px;
            height: 798px;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-container1 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .testimonial18-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .testimonial18-image {
            width: 272px;
            object-fit: cover;
          }
          .testimonial18-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .testimonial18-button {
            align-self: flex-end;
            text-align: justify;
          }
          .testimonial18-button1 {
            display: flex;
            align-self: flex-end;
            text-align: left;
          }
          .testimonial18-stars {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-content {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .testimonial18-column {
            top: 10%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-text {
            height: auto;
          }
          .testimonial18-avatar {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-text01 {
            height: auto;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text02 {
            height: auto;
          }
          .testimonial18-column1 {
            top: 14%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-text03 {
            height: auto;
          }
          .testimonial18-avatar1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-text04 {
            height: auto;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text05 {
            height: auto;
          }
          .testimonial18-column2 {
            top: 18%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-text06 {
            height: auto;
          }
          .testimonial18-avatar2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-text07 {
            height: auto;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text08 {
            height: auto;
          }
          .testimonial18-column3 {
            top: 22%;
            position: sticky;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .testimonial18-stars4 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial18-review4 {
            height: auto;
          }
          .testimonial18-avatar3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
          }
          .testimonial18-author4 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial18-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial18-author41 {
            height: auto;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial18-text09 {
            height: auto;
          }
          @media (max-width: 991px) {
            .testimonial18-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .testimonial18-section-title {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .testimonial18-container1 {
              flex-wrap: wrap;
            }
            .testimonial18-button {
              flex: 1;
              display: flex;
            }
            .testimonial18-button1 {
              flex: 1;
              display: flex;
            }
            .testimonial18-column {
              width: 100%;
            }
            .testimonial18-column1 {
              width: 100%;
            }
            .testimonial18-column2 {
              width: 100%;
            }
            .testimonial18-column3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial18.defaultProps = {
  author1Position: 'Marketing Manager',
  author3: 'David Johnson',
  author3Position: 'Digital Marketing Director',
  author2Position: 'Social Media Specialist',
  author4Src:
    'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTEzNjE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Satisfied Attendee',
  author4Alt: 'Delighted User',
  heading1: 'Book Name',
  author2Src:
    'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTEzNjE5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1636716731103-11242116065a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTEzNjE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Primary action',
  author2: 'Jane Smith',
  review1:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  action2: 'Secondary action',
  review3:
    "I've been to multiple conferences, but this one stands out for its quality content and networking opportunities. Can't wait for the next event!",
  author1Name: 'John Doe',
  author1Alt: 'Happy Customer',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  author4Position: 'Content Creator',
  author4: 'Sarah Lee',
  imageAlt: 'image',
  review4:
    'The book review app is a must-have for any book lover. The exclusive discounts make it even more appealing. Highly recommend!',
  review2:
    "The book review app offered through this website is fantastic! I've discovered so many new titles and saved money with the premium membership discounts.",
  author3Alt: 'Excited Participant',
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTEzNjE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Attending this conference was a game-changer for our marketing strategies. The insights shared by the speakers were invaluable.',
}

Testimonial18.propTypes = {
  author1Position: PropTypes.string,
  author3: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  heading1: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  action1: PropTypes.string,
  author2: PropTypes.string,
  review1: PropTypes.string,
  action2: PropTypes.string,
  review3: PropTypes.string,
  author1Name: PropTypes.string,
  author1Alt: PropTypes.string,
  imageSrc: PropTypes.string,
  author4Position: PropTypes.string,
  author4: PropTypes.string,
  imageAlt: PropTypes.string,
  review4: PropTypes.string,
  review2: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Testimonial18
