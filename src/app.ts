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

    // Defining the regex pattern - this is where you input your own regex and search anything from the Pixel notes
    const searchRegex = /\bac\b/i;

    // Filtering the Pixel data based on the regex pattern
    const results = jsonData.filter((entry) => {
      // Clearing up the new lines for the regex test
      const cleanLines = entry.notes.replace(/[\n\r]+/g, " ").trim();
      return searchRegex.test(cleanLines);
    });

    // Displaying the filtered Pixel data with cleaned up new lines
    const cleanedResults = results.map((pixel) => ({
      ...pixel,
      notes: pixel.notes.replace(/[\n\r]+/g, " ").trim(),
    }));
    console.log(cleanedResults);
    // Number of entries containing the search data
    console.log(cleanedResults.length + " pixel(s) found.");
  } catch (err) {
    console.error("Error searching pixels:", err);
  }
}

searchPixels();
