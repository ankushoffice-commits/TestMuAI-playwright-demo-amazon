# Playwright Hybrid Test Suite

## Prerequisites

- Node.js installed (recommended v18 or later)
- npm available from Node.js installation
- Windows environment is supported

## Setup

1. Open a terminal in the repository root:
   ```bash
   cd c:\Users\ankush.singh\Documents\AI\playwright-hybrid
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers if needed:
   ```bash
   npx playwright install
   ```

## Run tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test search-results.spec.ts
```

### Run a single test by name
```bash
npx playwright test --grep "search for iPhone"
```

## Configuration

- Test files are located in `tests/`
- Playwright config is in `playwright.config.ts`
- The default browser project is `chromium`
- HTML report output is enabled in the config

## View report

After running tests, open the HTML report:
```bash
npx playwright show-report
```

## Notes

- There are currently no npm scripts defined in `package.json`, so use `npx playwright ...` directly.
- If Playwright fails because browsers are missing, re-run:
  ```bash
  npx playwright install
  ```

## Common commands

```bash
npm install
npx playwright install
npx playwright test
npx playwright test tests/search-results.spec.ts
npx playwright show-report
```
