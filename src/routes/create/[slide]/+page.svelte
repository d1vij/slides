<script lang="ts">
    import { fullscreen } from "$lib/states/Fullscreen.svelte";
    import LoadingSlide from "$lib/components/LoadingSlide.svelte";
    import Slides from "$lib/GetSlides.svelte";
    import type { PageProps } from "./$types";
    const { params }: PageProps = $props();

    const Slide = $derived(await Slides.slide(+params.slide));
</script>

<div
    class="relative aspect-video w-full border"
    bind:this={fullscreen.target}
>
    {#if fullscreen.isFullscreen()}
        <div class="place-item-center absolute inset-0 z-100 bg-black">
            <Slide />
            <div class="hoverzone absolute bottom-0 h-20 w-full">
                <div class={["presentation-toolbar", "size-full bg-yellow-200"]}>hi</div>
            </div>
        </div>
    {:else}
        <svelte:boundary>
            <Slide />
            {#snippet pending()}
                <LoadingSlide />
            {/snippet}
        </svelte:boundary>
    {/if}
</div>

<style lang="postcss">
    .hoverzone {
        &:hover > .presentation-toolbar {
            transform: none;
        }
    }
    .presentation-toolbar {
        transform: translateY(100%);
        transition: transform 400ms ease;
    }
</style>
