<script lang="ts">
    import SlidePreviews from "$lib/components/SlidePreviews.svelte";
    import Toolbar from "$lib/components/Toolbar.svelte";
    const { children } = $props();

    import { fullscreen } from "$lib/states/Fullscreen.svelte";
</script>

<div
    {@attach fullscreen.domListener}
    class="mx-auto flex min-h-full w-[80%] flex-col items-center gap-4 bg-yellow-300"
>
    <Toolbar />
    {@render children()}
    <SlidePreviews />
</div>
