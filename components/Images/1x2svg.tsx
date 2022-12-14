import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Svg1x2 = props => {
  const {SvgProps, bgfill} = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={35}
      viewBox="15 -7 160 198"
      {...props}>
      <Path
        d="M141.5 7.4c-1.6.7-5.8 1.5-9.1 1.8-7.4.7-14.6 3.7-18.3 7.7-1.8 1.9-7.2 4.8-15.2 8.1-6.8 2.8-16.7 6.9-21.9 9.1-5.2 2.1-11.1 3.9-13.1 3.9-6.5 0-16.2 3.7-20.3 7.6-2.7 2.6-8 5.4-19.4 10.1-8.6 3.6-16 6.8-16.3 7.2-.4.3-1 19.3-1.4 42.1l-.7 41.5 23.9 20.1 23.8 20.1.7-8.2c.4-4.5.9-23.2 1-41.5.2-25.4.6-33.4 1.5-33.7 1.7-.6.6 82.8-1.1 84-.7.6-.6.7.4.4 1.6-.5 22.4-9.5 46-19.7 20.1-8.6 33.7-14.5 51.5-22 27.4-11.6 38-16.2 38.8-17 .7-.6 3.5-63.6 3.7-80 0-3.4-.7-4.1-15.2-15.5-8.3-6.6-16.8-13.4-18.7-15C155.5 12.9 146.2 6 145.3 6c-.4.1-2.1.7-3.8 1.4zm-6.2 5.3c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm-4.6.9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-5 1.1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm11 1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm-3 .9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm8.3.2c0 .5-1.7.9-3.7.9-3.3.1-3.5 0-1.3-.7 3.5-1.1 5-1.1 5-.2zm-12.3.8c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-3.7.8c0 .9-3.9 1.3-5.1.5-1-.6-.4-.9 1.9-.9 1.7 0 3.2.2 3.2.4zm12.5 3.1c-2.2.8-4.9 1.3-6 1.3-1.1 0 0-.6 2.5-1.3 5.9-1.7 8.7-1.7 3.5 0zm-9 1.5c.3.5-.3 1-1.5 1s-1.8-.5-1.5-1c.3-.6 1-1 1.5-1s1.2.4 1.5 1zm21.2 1.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-5 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1.1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm20 .9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM144 32c-1.4.4-3.4.8-4.5.8-1.6 0-1.5-.2.5-.8 1.4-.4 3.4-.8 4.5-.8 1.6 0 1.5.2-.5.8zm-15.5 5c3.8.8 9.2 1 14.9.6 8.5-.6 8.7-.5 6.8 1.2-2.3 1.9-4.2 12.2-2.3 12.2.6 0 1.1.4 1.1.9 0 2.4-15.9 3.1-22.8 1.1-4.1-1.3-5.7-3-2.7-3 1.1 0 1.5-1.3 1.5-5.4 0-4.7-.4-5.7-2.7-7.6-1.6-1.2-2.1-2-1.3-1.7.9.3 4.2 1 7.5 1.7zM65 41.8c0 .5-1.7.9-3.7.9-3.3.1-3.5 0-1.3-.7 3.5-1.1 5-1.1 5-.2zm-8.3 1.8c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm12 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm6.1.9c-.2.1-2.1.5-4.3.8l-4 .6 3.5-1.3c2.9-1.1 6.1-1.2 4.8-.1zm-10.1.1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-6.2 1.5c-2.7 1.1-5.5 1.1-5.5 0 0-.5 1.7-.9 3.8-.9 2.8 0 3.2.2 1.7.9zm14.2 2.5c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-7.7 2c-5.3 1.6-6 1.7-6 .5 0-.6 1.5-1.2 3.3-1.4 6.4-.8 7.1-.5 2.7.9zm90.7-.9c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zM79 54c-.8.5-2.4.9-3.5.9-1.6-.1-1.6-.2.5-.9 3.5-1.1 4.8-1.1 3 0zm-6.3 1.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-5 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm21 1.1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm-4 .9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-4 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-3.8.8c-.2.2-1.7.6-3.4 1-2.2.5-2.6.4-1.5-.4 1.4-.9 5.9-1.5 4.9-.6zM58.4 67c5.5 1.1 17 .7 21.5-.7.9-.3.6.3-.8 1.5-1.9 1.5-2.5 3.2-2.9 7.5-.4 5.2-.3 5.6 1.9 5.9 1.9.3 1.5.7-2.1 1.7-5.3 1.6-19 1-23.5-.9-2.3-1-2.6-1.4-1.2-1.7.9-.3 1.8-1 1.8-1.6.8-7.8.6-8.9-2-11.4-2.2-2.1-2.3-2.4-.6-2 1.1.3 4.7 1.1 7.9 1.7z"
        fill={bgfill}
      />
    </Svg>
  );
};

export default Svg1x2;
