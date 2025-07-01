import { root } from 'postcss';

export const ROUTES = {
  home: '/',
  invoice: {
    root: '/invoice',
    projects: '/invoice/projects',
    details: '/invoice/details',
    export: '/invoice/export',
  },
};

export const GetParts = (path: string): string[] => {
  return path.split('/').filter((part) => part.length > 0);
};

export const GetSegment = (path: string): string => {
  const segments = path.split('/');
  return segments[segments.length - 1];
};
