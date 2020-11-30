import React from 'react'
import styled from 'styled-components'

export const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          iv_load_policy="3"
          rel="0"
        />
      </div>
    </IframeVideoWrapper>
  )
}


const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
    text-align: center;
    margin-bottom: 2rem;
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`


