import { chain } from 'lodash';

import { mmkv } from '~/shared/lib';

/**
 * The function `_getCachedNotes` retrieves cached notes from storage and returns them as an array of
 * objects with id and title properties.
 * @returns An array of objects containing the id and title of cached notes.
 */
export function _getCachedNotes() {
  return chain(mmkv.getAllKeys())
    .map((key) => {
      const _note = mmkv.getString(key);
      return _note ? { id: key, title: _note } : null;
    })
    .compact()
    .value();
}
