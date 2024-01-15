'use client';

import React from 'react';
import { AuthProvider } from '@/providers/site-wide';

export default function Provider({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
