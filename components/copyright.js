import React from 'react'

import PropTypes from 'prop-types'

const Copyright = (props) => {
  return (
    <>
      <div className={`copyright-copyright ${props.rootClassName} `}>
        <div className="copyright-max-width">
          <span className="copyright-text">
            <span className="copyright-text01">
              <span>
                © All rights reserved
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.teleporthq.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text04">@TeleportHQ.</span>
            </a>
            <span className="copyright-text05">
              <span>
                {' '}
                Powered by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text08">Vercel</span>
            </a>
            <span className="copyright-text09">
              <span>
                . Image source:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text12">Unsplash</span>
            </a>
            <span className="copyright-text13">.</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text {
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-text01 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text04 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text05 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text08 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text09 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text12 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text13 {
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 991px) {
            .copyright-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
