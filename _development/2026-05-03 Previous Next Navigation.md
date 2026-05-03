# Previous/Next Navigation

This app is a single page and lacks routing. The only way to navigate between "pages" is to use the menu that's created in the src/components/MenuList.js component. We want to add a simple way to navigate between adjacent "pages".

## Information

- The app retrieves a list of posts from a WordPress REST API at https://0degreesk.com/
- The src/actions/fetchTrip.js action retrieves the acf.travel_dates
- The src/components/MenuList.js component creates a list of "links" to these different "pages" from these travel_dates

The menu that MenuList.js creates is essentially the list of dates we are concerned with below.

## Task

We want to create a previous/next navigation that would do the following:
- If the first date is active, we see a "Next" button that changes the active date to the next date in line
- If the last date is active, we see a "Previous" button that changes the active date to the previous date in line
- Otherwise, there is a date before and after the active date, so we should see both the "Previous" and "Next" buttons

If this represents the list of travel dates that src/components/MenuList.js creates:
- Date 5
- Date 4
- Date 3
- Date 2
- Date 1

If "Date 3" is the active date and we are viewing it in the browser, we see the "Previous" and "Next" buttons in our proposed navigation.

If "Date 1" is the active date, we will only see the "Next" button.

If "Date 5" is the active date, we will only see the "Previous" button.

## Suggested Approach

This is what I'm thinking, but I would like you to ultimately think about this hard and recommend what you think is the best approach.

I think that modifying src/components/TravelDate.js to include a new item that's similar to renderTLDR() on Lines 24-33 would be a good approach. This function would somehow determine the placement of this active date in the global date list and generate a navigation element that would include the relevant "Previous" and/or "Next" buttons.

I would like the final HTML structure of this navigation to look like this to begin with:
<nav id="prev-next" aria-label="Previous/Next Date Navigation">
  <button class="prev" aria-label="View Previous Date">Previous</button>
  <button class="next" aria-label="View Next Date">Next</button>
</nav>

## Production Notes

### src/components/TravelDate.js

- Added `selectDate` to the import from `../actions` so the component can dispatch a date change.
- Added `selectDate` to the `connect()` call, making it available as `this.props.selectDate`.
- Added a `renderPrevNext(date_prev, date_next)` method. It returns a `<nav id="prev-next">` element containing conditionally rendered Previous and Next buttons. Each button only renders if its corresponding ID (`date_prev` or `date_next`) is truthy, and its `onClick` calls `this.props.selectDate()` with that ID. These IDs come from the WordPress ACF fields `travel_previous_post` and `travel_next_post`, which are already stored in the `travel_dates` Redux state.
- Called `renderPrevNext(date_prev, date_next)` inside the new `.prev-next-nav` wrapper in the render output.
- Fixed two JSX warnings: two instances of `class` were corrected to `className` on the `.date-info` and `.prev-next-nav` wrapper divs inside `.sub-banner`.

### src/css/TravelDate.css

- Added styles for the `.sub-banner` flex layout, positioning `.date-info` and `.prev-next-nav` side by side.
- Added button styles for `#prev-next` buttons: fixed 40×40px size, no border, text hidden via `text-indent: -9999em` (image replacement technique), and `cursor: pointer`.
- Set the Previous button's background image to `nav-btn-prev.png` and overrode it with `nav-btn-next.png` for the Next button using a `.next` class selector.
- Updated image `url()` paths from `/nav-btn-prev.png` / `/nav-btn-next.png` (which webpack resolves against the filesystem root, causing an error) to relative paths `../images/nav-btn-prev.png` / `../images/nav-btn-next.png`, which webpack can correctly bundle.

### src/images/nav-btn-next.png

Moved from `public/` to `src/images/`. Files in `public/` cannot be referenced by relative or root-relative paths in CSS files processed by webpack — they must live inside `src/` so webpack can resolve and bundle them.

### src/images/nav-btn-prev.png

Moved from `public/` to `src/images/` for the same reason as `nav-btn-next.png` above.