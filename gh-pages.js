import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/sachin-philip/sachin-philip.github.io.git', // Update to point to your repository
		user: {
			name: 'Sachin Philip Mathew', // update to use your name
			email: 'sachinvettithanam@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
