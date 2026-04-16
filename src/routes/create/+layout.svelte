<script lang="ts">
    import SlidePreviews from "$lib/components/SlidePreviews.svelte";
    import Toolbar from "$lib/components/Toolbar.svelte";
    const { children } = $props();

    import { fullscreen } from "$lib/states/Fullscreen.svelte";
</script>

<div
    class="mx-auto flex w-[80%] flex-col items-center gap-4"
    {@attach fullscreen.domListener}
>
    <Toolbar />
    {@render children()}
    <SlidePreviews />
</div>
