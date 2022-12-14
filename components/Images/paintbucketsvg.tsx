import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = ({bgfill, bgfill2, selectedColor}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve">
    <Path
      style={{
        fill: '#e1e1e1',
      }}
      d="M69.818 172.841H47.287c-9.824 0-17.788-7.964-17.788-17.788s7.964-17.788 17.788-17.788h22.532c9.824 0 17.788 7.964 17.788 17.788-.001 9.823-7.965 17.788-17.789 17.788z"
    />
    <Path
      style={{
        fill: '#ccc',
      }}
      d="M464.713 172.841h-22.532c-9.824 0-17.788-7.964-17.788-17.788s7.964-17.788 17.788-17.788h22.532c9.824 0 17.788 7.964 17.788 17.788 0 9.823-7.964 17.788-17.788 17.788z"
    />
    <Path
      style={{
        fill: '#2c6991',
      }}
      d="M448.111 199.701c-9.824 0-17.788-7.964-17.788-17.788v-66.972c0-43.762-35.602-79.364-79.364-79.364H161.041c-43.762 0-79.364 35.602-79.364 79.364v66.972c0 9.824-7.964 17.788-17.788 17.788s-17.788-7.964-17.788-17.788v-66.972C46.101 51.562 97.662 0 161.041 0h189.917c63.379 0 114.941 51.562 114.941 114.941v66.972c0 9.823-7.964 17.788-17.788 17.788z"
    />
    <Path
      style={{
        fill: '#528fb3',
      }}
      d="M256 35.576h-94.959c-43.762 0-79.364 35.602-79.364 79.364v66.972c0 9.824-7.964 17.788-17.788 17.788s-17.788-7.964-17.788-17.788V114.94C46.101 51.562 97.662 0 161.041 0H256v35.576z"
    />
    <Path
      style={{
        fill: bgfill,
      }}
      d="M420.311 126.592H91.689c-9.824 0-18.313 7.414-18.313 17.239v290.676c0 42.567 35.156 77.493 77.724 77.493h209.801c42.568 0 77.724-34.926 77.724-77.493V143.831c-.001-9.825-8.49-17.239-18.314-17.239z"
    />
    <Path
      style={{
        fill: bgfill2,
      }}
      d="M256 126.592H91.689c-9.824 0-18.313 7.414-18.313 17.239v290.676c0 42.567 35.156 77.493 77.724 77.493H256V126.592z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M357.985 111.175h-203.97c-9.824 0-17.788 7.964-17.788 17.788V317.69c0 28.593 23.141 51.856 51.585 51.856s51.585-23.262 51.585-51.856v-3.606c0-8.977 7.447-16.28 16.602-16.28 9.155 0 16.602 7.303 16.602 16.28v60.392c0 28.594 23.141 51.856 51.585 51.856s51.585-23.262 51.585-51.856V128.964c.002-9.824-7.962-17.789-17.786-17.789z"
    />
    <Path
      style={{
        fill: selectedColor,
      }}
      d="M256 111.175H154.015c-9.824 0-17.788 7.964-17.788 17.788V317.69c0 28.593 23.141 51.856 51.585 51.856s51.585-23.262 51.585-51.856v-3.606c0-8.977 7.447-16.28 16.602-16.28V111.175z"
    />
    <Path
      style={{
        fill: '#f5f4f5',
      }}
      d="M195.521 136.079c-9.824 0-17.788 7.964-17.788 17.788v84.197c0 9.824 7.964 17.788 17.788 17.788s17.788-7.964 17.788-17.788v-84.197c0-9.824-7.965-17.788-17.788-17.788z"
    />
  </Svg>
);

export default SvgComponent;
