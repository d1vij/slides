import type { Attachment } from "svelte/attachments";
import { on } from "svelte/events";

class Fullscreen {
	private fullscreen: boolean = $state(false);
	public target: HTMLDivElement | null = $state(null);

	// using functions here would result in loss of `this` when mounting
	public domListener: Attachment = () => {
		return on(window, "fullscreenchange", () => {
			this.fullscreen = Boolean(document.fullscreenElement);
		});
	};

	public isFullscreen = (): boolean => {
		return this.fullscreen;
	};

	public goFullscreen = async () => {
		if (!this.target)
			throw new Error("Cannot go fullscreen without binding to an element");
		await this.target?.requestFullscreen();
		// TODO: check why is this requeired
		this.fullscreen = true;
	};
}

export const fullscreen = new Fullscreen();
