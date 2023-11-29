import { promises as fs } from "fs";

const SNIPPETS_DIR = "snippets";

type SnippetFile = Record<
  string,
  {
    prefix: string;
    body: string[];
    description: string;
  }
>;

interface Snippet {
  name: string;
  prefix: string;
  body: string;
  description: string;
}

interface SnippetCategory {
  name: string;
  snippets: Snippet[];
}

function snippetFileToSnippet(file: SnippetFile): Snippet[] {
  return Object.entries(file).map(([name, snippet]) => ({
    name,
    prefix: snippet.prefix,
    body: snippet.body.join("\n"),
    description: snippet.description,
  }));
}

function snippetTemplate(snippet: Snippet): string {
  return `
<details>
<summary markdown="span"><b>${snippet.prefix.slice(
    0,
    2
  )}</b>${snippet.prefix.slice(2)} - ${snippet.description
    .replace("SvelteKit", "")
    .replace("Svelte", "")}</summary>

\`\`\`ts
${snippet.body}
\`\`\`
</details>
    `;
}

function snippetCategoryTemplate(category: SnippetCategory): string {
  return `
### ${category.name.replace(".json", "").replace(/-/g, " ").toUpperCase()}
${category.snippets.map(snippetTemplate).join("\n")}
    `;
}

const readmeTemplate = (categories: SnippetCategory[]): string => {
  return `
# Svelte Awesome Snippets for VSCode

Awesome Snippets for Svelte and Svelte-Kit (using TypeScript).

Uses type inference when possible. No unnecessary type imports.

Supports Svelte 5 RUNES (R00nz / signals).

[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=j13n.awesome-svelte-snippets)

## Snippets

${categories.map(snippetCategoryTemplate).join("\n")}

## Note

The snippets include "$1", "$2"... which are placeholders for the cursor position. You can use the tab key to jump between them.

## License

MIT

## Credits
Forked from [svelte-snippets](https://github.com/jakob-kruse/svelte-snippets), thank you very much!
`;
};

async function run() {
  const fileNames = await fs.readdir(SNIPPETS_DIR);

  const contents: SnippetFile[] = await Promise.all(
    fileNames.map(
      async (file) =>
        await fs.readFile(`snippets/${file}`, "utf-8").then(JSON.parse)
    )
  );

  const snippets = contents.map(snippetFileToSnippet);

  const categories = fileNames.map((name, idx) => ({
    name: name.split("-").join(" "),
    snippets: snippets[idx],
  }));

  const readme = readmeTemplate(categories);

  await fs.writeFile("README.md", readme.trim());
}

run();
