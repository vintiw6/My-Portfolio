document.addEventListener('DOMContentLoaded', () => {
	const toggle = document.querySelector('.dark-mode-toggle');
	const navBar = document.querySelector('.nav-bar'); // Adjust selector to match your nav bar

	// Set the nav bar height dynamically
	const navBarHeight = getComputedStyle(navBar).height;
	document.documentElement.style.setProperty(
		'--nav-bar-height',
		navBarHeight
	);

	// Toggle dark mode
	toggle.addEventListener('click', () => {
		const currentTheme =
			document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
	});

	// Update toggle height on window resize
	window.addEventListener('resize', () => {
		const updatedNavBarHeight = getComputedStyle(navBar).height;
		document.documentElement.style.setProperty(
			'--nav-bar-height',
			updatedNavBarHeight
		);
	});
});
