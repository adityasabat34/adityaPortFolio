import React from 'react';

const Marquee = ({ children, pauseOnHover, reverse, className }) => {
  return (
    <div
      className={`marquee-container ${reverse ? 'reverse' : ''} ${
        pauseOnHover ? 'pause-on-hover' : ''
      } ${className}`}
    >
      <div className="marquee-content">{children}</div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        .reverse .marquee-content {
          animation-direction: reverse;
        }
        .pause-on-hover:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
