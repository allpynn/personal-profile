import React, { memo } from 'react';
import './css/LogoLoop.css';

const LogoLoop = ({
  items = [],
  direction = 'left',
  speed = 40,
  gap = '4rem',
  padding = 0,
  fade = true,
  fadeColor = '#000',
  className = '',
}) => {
  // Speed calculation: higher speed value = lower duration in seconds
  const duration = Math.max(15, Math.round(1800 / (speed || 40)));

  const containerStyle = {
    padding: typeof padding === 'number' ? `${padding}px` : padding,
    '--logoloop-gap': typeof gap === 'number' ? `${gap}px` : gap,
    '--logoloop-fadeColor': fadeColor,
    '--logoloop-duration': `${duration}s`,
  };

  const trackStyle = {
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
  };

  return (
    <div
      className={`logoloop ${fade ? 'logoloop--fade' : ''} ${className}`}
      style={containerStyle}
    >
      <div className="logoloop__track" style={trackStyle}>
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="logoloop__sequence" aria-hidden={copyIndex > 0}>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="logoloop__link"
                aria-label={item.name}
              >
                <div className="logoloop__item">
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                  />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LogoLoop);
