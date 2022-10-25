import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

const medal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 350 350"
    style={{
      enableBackground: 'new 0 0 350 350',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path
      style={{
        fill: '#003778',
      }}
      d="m65.001 60 57.712-16.408 50 146.408L115 206.408z"
    />
    <Path
      style={{
        fill: '#0052b4',
      }}
      d="m285 60-57.713-16.408-50 146.408L235 206.408z"
    />
    <Circle
      style={{
        fill: '#ff9811',
      }}
      cx={175}
      cy={260}
      r={90}
    />
    <Path
      style={{
        fill: '#bf720d',
      }}
      d="M175 350c-49.705 0-90-40.295-90-90 0-49.706 40.295-90 90-90"
    />
    <Circle
      style={{
        fill: '#ffda44',
      }}
      cx={175}
      cy={260}
      r={60}
    />
    <Path
      style={{
        fill: '#0052b4',
      }}
      d="M65 0h110v60H65z"
    />
    <Path
      style={{
        fill: '#006df0',
      }}
      d="M175 0h110v60H175z"
    />
  </Svg>
);

export default medal;
