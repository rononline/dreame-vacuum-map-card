# Dreame Vacuum Map Card

A modern, beautiful Home Assistant Lovelace card for controlling Dreame robot vacuums. Built with React, TypeScript, and SCSS.

## Features

(Almost) complete feature pairity with the original Dreame application

<div style="display: flex; gap: 10px;">
    <img src="screenshots/light-main.png" alt="Main Screen Light" style="width: 33%;">
    <img src="screenshots/dark-main.png" alt="Main Screen Dark" style="width: 33%;">
</div>

<div style="display: flex; gap: 10px;">
    <img src="screenshots/light-genius.png" alt="CleanGenius Light" style="width: 33%;">
    <img src="screenshots/dark-genius.png" alt="CleanGenius Dark" style="width: 33%;">
</div>

<div style="display: flex; gap: 10px;">
    <img src="screenshots/light-custom.png" alt="Custom Cleaning Light" style="width: 33%;">
    <img src="screenshots/dark-custom.png" alt="Custom Cleaning Dark" style="width: 33%;">
</div>

<div style="display: flex; gap: 10px;">
    <img src="screenshots/room-cleaning.png" alt="Room Cleaning Light" style="width: 33%;">
    <img src="screenshots/dark-room-cleaning.png" alt="Room Cleaning Dark" style="width: 33%;">
</div>

<div style="display: flex; gap: 10px;">
    <img src="screenshots/zone-cleaning.png" alt="Zone Cleaning Light" style="width: 33%;">
    <img src="screenshots/dark-zone-cleaning.png" alt="Zone Cleaning Dark" style="width: 33%;">
</div>

## Installation

### 1. Download the card
Download `dreame-vacuum-map-card.js` from the releases page

### 2. Add to Home Assistant
Copy the file to your Home Assistant config directory:
```
/config/www/dreame-vacuum-map-card/dreame-vacuum-map-card.js
```

### 3. Add resource to Lovelace
Go to Settings → Dashboards → Resources → Add Resource:
- URL: `/local/dreame-vacuum-map-card/dreame-vacuum-map-card.js`
- Resource type: JavaScript Module

### 4. Add card to dashboard
```yaml
type: custom:dreame-vacuum-map-card
entity: vacuum.dreame_vacuum_entity
title: Dreame Vacuum
map_entity: camera.dreame_vacuum_entity # Optional, defaults to camera.${ENTITY_NAME}_map
theme: dark # Optional, 'light' (default) or 'dark'
```

## Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entity` | string | **Required** | Entity ID of your Dreame vacuum |
| `title` | string | Optional | Custom title for the card |
| `map_entity` | string | Optional | Camera entity for the vacuum map (defaults to `camera.${ENTITY_NAME}_map`) |
| `theme` | string | `light` | Theme mode: `light` or `dark` |

## Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup
```bash
npm install
```

### Development Mode

Run the development server with mock data:
```bash
npm run dev
```

The app will start at http://localhost:5173 with mock vacuum data automatically loaded.

#### Development with Mock API Server

If you need to test API endpoints, run the mock server separately:

**Terminal 1 - Mock Server:**
```bash
npm run mock
```

**Terminal 2 - Dev Server:**
```bash
npm run dev
```

Or run both together:
```bash
npm run dev:mock
```

#### Environment Configuration

Copy `.env.example` to `.env` and customize as needed:
```bash
cp .env.example .env
```

Available environment variables:
- `VITE_MOCK_ENTITY_ID` - Mock vacuum entity ID (default: `vacuum.dima`)
- `VITE_MOCK_ENTITY_TITLE` - Display title (default: `Dima`)
- `VITE_MOCK_SERVER_URL` - Mock server URL (default: `http://localhost:3001`)
- `VITE_MOCK_SERVER_PORT` - Mock server port (default: `3001`)

See [ENV_VARIABLES.md](ENV_VARIABLES.md) for detailed configuration options.

#### Development Utilities

In development mode, utilities are available in the browser console:

```javascript
// Check current vacuum state
devUtils.getState()

// Call vacuum services
devUtils.callService('vacuum', 'start')

// Simulate scenarios
devUtils.simulateCleaningComplete()
devUtils.simulateBatteryDrain(20)
devUtils.simulateError('Wheel stuck')
devUtils.resetVacuum()

// Update state manually
devUtils.updateState({ state: 'cleaning' })
```

### Build for Production
```bash
npm run build
```

The built file will be in `dist/dreame-vacuum-map-card.js`

## Tech Stack

- **React 19.2.0** 
- **TypeScript 5.9.3**
- **Vite 7.2.4**
- **SASS**

## Requirements

- Home Assistant with the [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) integration installed
- A supported Dreame robot vacuum

## Credits

- Original inspiration from [xiaomi-vacuum-map-card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card)
- [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) integration by Tasshack

## License

MIT License - see [LICENSE](LICENSE) file for details

