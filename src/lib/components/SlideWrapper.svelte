<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
</script>

<div class="relative aspect-video bg-blue-100">
    {@render children()}
</div>
