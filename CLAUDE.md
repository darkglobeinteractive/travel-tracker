# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build to /build
npm test         # Jest + React Testing Library (interactive watch mode)
npm test -- --watchAll=false  # Run tests once, no watch
```

## Architecture

This is a **Create React App** (no eject) project — webpack, Babel, and ESLint are managed by `react-scripts`. Do not add custom webpack/babel config files; configure ESLint through the `eslintConfig` key in `package.json`.

### Data Flow

The app fetches travel data from a WordPress REST API at `0degreesk.com` (configured in [src/apis/zerodegreesk.js](src/apis/zerodegreesk.js)) and renders it as an interactive travel journal.

```
WordPress API → Axios (zerodegreesk.js) → Redux Thunk actions → Redux store → Connected components
```

### Redux State Shape

```js
{
  active_date: { /* currently selected travel date entry */ },
  global:      { /* menu open/close, loading/ready flags */ },
  trip:        { /* top-level trip metadata and all entries */ },
  travel_dates: { /* keyed collection of dates with images, videos, places */ }
}
```

- Actions live in [src/actions/](src/actions/); all action type constants are in [src/actions/types.js](src/actions/types.js).
- Reducers live in [src/reducers/](src/reducers/), combined in [src/reducers/index.js](src/reducers/index.js).
- Redux DevTools middleware is enabled in [src/index.js](src/index.js).

### Component Conventions

- Components are **class-based** and connect to Redux via `connect()`.
- Container components (`App`, `TravelDate`) own Redux wiring and dispatch actions.
- Presentational components (`Header`, `MenuList`, `Spinner`, etc.) receive props only.
- Each component has a corresponding CSS file in [src/css/](src/css/) — import it at the top of the component file.

### Content Model

Each travel date entry can contain: images (`TravelDateImages`), videos (`TravelDateVideos`), and places/location info (`TravelDatePlaces`). These are rendered lazily inside `TravelDateContent` based on what data is present.
