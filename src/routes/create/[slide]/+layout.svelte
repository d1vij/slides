<script lang="ts">
    import { onNavigate } from "$app/navigation";

    const { children } = $props();

    onNavigate(async (navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

{@render children()}
