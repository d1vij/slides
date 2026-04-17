<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Sveltations</title>
</svelte:head>

<div class="size-full bg-red-300">
    {@render children()}
</div>
