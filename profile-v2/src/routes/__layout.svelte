<script>
	import { theme } from './../store/store';
</script>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<svelte:head>
	<title>Sachin Philip Mathew</title>
	<meta charset="utf-8" />
	<meta
		name="description"
		content="Design and develop experiences that make people's lives Simple, sachin-philip, labtocat" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:title" content="Sachin Philip Mathew" />
	<meta
		property="og:description"
		content="Design and develop experiences that make people's lives Simple" />
	<meta property="og:image" content="https://sachinphilip.com/images/meta.png" />
	<meta property="og:url" content="https://sachinphilip.com" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
	<script src="https://kit.fontawesome.com/1a742a53ff.js" crossorigin="anonymous">

	</script>
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;1,200&display=swap"
		rel="stylesheet" />
</svelte:head>

<div class={$theme === 'dark' ? 'dark' : ''} style="font-family: poppins">
	<div class="bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-300">
		<div class="relative cursor-pointer">
			<div class="absolute h-14 w-14 right-0 top-4">
				{#if $theme === 'dark'}
					<i class="fas fa-sun fa-2x" on:click={() => theme.set('light')} />
				{:else}
					<i class="fas fa-moon fa-2x" on:click={() => theme.set('dark')} />
				{/if}
			</div>
		</div>
		<slot />
	</div>
</div>
