<script
    lang="ts"
    module
>
    import * as v from "valibot";
    const paramsSchema = v.object({
        origin: v.optional(v.string(), resolve("/create")),
    });
</script>

<script lang="ts">
    import type { Pathname } from "$app/types";
    import { resolve } from "$app/paths";
    import { useSearchParams } from "runed/kit";

    import { settings } from "$lib/states/Settings.svelte";
    import { goto } from "$app/navigation";
    import { digits, letters, modifiers, specialKeys } from "$lib/keys";

    const params = useSearchParams(paramsSchema);

    let sequence = $derived(settings.get("next_slide_keys"));
    const keys = [...letters, ...digits, ...modifiers, ...specialKeys];
</script>

{#snippet NextSlideKeysConfig()}
    <div>
        {#each sequence as seqKey, idx (idx)}
            <select
                name={idx.toString()}
                onchange={(e) => {
                    const updated = [...sequence];
                    const target = e.target as HTMLSelectElement;
                    updated[idx] = target.value;
                    settings.set("next_slide_keys", updated);
                }}
            >
                {#each keys as key, idx (idx)}
                    <option
                        value={key}
                        selected={key === seqKey}
                    >
                        {key}
                    </option>
                {/each}
            </select>

            <button
                onclick={() => {
                    const updated = sequence.toSpliced(idx, 1);
                    settings.set("next_slide_keys", updated);
                }}
            >
                Remove
            </button>
        {/each}

        <button
            onclick={() => {
                settings.set("next_slide_keys", [...sequence, keys[0]]);
            }}
        >
            Add Another Key
        </button>
    </div>
{/snippet}

<div class="mx-auto mt-50 w-fit border">
    <ul class="mb-2 space-y-2 p-1">
        <li>
            <div>
                <div>
                    <span> Set Next Slide Key | Current Keys -> {sequence}</span>
                    {@render NextSlideKeysConfig()}
                </div>
            </div>
        </li>
        <li><button> Set </button></li>
    </ul>
    <button
        class="size-full cursor-pointer border-t p-1"
        onclick={() => {
            goto(resolve(params.origin as Pathname), { replaceState: true });
        }}
    >
        Go Back {resolve(params.origin as Pathname)}
    </button>
</div>
