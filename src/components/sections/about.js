import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 16px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDb',
    'Shopify',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          {/* <div>
            <p>
              With a core specialization in Marketing &amp; Strategy, I've orchestrated impactful
              strategies in brand perceptions during my MBA summer internship for{' '}
              <a href="https://www.tatastructura.com">Tata Structura</a> at{' '}
              <a href="https://drive.google.com/file/d/1xhGTFz7pe6kP7bZ4peDgJ7hlG630K8rz/view?usp=sharing">
                Tata Steel
              </a>
              .
            </p>

            <p>
              I also spearheaded employer branding initiatives for{' '}
              <a href="https://drive.google.com/file/d/1w-uN9jb86pxFXPYMDu_78P-d1CZJAx3V/view?usp=sharing">
                Aditya Birla Fashion and Retail
              </a>
              , resulting in a remarkable 37% surge in consumer engagement during my remote live
              project as part of my MBA journey.
            </p>

            <p>
              During my tenure at <a href="https://www.amdocs.com">Amdocs</a>, where I served as a
              Software Developer, I had the honor of being selected as one of 16 elite{' '}
              <a href="https://drive.google.com/file/d/16BGu5InZZDGCtoWas560ezwKsgVBKbI9/view?usp=sharing">
                Innovation Agents
              </a>
              .
            </p>

            <p>
              Moreover, my role as a{' '}
              <a href="https://drive.google.com/file/d/1iRTZfE7v5Y99BYZVxevaGBVtF90t-TOb/view?usp=sharing">
                Placement Coordinator
              </a>{' '}
              at IIM Rohtak saw me cultivate over 30 new corporate relationships, culminating in a
              remarkable 42% boost in campus placements.
            </p>

            <p>My skills are not limited to this list!</p>
          </div> */}

          <div>
            <p>
              Hi, I'm Sabari, a self-taught front-end developer based in{' '}
              <a href="https://g.co/kgs/RQwjixG" target="_blank">
                Coimbatore
              </a>
              , with a passion for bringing ideas to life on the web.
            </p>

            <p>
              My interest in web development sparked in 2022, and since then, I've had the privilege
              of working across diverse environments, from Junior Web Developer at{' '}
              <a href="https://refreshmarketing.co/" target="_blank">
                Refresh Marketing Inc
              </a>{' '}
              to Frontend Web Developer at{' '}
              <a href="https://digitaltrendbucket.com/" target="_blank">
                Digital Trend Bucket
              </a>
              . My main focus now is on Next.js, Full Stack and the web3 stuffs.
            </p>

            <p>
              I recently created a cryptocurrency dashboard called{' '}
              <a href="https://cksabari2001-cryptocurrency-react-app.netlify.app/" target="_blank">
                Cryptoverse
              </a>
              . This dynamic React dashboard offers a comprehensive view of the cryptocurrency
              market, empowering users with valuable insights and data. From tracking the top 10
              cryptocurrencies to analyzing market trends and individual coin details.
            </p>

            <p>Technologies I've Been Working With Recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
