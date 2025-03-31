const INFO = {
	main: {
		title: 'Vinayak Tiwari | Portfolio',
		name: 'Vinayak Tiwari',
		email: 'vintiw667@gmail.com',
		logo: 'logo.png',
	},

	socials: {
		twitter: 'https://twitter.com/vintiw6',
		github: 'https://github.com/vintiw6',
		linkedin: 'https://linkedin.com/vintiw6',
		instagram: 'https://instagram.com/vintiw5',
	},
	homepage: {
		title: 'Aspiring Data Scientist & Software Developer',
		description:
			'CSE (Data Science) student skilled in Python, C++, and software development. Building scalable apps and AI solutions.',
	},

	about: {
		title: 'I’m Vinayak Tiwari, a tech enthusiast shaping the future with code.',
		description:
			'Computer Science (Data Science) student with project experience in Python and a passion for innovation.',
	},
	articles: {
		title: 'Exploring the World of Data Science, AI, and Software Development',
		description:
			'My insights and projects in data science, AI, and software development.',
	},

	projects: [
		{
			title: 'CreditCard Validator',
			description:
				'A tool to validate credit card numbers using the Luhn algorithm.',
			logo: ['/c++.svg'], // ✅ Correct C++ Logo
			linkText: 'View Project',
			link: 'https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator',
		},
		{
			title: 'Data Analysis Basics',
			description:
				'Basic data analysis projects demonstrating fundamental data processing techniques.',
			logo: ['/python.svg'], // ✅ Python Logo
			linkText: 'View Project',
			link: 'https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic',
		},
		{
			title: 'Slot Machine',
			description:
				'A simple slot machine game simulation implemented in Python.',
			logo: ['/python.svg'], // ✅ Python Logo
			linkText: 'View Project',
			link: 'https://github.com/vintiw6/Projects/tree/main/SlotMachine',
		},
		{
			title: 'Smart Finance Tracker',
			description:
				'A smart finance tracker to monitor and manage personal expenses.',
			logo: ['/python.svg'], // ✅ Python Logo
			linkText: 'View Project',
			link: 'https://github.com/vintiw6/Projects/tree/main/SmartFinanceTracker',
		},
		{
			title: 'Weather App',
			description:
				'A weather forecast web app fetching real-time weather data.',
			logo: ['/css.svg', '/html.svg', '/js.svg'],
			linkText: 'View Project',
			link: 'https://vintiw6-weather-app.vercel.app/',
		},
		{
			title: 'Dessert Haven Website',
			description:
				'A full-stack website for a dessert restaurant, featuring a menu, ordering system, and user authentication.',
			logo: [
				'/html.svg',
				'/css.svg',
				'/TypeScript.svg',
				'/React-Dark.svg',
				'/MongoDB.svg',
				'/NodeJS.svg',
			],
			linkText: 'View Project',
			link: 'https://dessert-haven-website.vercel.app/',
		},
	],
};
console.log('INFO.projects:', INFO.projects);

export default INFO;
