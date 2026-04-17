import { SvelteMap } from "svelte/reactivity";

export class TypedSvelteMap<R extends Record<string, unknown>> {

    declare keys: keyof R;
    private map: SvelteMap<keyof R, R[keyof R]>;

    constructor(values: R) {
        this.map = new SvelteMap(Object.entries(values)) as SvelteMap<keyof R, R[keyof R]>;
    }

    public get<K extends keyof R>(key: K): R[K] {
        // we'll assume we have the corresponding key
        return this.map.get(key) as R[K];
    }

    public set<K extends keyof R>(key: K, value: R[K]): void {
        this.map.set(key, value);
    }
}

