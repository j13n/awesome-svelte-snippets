# Svelte Awesome Snippets for VSCode

Awesome, easy to remember snippets for Svelte and Svelte-Kit (using TypeScript).

Uses type inference when possible. No unnecessary type imports.

### Snippets structure:

* Svelte Kit for Svelte Kit specific typescript and routing files (the + files);
* Svelte TS for Svelte files that belong between the `<script lang="ts">` tags in a .svelte file;
* Svelte for Svelte templating snippets.

### Naming convention:
All snippets start with **sv**. I had a distinction between Svelte and Svelte Kit commands (**sv** or **sk**) but I decided against it as it adds mental overhead remembering the distinction.

Added support for Svelte 5 API:

- Runes
- Snippets

[Awesome Svelte Snippets on VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=j13n.awesome-svelte-snippets).

[For bugs or feedback, please open an issue on Github](https://github.com/j13n/awesome-svelte-snippets/issues).

## Snippets


### SVELTE KIT

<details>
<summary markdown="span"><b>sv</b>page -  Script</summary>

```ts
<script lang="ts">
	let { data }$1 = $$props()
</script>

$0
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>script -  Script</summary>

```ts
<script lang="ts">
	let { $1 }: $0 = $$props()
</script>
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>module -  Script Module</summary>

```ts
<script lang="ts" module>
	$1
</script>
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>load -  Load</summary>

```ts
export const load = async (${1:event}) => {
	$2
	return {
		$3
	};
};
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>actions -  Actions</summary>

```ts
export const actions = {
	${1:default}: async (${2:event}) => {
		$3
	}
}
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>hooks -  Hooks</summary>

```ts
export const handle = async ({ request, resolve }) => {
	$1
	return resolve(request);
};
```
</details>
    
    

### SVELTE TS

<details>
<summary markdown="span"><b>sv</b>state - Create a state variable</summary>

```ts
let ${1:variable} = $$state(${2:initialValue});
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>derived - Create a derived variable</summary>

```ts
let ${1:variable} = $$derived(${2:expression});
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>effect - Create a rune effect, including cleanup. Even if you don't need it, it's a good to atleast remind yourself that you should consider it.</summary>

```ts
$$effect(() => {
	$$inspect(${1:variable});

	return () => {
		console.log("cleanup");
	}
});
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>props - Add props to a component</summary>

```ts
let ${1:props}:$0 = $$props();
```
</details>
    

<details>
<summary markdown="span"><b>sv</b>inspect - Inspect a variable.</summary>

```ts
$$inspect(${0:variable});
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