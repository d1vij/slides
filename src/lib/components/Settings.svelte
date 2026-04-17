<script lang="ts">
    import { sineIn } from "svelte/easing";
    import { blur, draw, fade, scale } from "svelte/transition";

    let visible = $state(false);
    let menuRef = $state<HTMLDivElement | null>(null);
</script>

<svelte:body
    onclick={(e) => {
        const target = e.target as HTMLDivElement;

        if (!target.closest(".settings")) {
            visible = false;
        }
    }}
/>

<button
    class={["settings settings-button", " cursor-pointer bg-pink-400 p-2"]}
    onclick={() => {
        visible = !visible;
        console.log(visible);
    }}
>
    Settings
</button>

{#if visible}
    <div
        transition:fade={{ duration: 100, easing: sineIn }}
        class="settings settings-menu z-20 size-40 origin-top-left bg-pink-50"
    >
        <button onclick={() => alert("hi")}>hi</button>
    </div>
{/if}

<style lang="postcss">
    .settings-button {
        anchor-name: --button;
    }

    .settings-menu {
        position-anchor: --button;
        position: fixed;
        left: anchor(left);
    }
</style>
