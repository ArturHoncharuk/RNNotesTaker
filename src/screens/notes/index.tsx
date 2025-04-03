import { useCallback } from 'react';
import { Alert, View } from 'react-native';

import { useAllNotes } from '~/entities/notes/lib';
import { BottomNavigationList, NotesList } from '~/entities/notes/ui';
import { SafeViewContainer, Typography } from '~/shared/ui';

export function NotesScreen() {
  const { notes, loading, length, refetch } = useAllNotes();

  const onCreateNote = useCallback(() => {
    Alert.alert('new note');
    console.log('new note');
  }, []);

  return (
    <SafeViewContainer>
      <View className="pb-5">
        <Typography cn="font-bold text-2xl">Notes</Typography>
      </View>

      <NotesList notes={notes} refresh={refetch} loading={loading} />

      <BottomNavigationList onCreateNote={onCreateNote} notes={length} />
    </SafeViewContainer>
  );
}
