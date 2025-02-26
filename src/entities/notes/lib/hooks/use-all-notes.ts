import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { _getCachedNotes } from '../lists.entity';

export function useAllNotes() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['all-notes'],
    queryFn: () => _getCachedNotes(),
  });

  const length = useMemo(() => data?.length ?? 0, [data]);

  return { notes: data?.length ? data : [], loading: isLoading, length, refetch };
}
