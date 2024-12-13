# Arctic Astro

## TODO

- [x] select layout and style
  - [ ] clone style/ i18n from `arctic-team`
- [x] implement search
- [x] i18n
- [ ] improve Leaflet integration
  - [ ] switch from CDN to npm package
  - [ ] properly handle CSS and assets
  - [ ] configure Vite/Astro for better module bundling

## Prompt

```text
I need to build an astro v5 site: arctic-astro, based on a supabase site: arctic-team

pnpm create astro@latest arctic-astro
cd arctic-astro
pnpm install


This is done

Now the context is:

- app: arctic-team
- I already have a supabase app, with a single table: places
- It has this supabase schema:

export interface Database {
  public: {
    Tables: {
      places: {
        Row: {
          id: string;
          name: string;
          latitude: number;
          longitude: number;
          osm_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["places"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["places"]["Insert"]>;
      };
    };
  };
}

also, I have a secondary repo: scrobble-arctic-data:
which uses a scheduled GitHub action ever 20 minutes, to export a complet dump of the supabase table: places
The output looks like this:
[
  {
    "id": 5,
    "name": "Permafrost Impact on Aquatic Systems",
    "latitude": 69.2342410666946,
    "longitude": -105.990416602275,
    "osm_id": null,
    "description": "Arctic is warming planet..."
  },
  {
    "id": 6,
    "name": "Kitigaq Area Permafrost Degradation",
    "latitude": 69.2319,
    "longitude": -105.9444,
    "osm_id": null,
    "description": "Pr. Frédéric Bouchard team f..."
  },
...
]

I also have this file in yaml format: `arctic-data.yaml`

Now I would like to create a places collection with zod based validation.
We will have a one time transofmration of my json/yaml data into markdown documents.

```

## Upstream README Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```

</rewritten_file>