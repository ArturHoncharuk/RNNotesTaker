import Svg, { G, Path } from 'react-native-svg';

import { IconProps } from '~/shared/types';

export function AddIcon({ size = 24, color = '#000000' }: IconProps) {
  return (
    <Svg width={24} height={size} viewBox="0 0 24 24" fill="none">
      <G id="SVGRepo_bgCarrier" stroke-width="0" />
      <G id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M4 12H20M12 4V20"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
