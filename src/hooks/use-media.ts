'use client';

import * as React from 'react';

export function useMedia(query: string, defaultState = false) {
  const [state, setState] = React.useState(defaultState);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);

    const onChange = (e: MediaQueryListEvent) => setState(e.matches);
    setState(mql.matches);

    mql.addEventListener?.('change', onChange);

    return () => {
      mql.removeEventListener?.('change', onChange);
    };
  }, [query]);

  return state;
}
