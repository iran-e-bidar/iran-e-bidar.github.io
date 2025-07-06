# Iran-e Bidar Visual Grammar & Design System

## Design Philosophy
**Democratic Transparency Through Visual Clarity**
- Clean, accessible design that reflects democratic principles
- Bilingual support with proper RTL consideration
- Progressive disclosure of information
- Trust-building through consistent, professional presentation

## Color Palette

### Primary Colors
- **Primary Blue** (`#3498db`): Democratic trust, stability, participation
- **Primary Dark** (`#2980b9`): Hover states, emphasis
- **Secondary Green** (`#27ae60`): Progress, success, growth
- **Accent Orange** (`#f39c12`): Celebration, achievements

### Neutral Colors
- **Dark** (`#2c3e50`): Headlines, primary text
- **Medium** (`#34495e`): Body text, descriptions  
- **Light** (`#7f8c8d`): Secondary text, metadata
- **Danger Red** (`#e74c3c`): GitHub links, alerts

### Background Colors
- **Primary** (`#ffffff`): Main background
- **Secondary** (`#f8f9fa`): Cards, sections
- **Accent** (`#e8f4f8`): Highlights, call-outs

## Typography Scale

### Font Family
`'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Modern, accessible system fonts
- Good Unicode support for Persian text
- Cross-platform consistency

### Size Scale (Responsive)
- **3XL**: `clamp(2rem, 8vw, 4rem)` - Main titles
- **2XL**: `clamp(1.5rem, 4vw, 2rem)` - Section headers  
- **XL**: `clamp(1.25rem, 4vw, 1.5rem)` - Subsection headers
- **LG**: `clamp(1.125rem, 3vw, 1.25rem)` - Card titles
- **Base**: `clamp(1rem, 2.5vw, 1.125rem)` - Body text
- **SM**: `clamp(0.875rem, 2.5vw, 1rem)` - Small text
- **XS**: `clamp(0.75rem, 2vw, 0.875rem)` - Metadata

### Line Heights
- **Tight** (1.25): Headlines
- **Base** (1.6): General text
- **Relaxed** (1.8): Long-form content

## Spacing System

### Scale (CSS Custom Properties)
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px) 
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 2.5rem (40px)
- **3XL**: 3rem (48px)

### Usage Patterns
- **Component padding**: XL (32px)
- **Section margins**: 2XL (40px)
- **List item spacing**: SM (8px)
- **Button padding**: SM XL (8px 32px)

## Component Library

### Process Flow Hero
```css
.process-flow-hero {
  background: linear-gradient(135deg, primary, primary-dark);
  border-radius: 12px;
  padding: 40px 32px;
  box-shadow: large;
}
```

**Visual Purpose**: Prominent display of democratic process
**Interactive**: All steps clickable with hover effects
**Accessibility**: High contrast, clear focus states

### Action Cards
```css
.action-card {
  background: secondary-bg;
  border: 2px solid transparent;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
```

**Variants**: 
- `.primary`: Primary actions (Join Discussions, Propose Changes)
- `.secondary`: Supporting actions (Explore More section)

### Stage Detail Sections
```css
.step-detail {
  border-left: 4px solid primary;
  background: secondary-bg;
  padding: 40px;
}
```

**Color Coding**:
- Blue (`primary`): Information sections
- Green (`secondary`): Progress/transition sections  
- Orange (`accent`): Celebration/success sections

## Interaction States

### Hover Effects
- **Cards**: `translateY(-3px)` + shadow increase
- **Buttons**: Background color darkening
- **Process steps**: `translateY(-2px)` + opacity increase

### Focus States
- **2px outline** in primary color
- **2px offset** for clear visibility
- Maintained for keyboard navigation

### Active States
- Slightly darker background
- No transform (prevents jumping)

## RTL (Persian) Adaptations

### Direction Overrides
```css
html[lang="fa"] {
  direction: rtl;
}
```

### Spacing Adjustments
- Margin/padding switches: left ↔ right
- Border positions: left ↔ right  
- Text alignment: left → right

### Arrow Directions
- English: `→` (left to right flow)
- Persian: `←` (right to left flow)

## Responsive Breakpoints

### Mobile First Approach
- **SM**: 576px (landscape phones)
- **MD**: 768px (tablets)
- **LG**: 992px (desktops)
- **XL**: 1200px (large desktops)

### Key Responsive Changes
- Grid columns: 2 → 1 on mobile
- Process flow: Smaller gaps and text
- Padding reduction: 40px → 16px
- Font size clamping for optimal readability

## Accessibility Features

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have sufficient contrast
- Color is not the only indicator of meaning

### Typography
- Minimum 16px font size on mobile
- Clear hierarchy through size and weight
- Adequate line spacing for readability

### Navigation
- Keyboard accessible
- Screen reader friendly
- Logical tab order
- Skip links where appropriate

## Brand Voice Through Design

### Democratic Values
- **Transparency**: Clear information hierarchy
- **Accessibility**: Universal design principles  
- **Participation**: Prominent call-to-action elements
- **Trust**: Professional, consistent presentation

### Cultural Sensitivity
- **Bilingual equality**: Equal treatment of both languages
- **RTL consideration**: Proper Persian text flow
- **Cultural context**: Appropriate tone and imagery

## Performance Considerations

### CSS Architecture
- Modular structure with imports
- Custom properties for maintainability
- Minimal redundancy
- Print styles included

### Loading Strategy
- Critical CSS inlined (main.css)
- Progressive enhancement
- Fallback fonts specified
- Responsive images (when applicable)

## Future Scalability

### Design Tokens
- All values stored in CSS custom properties
- Easy theme switching capability
- Consistent spacing and colors
- Maintainable typography scale

### Component Extensibility
- Modifier classes for variants
- Utility classes for quick adjustments
- Composable design patterns
- Clear naming conventions