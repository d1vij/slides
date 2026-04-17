<script lang="ts">
    import { resolve } from "$app/paths";
    import type { SlidePromise } from "$lib/GetSlides.svelte";

    type Props = {
        slidePromise: SlidePromise;
        slideId: string;
    };
    const { slidePromise: slide, slideId }: Props = $props();
</script>

<a
    data-sveltekit-replacestate
    href={resolve("/create/[slide]", {
        slide: slideId,
    })}
    class="relative aspect-video w-25 border"
>
    <div class="absolute top-0 left-0 h-[1000%] w-[1000%] origin-top-left scale-[10%]">
        <!-- this eager loads all the components, maybe only load them only when the user scrolls the preview into viewport -->
        {#await slide then Slide}
            <Slide />
        {/await}
    </div>
</a>
