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

### Peer Dependencies

This library requires the following peer dependencies. You need to install them separately:

```bash
# Required peer dependencies
npm install react react-dom

# Optional peer dependencies (only if you use RHF components or date pickers)
npm install react-hook-form date-fns react-day-picker
```

**Peer Dependencies:**
- `react` ^18.0.0 || ^19.0.0 (required)
- `react-dom` ^18.0.0 || ^19.0.0 (required)
- `react-hook-form` ^7.0.0 (optional - only for RHF components)
- `date-fns` ^2.0.0 || ^3.0.0 (optional - only for date pickers)
- `react-day-picker` ^9.0.0 (optional - only for date pickers)

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
import { cn, get, hasValue } from 'shared-ui'

// Merge Tailwind classes
const className = cn("base-class", condition && "conditional-class")

// Get nested object property
const userName = get(user, 'profile.name') // Safe property access

// Check if value exists
if (hasValue(data)) {
  // Handle non-empty value
}
```

### Using Hooks

```tsx
import { useIsMobile } from 'shared-ui'

function MyComponent() {
  const isMobile = useIsMobile()
  
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### Using RHF Components

```tsx
import { useForm } from 'react-hook-form'
import { RHFInput, RHFTextarea, RHFCombobox } from 'shared-ui'

function MyForm() {
  const { control, register } = useForm({
    defaultValues: {
      email: '',
      message: '',
      country: ''
    }
  })

  const options = [
    { id: 1, name: 'Vietnam' },
    { id: 2, name: 'USA' }
  ]

  return (
    <form>
      <RHFInput
        control={control}
        register={register}
        name="email"
        label="Email"
        type="email"
        required
      />
      
      <RHFTextarea
        control={control}
        register={register}
        name="message"
        label="Message"
        required
      />
      
      <RHFCombobox
        control={control}
        name="country"
        options={options}
        label="Country"
        required
      />
    </form>
  )
}
```

### Using Toast Notifications

```tsx
import { Toaster, toast } from 'shared-ui'

function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast.success('Success!')}>
        Show Toast
      </button>
    </>
  )
}
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
- **combobox** - Searchable select dropdown
- **input** - Text input field with label/error support
- **input-group** - Input with addons
- **input-otp** - OTP input field
- **label** - Form label
- **radio-group** - Radio button group
- **select** - Select dropdown with label/error support
- **slider** - Range slider
- **switch** - Toggle switch
- **textarea** - Multi-line text input with label/error support
- **form** - Form wrapper with validation
- **field** - Form field wrapper

### React Hook Form Components (RHF)
- **RHFInput** - Input with react-hook-form integration
- **RHFTextarea** - Textarea with react-hook-form integration
- **RHFCombobox** - Combobox with react-hook-form integration
- **RHFSwitch** - Switch with react-hook-form integration
- **RHFRadioGroup** - RadioGroup with react-hook-form integration
- **RHFDatePicker** - Date picker with react-hook-form integration
- **RHFDateRangePicker** - Date range picker with react-hook-form integration
- **RHFFormattedInput** - Formatted input (integer, decimal, currency) with react-hook-form integration

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

## Guidelines

### When to Install Peer Dependencies

**Always Required:**
- `react` and `react-dom` - Core React dependencies

**Only if using RHF Components:**
- `react-hook-form` - Required for all `RHF*` components (RHFInput, RHFTextarea, RHFCombobox, etc.)

**Only if using Date Pickers:**
- `date-fns` - Required for date formatting in RHFDatePicker and RHFDateRangePicker
- `react-day-picker` - Required for Calendar component and date pickers

### Best Practices

1. **Import Styles First**
   ```tsx
   import 'shared-ui/styles.css' // Import at the top of your entry file
   import { Button } from 'shared-ui'
   ```

2. **Tree-shaking**
   - Import only what you need to keep bundle size small
   ```tsx
   // ✅ Good - Tree-shakeable
   import { Button, Input } from 'shared-ui'
   
   // ❌ Avoid - Imports everything
   import * as SharedUI from 'shared-ui'
   ```

3. **Using RHF Components**
   ```tsx
   import { useForm } from 'react-hook-form'
   import { RHFInput, RHFTextarea } from 'shared-ui'
   
   function MyForm() {
     const { control, register } = useForm()
     
     return (
       <form>
         <RHFInput
           control={control}
           register={register}
           name="email"
           label="Email"
           required
         />
       </form>
     )
   }
   ```

4. **Using Date Pickers**
   ```tsx
   import { RHFDatePicker } from 'shared-ui'
   import { format } from 'date-fns' // date-fns is peer dependency
   
   // Make sure react-day-picker is installed
   ```

5. **Component Props**
   - All `className` props use `ComponentProps['className']` for type safety
   - Always pass `id` prop when using `label` to ensure proper accessibility

6. **Error Handling**
   - RHF components automatically display errors from react-hook-form
   - Base components (Input, Textarea, etc.) accept `error` prop directly

7. **Accessibility**
   - All components follow ARIA guidelines
   - Labels are properly linked to inputs via `htmlFor` and `id`
   - Error messages are announced to screen readers

8. **Available Utilities**
   - **Core**: `cn()`, `get()`, `hasValue()`, `toast`
   - **Formatting**: `formatCurrency()`, `formatDate()`, `formatPhoneNumber()`, `formatFileSize()`, `truncate()`
   - **Validation**: `validateEmail()`, `validatePhone()`, `validateURL()`, `validateVietnamesePhone()`
   - **Data**: `deepMerge()`, `pick()`, `omit()`, `groupBy()`, `sortBy()`
   - **String**: `slugify()`, `camelCase()`, `kebabCase()`, `capitalize()`
   - **Performance**: `lazyLoad()`, `calculateVirtualScroll()`

9. **Available Hooks**
   - **Media**: `useIsMobile()`, `useIsTablet()`, `useMediaQuery()`, `useBreakpoint()`, `useWindowSize()`
   - **Form**: `useDebounce()`, `useDebouncedCallback()`, `useThrottle()`
   - **Storage**: `useLocalStorage()`, `useSessionStorage()`
   - **UI**: `useClickOutside()`, `useCopyToClipboard()`, `useToggle()`, `usePrevious()`
   - **Performance**: `useMemoizedCallback()`
   - **Accessibility**: `useFocusTrap()`, `useKeyboardNavigation()`, `useAriaLabel()`
   - **Theme**: `useTheme()` (requires ThemeProvider)
   - **i18n**: `useTranslation()` (requires I18nProvider)

10. **Available Components**
    - **Layout**: `Container`, `Stack`, `Grid`, `Divider`
    - **Feedback**: `LoadingButton`, `ConfirmDialog`, `DeleteConfirmDialog`
    - **Data Display**: `DataTable`, `EmptyState`, `LoadingState`, `ErrorBoundary`, `StatusBadge`
    - **RHF Components**: `RHFInput`, `RHFTextarea`, `RHFNumberInput`, `RHFCheckboxGroup`, `RHFMultiSelect`, `RHFUpload`, `RHFTimePicker`, `RHFDatePicker`, `RHFDateRangePicker`, `RHFCombobox`, `RHFSwitch`, `RHFRadioGroup`, `RHFFormattedInput`

11. **Available Constants**
    - `BREAKPOINTS` - Responsive breakpoints (sm, md, lg, xl, 2xl)
    - `REGEX` - Common regex patterns (email, phone, URL, etc.)
    - `DATE_FORMATS` - Predefined date format strings

12. **Available Types**
    - `ComboboxOption`, `ComboboxBaseOption`
    - `ChartConfig`
    - `DeepPartial`, `RequiredFields`, `OptionalFields`, `Prettify`
    - `StatusType`, `Breakpoint`, `DateFormat`

## Dependencies

### Peer Dependencies
- `react` ^18.0.0 || ^19.0.0 (required)
- `react-dom` ^18.0.0 || ^19.0.0 (required)
- `react-hook-form` ^7.0.0 (optional - for RHF components)
- `date-fns` ^2.0.0 || ^3.0.0 (optional - for date pickers)
- `react-day-picker` ^9.0.0 (optional - for date pickers)

### Included Dependencies
- All Radix UI primitives
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react` (icons)
- `sonner` (toast notifications)
- And more (see package.json)

## License

MIT

## Contributing

This is a shared UI library. Feel free to customize components as needed for your projects.

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
