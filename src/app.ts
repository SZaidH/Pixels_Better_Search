import { promises as fs } from "fs";

// Interface for the Pixel JSON file
interface Tag {
  type: string;
  entries: string[];
}

interface Pixel {
  date: string;
  type: string;
  scores: number[];
  notes: string;
  tags: Tag[];
}

async function searchPixels(): Promise<void> {
  try {
    // Reading the Pixel JSON file
    // Replace the filename 'PIXELS_BACKUP.json' with the Pixel JSON file you stored in the data folder
    const data: string = await fs.readFile(
      "./data/PIXELS_BACKUP.json",
      "utf-8"
    );

    // Parsing the Pixel data
    const jsonData: Pixel[] = JSON.parse(data);

    // Defining the regex pattern
    const searchRegex = /\bac\b/i;

    // Filtering the Pixel data based on the regex pattern
    const results = jsonData.filter((entry) => searchRegex.test(entry.notes));

    // Displaying the filtered Pixel data
    console.log(results);
  } catch (err) {
    console.error("Error searching pixels:", err);
  }
}

searchPixels();
