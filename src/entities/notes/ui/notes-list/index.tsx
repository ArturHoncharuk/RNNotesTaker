import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { Note } from '~/entities/notes/types';
import { Typography } from '~/shared/ui';

interface NotesListProps {
  notes: Note[];
  refresh: () => void;
  loading: boolean;
}

export const NotesList = ({ notes, refresh, loading }: NotesListProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<Note>) => (
    <View className="border-b border-gray-500">
      <Typography className="text-medium text-black" maxFontSizeMultiplier={1}>
        {item.title}
      </Typography>
    </View>
  );

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onRefresh={refresh}
      refreshing={loading}
      contentContainerClassName="flex-grow"
      ListEmptyComponent={<Typography cn="text-2xl">No notes yet</Typography>}
    />
  );
};
