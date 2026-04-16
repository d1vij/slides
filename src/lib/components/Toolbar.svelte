<script lang="ts">
    import { fullscreen } from "$lib/states/Fullscreen.svelte";
</script>

<div class="h-10 w-full bg-pink-100">
    <button
        class="cursor-pointer bg-pink-400 p-2"
        onclick={fullscreen.goFullscreen}
    >
        Present
    </button>
</div>
