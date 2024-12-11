export function onhover(node: HTMLElement, callback: EventListener) {
	node.addEventListener('mouseenter', callback);
	node.addEventListener('mouseleave', callback);

	return {
		destroy() {
			node.removeEventListener('mouseenter', callback);
			node.removeEventListener('mouseleave', callback);
		}
	};
}
