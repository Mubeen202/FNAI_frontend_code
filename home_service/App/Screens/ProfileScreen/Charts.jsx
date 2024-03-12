import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const Chart = ({ greenPercentage, redPercentage, yellowPercentage, radius }) => {
  const totalPercentage = greenPercentage + redPercentage + yellowPercentage;
  const greenAngle = (greenPercentage / totalPercentage) * 360;
  const redAngle = (redPercentage / totalPercentage) * 360;
  const yellowAngle = (yellowPercentage / totalPercentage) * 360;

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <G transform={`translate(${radius},${radius})`}>
          {/* Green segment */}
          <Circle
            r={radius}
            fill="green"
            stroke="green"
            strokeWidth={0}
            startAngle={0}
            endAngle={greenAngle}
          />
          {/* Red segment */}
          <Circle
            r={radius}
            fill="red"
            stroke="red"
            strokeWidth={0}
            startAngle={greenAngle}
            endAngle={greenAngle + redAngle}
          />
          {/* Yellow segment */}
          <Circle
            r={radius}
            fill="yellow"
            stroke="yellow"
            strokeWidth={0}
            startAngle={greenAngle + redAngle}
            endAngle={greenAngle + redAngle + yellowAngle}
          />
        </G>
      </Svg>
    </View>
  );
};

export default Chart;
