# Shared UI Component Library

A comprehensive React component library built with [shadcn/ui](https://ui.shadcn.com/), TypeScript, and Tailwind CSS. This library contains all shadcn/ui components pre-installed and ready to customize.

## Features

- 🎨 **54+ UI Components** - All shadcn/ui components pre-installed
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **Customizable** - All components are in your codebase, modify as needed
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Built on Radix UI primitives

## Installation

### From GitHub

```bash
# npm
npm install git+https://github.com/xizot/share-ui.git

# yarn
yarn add git+https://github.com/xizot/share-ui.git

# pnpm
pnpm add git+https://github.com/xizot/share-ui.git
```

### Setup in Your Project

This library uses **Tailwind CSS v4**. The CSS is already bundled, but you need to ensure your project is compatible:

1. **If your project uses Tailwind CSS v4**:
   - No additional setup needed! The styles are bundled with the library.
   - Import the styles if needed: `import 'shared-ui/styles'`

2. **If your project uses Tailwind CSS v3**:
   - You may need to upgrade to v4, or
   - Copy the CSS variables from `shared-ui/src/index.css` to your project's CSS file
   - Update your `tailwind.config.js` to include the library:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/shared-ui/dist/**/*.{js,mjs}", // Add this
     ],
     // ... rest of your config
   }
   ```

3. **CSS Variables**: The library uses CSS variables for theming. Make sure your project has the same CSS variables defined, or copy them from `shared-ui/src/index.css`.

## Usage

### Basic Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'shared-ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Import Specific Components

```tsx
import { Button } from 'shared-ui'
import { Card, CardHeader, CardTitle } from 'shared-ui'
import { Input, Label } from 'shared-ui'
```

### Using Utilities

```tsx
import { cn } from 'shared-ui'

// Merge Tailwind classes
const className = cn("base-class", condition && "conditional-class")
```

## Available Components

### Layout & Structure
- **accordion** - Collapsible content sections
- **aspect-ratio** - Maintain aspect ratios
- **card** - Container for content
- **separator** - Visual divider
- **resizable** - Resizable panels
- **scroll-area** - Custom scrollable area
- **sidebar** - Sidebar navigation

### Navigation
- **breadcrumb** - Breadcrumb navigation
- **menubar** - Menu bar component
- **navigation-menu** - Navigation menu
- **pagination** - Pagination controls
- **tabs** - Tabbed interface

### Forms & Inputs
- **button** - Button component with variants
- **button-group** - Group of buttons
- **checkbox** - Checkbox input
- **input** - Text input field
- **input-group** - Input with addons
- **input-otp** - OTP input field
- **label** - Form label
- **radio-group** - Radio button group
- **select** - Select dropdown
- **slider** - Range slider
- **switch** - Toggle switch
- **textarea** - Multi-line text input
- **form** - Form wrapper with validation
- **field** - Form field wrapper

### Feedback
- **alert** - Alert messages
- **alert-dialog** - Modal alert dialog
- **progress** - Progress indicator
- **skeleton** - Loading skeleton
- **spinner** - Loading spinner
- **sonner** - Toast notifications
- **toast** - Toast notifications

### Overlays
- **dialog** - Modal dialog
- **drawer** - Slide-out drawer
- **dropdown-menu** - Dropdown menu
- **hover-card** - Hover card
- **popover** - Popover component
- **sheet** - Side sheet
- **tooltip** - Tooltip component
- **context-menu** - Right-click menu

### Data Display
- **avatar** - User avatar
- **badge** - Badge component
- **calendar** - Date picker calendar
- **carousel** - Image/content carousel
- **chart** - Chart components
- **empty** - Empty state
- **kbd** - Keyboard key display
- **table** - Data table
- **toggle** - Toggle button
- **toggle-group** - Toggle button group

### Advanced
- **collapsible** - Collapsible content
- **command** - Command palette
- **item** - List item component

## Customization

All components are located in `node_modules/shared-ui/src/components/ui/`. You can:

1. **Copy components to your project** and modify them
2. **Override styles** using Tailwind classes
3. **Modify the theme** by updating CSS variables
4. **Extend components** by wrapping them

### Theme Customization

Update CSS variables in your project's CSS file:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build

# Type check
npm run type-check
```

### Project Structure

```
shared-ui/
├── src/
│   ├── components/
│   │   └── ui/          # All shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions (cn)
│   ├── hooks/           # Custom hooks
│   └── index.ts         # Main export file
├── dist/                # Build output
├── components.json       # shadcn/ui config
└── package.json
```

## Dependencies

### Peer Dependencies
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0

### Included Dependencies
- All Radix UI primitives
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react` (icons)
- And more (see package.json)

## License

MIT

## Contributing

This is a shared UI library. Feel free to customize components as needed for your projects.

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
