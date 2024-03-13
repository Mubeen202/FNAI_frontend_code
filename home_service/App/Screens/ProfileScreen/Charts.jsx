import React from 'react';
import { View, Text} from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import Colors from '../Utils/Colors';

const Chart = ({ greenPercentage, yellowPercentage, redPercentage, radius, innerRadius }) => {
  const totalPercentage = greenPercentage + yellowPercentage + redPercentage;
  const greenAngle = (greenPercentage / totalPercentage) * 360;
  const yellowAngle = (yellowPercentage / totalPercentage) * 360;
  const redAngle = (redPercentage / totalPercentage) * 360;

  const createArcPath = (startAngle, endAngle, radius) => {
    const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = radius * Math.sin((endAngle * Math.PI) / 180);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      L 0 0
    `;
  };

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <G transform={`translate(${radius},${radius})`}>
          {/* Green segment */}
          <Path
            d={createArcPath(0, greenAngle, radius)}
            fill={Colors.GREEN}
          />
          {/* Yellow segment */}
          <Path
            d={createArcPath(greenAngle, greenAngle + yellowAngle, radius)}
            fill={Colors.YELLOW}
          />
          {/* Red segment */}
          <Path
            d={createArcPath(greenAngle + yellowAngle, 360, radius)}
            fill={Colors.RED}
          />
          {/* Inner circle */}
          <Circle
            r={innerRadius}
            fill={Colors.DARK_GREY}
          >
            </Circle>
           {/* Values */}
           
          <Text
            x={innerRadius * Math.cos(((greenAngle + yellowAngle / 2) * (Math.PI / 180)))}
            y={innerRadius * Math.sin(((greenAngle + yellowAngle / 2) * (Math.PI / 180)))}
            textAnchor="middle"
            fontSize={24}
            fontWeight="bold"
            fill={Colors.YELLOW}
          >
            {`${yellowPercentage}%`}
          </Text>
          <Text
            x={innerRadius * Math.cos((((greenAngle + yellowAngle) + (redAngle / 2)) * (Math.PI / 180)))}
            y={innerRadius * Math.sin((((greenAngle + yellowAngle) + (redAngle / 2)) * (Math.PI / 180)))}
            textAnchor="middle"
            fontSize={14}
            fontWeight="bold"
            fill={Colors.RED}
          >
            {`${redPercentage}%`}
          </Text>
        </G>
      </Svg>
    </View>
  );
};

export default Chart;
