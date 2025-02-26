import { chain } from 'lodash';

import { mmkv } from '~/shared/lib';

export function _getCachedNotes() {
  return chain(mmkv.getAllKeys())
    .map((key) => {
      const _note = mmkv.getString(key);
      return _note ? { id: key, title: _note } : null;
    })
    .compact()
    .value();
}
