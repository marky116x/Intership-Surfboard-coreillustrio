 
### Feature Added  – `MovieDetailComponent`

#### New Feature: Watch Trailer
- **Purpose:** Allow users to watch a selected trailer when clicked on watch trailer button.
- **Implementation Highlights:**
  - A new method `selectTrailer(trailer)` was added to:
    - Construct a YouTube embed URL with autoplay, and then removed auto play and set on click of button  play .
    - Trigger trailer display with `showTrailer = False`.
  - A fullscreen modal appears when `showTrailer` is true, with an embedded YouTube `iframe`.
  - A close button (`closeTrailer()`) to hides the trailer.


####  Updated Feature: Toggle Watchlist 
- **Purpose:** Enable users to add or remove a movie from their watchlist dynamically.
- **Implementation Highlights:**
  - The `toggleWatchlist()` method now:
    - Checks if the current movie is in the watchlist.
    - Adds or removes it accordingly via `WatchlistService`.
  - The watchlist icon dynamically changes based on the current watchlist state using an `@if` block and ternary text.
  - Ensures immediate visual feedback on button click.

 ### 3. Design Improvement with SVG
Purpose: Visually enhance UI and add modern interaction cues.

**Key Points:**

Embedded custom SVG icons inside action buttons (e.g., play button, watchlist toggle).

**SVGs used:**

Play icon inside red circular background for trailer previews.

Watchlist icons switch between a bookmark and a cross (remove) for visual clarity.

Improved button appearance.
