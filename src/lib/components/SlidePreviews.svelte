<script lang="ts">
    import Slides from "$lib/GetSlides.svelte";
    import SlidePreview from "./SlidePreview.svelte";
</script>

<div class="grid w-[90%] grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11">
    {#each Object.entries(Slides.slides) as [idx, slide] (idx)}
        <SlidePreview
            slidePromise={slide}
            slideId={idx}
        />
    {/each}
</div>
