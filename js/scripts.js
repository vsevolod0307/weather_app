window.addEventListener('DOMContentLoaded', () => {
	const search = document.getElementById("search");
	const openButton = document.getElementById("openSearch");
	const closeSearch = document.getElementById("closeSearch");

	openButton.addEventListener("click", () => {
		search.classList.add("search_opened");
	});

	closeSearch.addEventListener("click", () => {
		search.classList.remove("search_opened");
	});

	const checkbox = document.querySelector('input[name=theme]');

	function loadThemeChange() {
		if(localStorage.getItem('themeChange') === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			checkbox.checked = true;
		} else {
			localStorage.setItem('themeChange', 'light');
		}
	}

	loadThemeChange();

	checkbox.addEventListener('change', function () {
		if (checkbox.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('themeChange', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('themeChange', 'light');
		}
	});
});