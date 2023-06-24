'use client';

import { useContext } from 'react';
import { OffCanvasContext } from '@/contexts/offcanvas';

export function useOffCanvas() {
  const context = useContext(OffCanvasContext);

  if (context === undefined) throw new Error('is not into in context');

  return context;
}
