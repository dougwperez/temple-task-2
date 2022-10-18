import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Palette = ({bgfill, selectedColor}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    // viewBox="0 -15 160 199"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve">
    <Path
      style={{
        fill: bgfill,
      }}
      d="M491.09 328.459c-10.239-17.809-28.826-27.937-51.199-27.937-28.737 0-47.726-21.359-48.085-44.522-.111-9.906 3.228-20.035 10.685-28.828 8.459-10.017 20.815-15.694 33.837-15.694 24.598 0 44.522-10.351 54.872-28.271 9.796-17.03 9.685-38.4-.333-55.652C445.122 48.863 360.307 0 269.373 0 146.938 0 41.421 86.15 18.381 204.911c-3.338 17.03-5.009 34.059-4.896 51.089v.668c.223 58.991 20.48 116.313 58.435 162.282C120.671 478.052 192.685 512 269.374 512c91.157 0 176.085-49.085 221.717-128 9.906-17.141 9.906-38.4-.001-55.541zM292.745 104.181c13.803-23.93 44.3-32.278 68.452-18.365 23.93 13.803 32.167 44.412 18.365 68.452-13.803 23.819-44.412 32.167-68.452 18.254-23.93-13.802-32.165-44.299-18.365-68.341z"
    />
    <Path
      style={{
        fill: 'orange',
      }}
      d="M71.919 418.95C120.67 478.052 192.684 512 269.373 512c91.157 0 176.085-49.085 221.717-128 9.907-17.141 9.907-38.4 0-55.541-10.239-17.809-28.826-27.937-51.199-27.937-28.737 0-47.726-21.359-48.085-44.522H13.483v.668c.224 58.991 20.48 116.313 58.436 162.282z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M124.677 306.087c-27.619 0-50.087-22.468-50.087-50.087s22.468-50.087 50.087-50.087 50.087 22.468 50.087 50.087-22.468 50.087-50.087 50.087z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M171.981 420.609c-23.923-13.802-32.21-44.397-18.326-68.424 13.695-23.726 44.21-32.294 68.413-18.321 23.922 13.801 32.21 44.392 18.326 68.419-13.772 23.871-44.338 32.228-68.413 18.326z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M323.198 431.18c-26.712-7.156-42.599-34.587-35.424-61.342 7.175-26.741 34.59-42.578 61.336-35.413 12.924 3.456 23.728 11.745 30.413 23.326 6.696 11.587 8.478 25.087 5.011 38.016-7.185 26.783-34.646 42.572-61.336 35.413z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M153.655 159.81c-13.855-23.966-5.651-54.579 18.326-68.424 24.013-13.841 54.599-5.613 68.413 18.332 13.877 24.016 5.607 54.605-18.326 68.424-24.127 13.915-54.67 5.489-68.413-18.332z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M124.677 306.087c27.619 0 50.087-22.468 50.087-50.087H74.59c0 27.619 22.467 50.087 50.087 50.087z"
    />
  </Svg>
);

export default Palette;
