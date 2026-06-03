class WebRingElement extends HTMLElement {
	connectedCallback() {
		const links = Array.from(this.querySelectorAll('.webring-site')) as HTMLAnchorElement[];
		if (links.length === 0) return;

		for (let i = links.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[links[i], links[j]] = [links[j], links[i]];
		}

		this.innerHTML = '';
		links.forEach(link => this.appendChild(link));
	}
}
if (!customElements.get("web-ring")) {
	customElements.define("web-ring", WebRingElement);
}