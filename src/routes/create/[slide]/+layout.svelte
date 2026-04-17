<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import { settings } from "$lib/states/Settings.svelte";

    const { children } = $props();

    onNavigate(async (navigation) => {
        if (settings.get("enable_slide_transitions") === false) return;
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
