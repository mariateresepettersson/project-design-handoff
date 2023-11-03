import styled from "styled-components";

const Hero = styled.header`
  position: relative;

  video {
    width: 100%;
    height: auto;
  }

`;

export const Header = () => {
  return (
    <Hero>
      <div className="hero-section">
        <video
          src="./assets/hero-movie.mp4"
          onClick={(e) => e.target.play()}
          muted
        ></video>
      </div>
    </Hero>
  );
};