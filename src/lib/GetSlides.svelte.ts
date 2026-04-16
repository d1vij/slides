import type { Component } from "svelte";
import EmptySlide from "./components/EmptySlide.svelte";

export type Slide = Component;
export type SlidePromise = Promise<Slide>;

class SlidesFactory {
	private readonly _slides: Record<number, SlidePromise>;
	constructor() {
		const prefix = /^\.\.\/routes\/slides\/(\d+)\/\+page\.svelte$/;

		// not eager importing so that we can lazy load the components
		// only when their previews are within viewport
		const slides = import.meta.glob<Slide>("../routes/slides/**/+page.svelte", {
			import: "default",
		});
		const cleaned: Record<number, SlidePromise> = {};

		for (const [path, slideImport] of Object.entries(slides)) {
			cleaned[parseInt(path.replace(prefix, "$1"))] = slideImport();
		}

		this._slides = cleaned;
	}

	get slides(): Record<number, SlidePromise> {
		return this._slides;
	}

	public slide(index: number): SlidePromise {
		return this._slides[index] || new Promise((resolve) => resolve(EmptySlide));
	}
}

export const Slides = new SlidesFactory();
export default Slides;
