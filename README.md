# ObsidianMark

ObsidianMark is a web extension that allows you to clip web content directly to your Obsidian vault. This project is a modified version of [kepano's obsidian-web-clipper](https://github.com/kepano/obsidian-web-clipper), reimplemented as a web extension to circumvent Content Security Policy (CSP) issues with websites.

## Features

- Clip entire web pages or selected content
- Convert web content to Markdown format
- Automatically add metadata including title, author, source URL, and date
- Customize vault name, default folder, and tags
- Compatible with Chrome-based browsers and Firefox

## Installation

### Web Store Installation (Coming Soon)
- Chrome Web Store: [Link to be added]
- Firefox Add-ons: [Link to be added]

### Manual Installation

1. Clone this repository or download the source code
2. Open the `manifest.json` file and edit the `background` section as follows:

   ```json
    "background": {
      /* add the following for Chrome */
      "service_worker": "background.js",
       /* or leave for Firefox */
      "scripts": [
        "background.js"
      ],
      "type": "module"
    }
   ```

   Add the appropriate section for your browser and comment out the other.

3. Open your browser and navigate to the extensions page:
   - For Chrome: `chrome://extensions`
   - For Firefox: `about:debugging#/runtime/this-firefox`
4. Enable "Developer mode" (Chrome) or click "Load Temporary Add-on" (Firefox)
5. Click "Load unpacked" (Chrome) or choose the manifest.json file (Firefox) and select the directory containing the extension files

## Usage

1. Navigate to a webpage you want to clip
2. Click the ObsidianMark extension icon in your browser toolbar
3. If text is selected on the page, only the selected content will be clipped. Otherwise, the entire page will be clipped.
4. The extension will clip the content and open Obsidian with the new note

## Configuration

You can configure the extension settings by right-clicking the extension icon and selecting "Options". Here you can set:

- Vault name
- Default folder for clipped content
- Default tags

## Todo

Future plans for ObsidianMark include:

- Add more fine-tuned options for frontmatter handling
- Improve filename handling
- Implement special formatting for certain websites

Contributions to these features or other improvements are welcome! Feel free to submit a Pull Request or open an issue to discuss potential enhancements.

## Credits

- This project is based on [kepano's obsidian-web-clipper](https://github.com/kepano/obsidian-web-clipper)
- Some code patterns were inspired by [Decentraleyes](https://git.synz.io/Synzvato/decentraleyes)