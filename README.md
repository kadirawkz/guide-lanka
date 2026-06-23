# Guide Lanka

Guide Lanka is a static tourism website designed to showcase the beauty, culture, and travel experiences of Sri Lanka. The project focuses on clean presentation, visual storytelling, and simple navigation, making it suitable for lightweight hosting on any static server or GitHub Pages.

## Overview

The site is organized around a few practical goals:

- Introduce Sri Lanka as a travel destination with a strong visual first impression
- Highlight major regions, attractions, and cultural experiences
- Present seasonal events and festivals in an easy-to-scan format
- Keep the implementation simple, maintainable, and easy to extend

This repository is intentionally built without a framework or build pipeline. That keeps setup friction low and makes the project approachable for quick edits, demos, and academic submissions.

## Features

- Responsive homepage with a rotating hero carousel
- Destination cards and location-specific content pages
- Dedicated pages for about, travel ideas, and news/events
- Lightweight sign-in page layout
- Shared styling across pages for a consistent brand feel
- Vanilla JavaScript interactions without external application dependencies

## Technology

- HTML5 for content structure
- CSS3 for layout, styling, and responsive design
- Vanilla JavaScript for carousel behavior and basic interactivity
- Google Fonts for typography
- Font Awesome for icons

## Repository Structure

```text
assets/
  img/      Travel photography and site imagery
css/        Shared stylesheets and page-specific styling
js/         Client-side scripts for interactive elements
*.html      Individual site pages
README.md   Project documentation
.gitignore  Local development ignore rules
```

## Pages

- `index.html` - Homepage with featured destinations and hero carousel
- `about.html` - Project background and mission
- `things.html` - Experiences and activities across Sri Lanka
- `place.html` - Destination detail page
- `colombo.html` - Colombo destination page
- `badulla.html` - Badulla destination page
- `event.html` - News, seasonal attractions, and festivals
- `login.html` - Sign-in page layout

## Getting Started

You do not need to install dependencies to use this project.

### Option 1: Open the site directly

Open `index.html` in your browser from the file system.

### Option 2: Run a local server

Serving the site locally is recommended so relative links and browser behavior work consistently.

If Python is installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use any other static server, such as VS Code Live Server or a simple hosting service.

## Design Notes

- The site uses large imagery, so image optimization has a direct impact on load performance.
- External assets are loaded from Google Fonts and Font Awesome CDNs.
- The current codebase is intentionally simple, which makes it easy to adapt for new destinations, events, or sections.

## Maintenance Guidelines

If you extend the site, a few habits will keep it healthy:

- Keep page-specific assets grouped by purpose and avoid cluttering the root folder
- Reuse shared CSS before creating new stylesheets
- Keep JavaScript focused on user interaction and avoid duplicating logic across pages
- Compress large images before committing new media files
- Verify internal links after adding or renaming pages

## Suggested Improvements

If you want to evolve the project further, the most valuable next steps would be:

- Add a reusable navigation pattern across pages
- Standardize page titles and metadata for better SEO
- Add a contact page and real form handling
- Replace placeholder links with working destinations or actions
- Optimize and rename image assets for consistency

## License

No license has been defined yet. Add one if you want to clearly state how the project can be used, shared, or modified.