import React from 'react';
import Svg, {
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const GradientText = ({text, style, ...props}) => {
  return (
    <Svg height="100" width="300">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#FAB779" stopOpacity="1" />
          <Stop offset="1" stopColor="#E73688" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize={style.fontSize || 36}
        fontWeight="bold"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        {...props}>
        {text}
      </SvgText>
    </Svg>
  );
};

export default GradientText;
