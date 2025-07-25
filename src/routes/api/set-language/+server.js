import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  const { lang } = await request.json();
  cookies.set('lang', lang, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return json({ success: true });
} 