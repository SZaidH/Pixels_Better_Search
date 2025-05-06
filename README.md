# Pixels Better Search

**Pixels Better Search** is a TypeScript app that complements the search feature of the productivity and journaling app [Pixels](https://play.google.com/store/apps/details?id=ar.teovogel.yip&hl=en). While the built-in search works well for simple queries, it may return unexpected results for more advanced cases.

Pixels Better Search lets you search through your Pixel notes using regular expressions, giving you more precise and flexible control over your journaling data.

## Folder Structure

```text
pixels-better-search/
├── data/
│   └── PIXELS.json         # Your Pixel data file - Replace this with your own
├── index.ts                # Main search logic
├── tsconfig.json           # TypeScript configuration
├── package.json            # Node dependencies
└── README.md               # Project documentation
```

## Setup

1. **Clone the repository and install the dependencies:**

```bash
git clone https://github.com/yourusername/pixels-better-search.git
cd pixels-better-search
npm install
```

2. **Import your Pixels data**

In your Pixels app, go to "Settings" and tap on the "Export Pixels data" button. Save this Pixels data to the "data" folder of the Pixels Better Search App.
Now all you need to do is open the index.ts file, and then replace the default Pixels filename with your own.

```bash
  const data: string = await fs.readFile(
      "./data/PIXELS_BACKUP.json", <--- Replace this
      "utf-8"
    );
```
3. **Searching for the desired data**

Navigate to the variable "searchRegex" and replace the regex to your liking.

```bash
const searchRegex = /\bac\b/i; <--- Modify according to your needs
```

4. **Executing the script**

Now run the following and the app will work as expected.

```bash
npm run start
```

Happy searching!

## Tech Stack
- Node.js
- TypeScript
- Promises API
