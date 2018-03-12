import {css} from 'emotion';

const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '2560px',
};

export const media = Object.keys(size).reduce((sizeMap, label) => {
  sizeMap[label] = (...styles) => css`
    @media (min-width: ${size[label]}) {
      ${css(...styles)};
    }
  `;

  return sizeMap;
}, {});
