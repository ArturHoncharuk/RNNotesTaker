import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { _getCachedNotes } from '../lists.entity';

/**
 * The function `useAllNotes` uses a query to fetch all notes data and returns the notes array, loading
 * status, array length, and a function to refetch the data.
 * @returns The `useAllNotes` function returns an object with the following properties:
 * - `notes`: An array of notes if `data` is not null and has a length greater than 0, otherwise an
 * empty array.
 * - `loading`: A boolean indicating whether the data is currently loading (`true`) or not (`false`).
 * - `length`: The length of the `data` array, or
 */
export function useAllNotes() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['all-notes'],
    queryFn: () => _getCachedNotes(),
  });

  const length = useMemo(() => data?.length ?? 0, [data]);

  return { notes: data?.length ? data : [], loading: isLoading, length, refetch };
}
