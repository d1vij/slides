<script lang="ts">
    import { fullscreen } from "$lib/states/Fullscreen.svelte";
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
</script>

<div
    class="h-10 w-full bg-pink-100"
>
    <button
        class="cursor-pointer bg-pink-400 p-2"
        onclick={fullscreen.goFullscreen}
    >
        Present
    </button>
    <a
        href={resolve(`/settings?origin=${page.url.pathname.toString()}`)}> Settings </a>
</div>
