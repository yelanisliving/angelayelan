import { getStore } from '@netlify/blobs';

// Visitor counter. Each request adds 1 to a single number stored in Netlify Blobs
// and returns the new total as JSON: { "value": 123 }.
export default async () => {
  const store = getStore('visitor-counter');
  const current = Number(await store.get('count')) || 0;
  const value = current + 1;
  await store.set('count', String(value));

  return Response.json({ value }, { headers: { 'Cache-Control': 'no-store' } });
};

export const config = { path: '/api/visit' };
