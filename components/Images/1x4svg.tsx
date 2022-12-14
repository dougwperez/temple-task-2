import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Svg1x4 = (props: SvgProps) => {
  const {SvgProps, bgfill} = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={35}
      viewBox="15 -27 160 198"
      {...props}>
      <Path
        d="M162 6.7c-1.4.2-4 .6-5.9.9-1.8.3-4.4 1.6-5.7 3-3.1 3-24.3 11.9-30.9 12.8-4.8.7-8.9 2.6-11 5.1-1.5 1.8-26 11.5-29 11.5-3.2 0-8.5 2.2-10.8 4.4C66.3 46.8 41.4 57 38 57c-3.9 0-8 1.7-11 4.4-1.4 1.3-6.7 4-11.8 6.1L6 71.3v48.5l13.8 11.5 13.7 11.6.3-24c.1-13.4.6-23.9 1.1-23.9.6 0 .7 9.9.4 24l-.6 24 3.9-1.6c21.6-8.9 154.1-65.7 154.5-66.2.7-.7 1.1-6.3 2.5-34.7l.7-13.1-9.7-7.4C172.9 9.5 167.8 6 166 6.1c-.8.1-2.6.3-4 .6zm-7.3 6c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm15.2 10.8c-.5.5-.9 2.6-.9 4.6 0 3.4-.3 3.7-3.2 4.3-1.8.3-4.9.2-6.8-.2-3.2-.7-3.5-1-3.2-4 .2-1.8-.1-3.9-.7-4.6-.8-1 .7-1.2 7.4-1.2 5.3.1 8 .5 7.4 1.1zm-55.2 5.2c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm3 3c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm11.6 9.9c-.8 1.3-1.1 3.2-.7 4.8.6 2.6.6 2.6-5.2 2.6-7.3 0-8.9-.9-8-4.5.4-1.5.2-3.2-.3-3.9-.8-1 .8-1.2 7.3-1.2 8.3.1 8.3.1 6.9 2.2zm-55.6 4.1c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm15.4 11.8c-1.4 1.8-1.9 5.5-.9 6.1 1.8 1.1-1.5 2.4-6.4 2.4-6.6 0-7.5-.5-7-4 .2-1.7-.1-3.6-.7-4.4-.9-1.1.3-1.3 7.3-1.2 5.5.1 8.2.5 7.7 1.1zm-56.4 5.2c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm3 3c-.4.3-1 .3-1.4 0-.3-.4 0-.7.7-.7s1 .3.7.7zm11.1 9.7c-.5 1-.8 3.1-.6 4.6.4 2.5.1 2.9-2.9 3.5-1.8.3-5 .1-7.1-.4-3.6-1-3.8-1.2-3.4-4.7.3-2.2 0-3.9-.8-4.4-.7-.4 2.6-.7 7.3-.6 7.9.1 8.4.2 7.5 2z"
        fill={bgfill}
      />
    </Svg>
  );
};

export default Svg1x4;
