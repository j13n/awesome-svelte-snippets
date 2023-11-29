# Svelte Awesome Snippets for VSCode

Awesome Snippets for Svelte and Svelte-Kit (using TypeScript).

Uses type inference when possible. No unnecessary type imports.

Supports Svelte 5 RUNES (R00nz / signals).

[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=JakobKruse.svelte-kit-snippets)

## Snippets


### SVELTE KIT

<details>
<summary markdown="span"><b>sk</b>page -  Page</summary>

```ts
<script lang="ts">
   export let page;
   $1
</script>

$0
```
</details>
    

<details>
<summary markdown="span"><b>sk</b>script -  Script</summary>

```ts
<script lang="ts">
   export let page;
   $0
</script>
```
</details>
    

<details>
<summary markdown="span"><b>sk</b>load -  Load</summary>

```ts
export const load = async (${1:event}) => {
   $2
   return {
     $0
   };
};
```
</details>
    

<details>
<summary markdown="span"><b>sk</b>actions -  Actions</summary>

```ts
export const actions = {
   async ${1:default}({ $2 }) {
     $3
   }
};
```
</details>
    

<details>
<summary markdown="span"><b>sk</b>hooks -  Hooks</summary>

```ts
export const handle = async ({ request, resolve }) => {
   $1
   return resolve(request);
};
```
</details>
    
    

### SVELTE

<details>
<summary markdown="span"><b>sv</b>dispatch -  Event Dispatcher</summary>

```ts
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher<{ $1: $2}>()
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>head -  Head Tag</summary>

```ts
<svelte:head>
   $1
</svelte:head>
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>foreach -  For Each</summary>

```ts
{#each $1 as $2 ($3)}
   $0
{/each}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>foreachelse -  For Each else</summary>

```ts
{#each $1 as $2 ($3)}
   $4
{:else}
   $5
{/each}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>if -  If</summary>

```ts
{#if $1}
   $2
{/if}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>ifelse -  If Else</summary>

```ts
{#if $1}
   $2
{:else}
   $3
{/if}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>ifelseif -  If Else If</summary>

```ts
{#if $1}
   $2
{:else if $3}
   $4
{/if}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>await -  Await</summary>

```ts
{#await $1}
   $2
{:then $3}
   $4
{/await}
$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>key -  Key</summary>

```ts
{#key $1}
   $2
{/key}
$0
```
</details>
    
    

## Note

The snippets include "$1", "$2"... which are placeholders for the cursor position. You can use the tab key to jump between them.

## License

MIT

## Credits
Forked from [svelte-snippets](https://github.com/jakob-kruse/svelte-snippets), thank you very much!