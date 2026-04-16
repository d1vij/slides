<script lang="ts">
    import "./layout.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Sveltations</title>
</svelte:head>

<div class="p-2">
    {@render children()}
</div>