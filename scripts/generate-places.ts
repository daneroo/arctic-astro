import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";

async function generatePlaces() {
  // You can choose to read either JSON or YAML
  const yamlContent = await fs.readFile(
    path.join(process.cwd(), "arctic-data.yaml"),
    "utf-8"
  );
  // console.log("YAML Content:", yamlContent.substring(0, 200)); // Show first 200 chars
  const data = yaml.load(yamlContent) as {
    places: Array<{
      id: number;
      name: string;
      latitude: number;
      longitude: number;
      osm_id: string | null;
      description?: string;
    }>;
  };
  const places = data.places;
  // console.log("Parsed places:", places);

  // Create content directory if it doesn't exist
  const contentDir = path.join(process.cwd(), "src/content/places");
  await fs.mkdir(contentDir, { recursive: true });

  // Generate markdown files for each place
  for (const place of places) {
    console.log(`Generating place: ${place.name} (${place.id})`);
    const frontmatter = `---
id: ${place.id}
name: "${place.name}"
latitude: ${place.latitude}
longitude: ${place.longitude}
osm_id: ${place.osm_id ? `"${place.osm_id}"` : "null"}
---

${place.description || ""}
`;

    const fileName = `${place.id}.md`;
    await fs.writeFile(path.join(contentDir, fileName), frontmatter);
  }

  console.log(`Generated ${places.length} place files`);
}

generatePlaces().catch(console.error);
