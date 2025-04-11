import { TouchableOpacity, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PencilAndEllipsis } from '~/shared/assets/svg';
import { Typography } from '~/shared/ui';

interface BottomNavigationListProps {
  onCreateNote: () => void;
  notes: number;
}

export const BottomNavigationList = ({ onCreateNote, notes }: BottomNavigationListProps) => {
  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const borderColor = colorScheme === 'dark' ? '#4c4c60' : '#4c4c60';

  return (
    <View style={{ bottom, borderTopColor: borderColor }} className=" absolute w-screen border-t">
      <View className="relative flex w-full flex-row items-center px-5 py-3">
        <View className="w-8" />

        <View className="flex-1 items-center">
          <Typography cn="text-md font-2xl">{notes} Notes</Typography>
        </View>

        <TouchableOpacity onPress={onCreateNote}>
          <PencilAndEllipsis color={colorScheme === 'dark' ? '#fff' : '#000'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
