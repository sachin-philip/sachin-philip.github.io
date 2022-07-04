import { writable } from 'svelte/store';
import { browser } from '$app/env';

const storedTheme = browser ? localStorage.getItem('spTheme') : '';
export const theme = writable(storedTheme);
theme.subscribe((value) => {
	if (browser) localStorage.setItem('spTheme', value === 'dark' ? 'dark' : 'light');
});
