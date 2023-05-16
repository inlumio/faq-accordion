document.querySelectorAll('.accordion__item').forEach((item) =>
	item.addEventListener('click', (e) => {
		let isExpanded = e.currentTarget.getAttribute('aria-expanded') === 'true';
		console.log(isExpanded);
		if (!isExpanded) {
			e.currentTarget.setAttribute('aria-expanded', 'true');
		} else {
			e.currentTarget.setAttribute('aria-expanded', 'false');
		}
	})
);
