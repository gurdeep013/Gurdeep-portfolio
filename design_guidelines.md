# Design Guidelines: Disney Cars-Themed Data Analyst Portfolio

## Design Approach
**Reference-Based**: Inspired by Disney Pixar's Cars franchise (specifically Mater's friendly personality and Lightning McQueen's energy), combined with modern data analytics aesthetics. Think Airbnb's clean layouts meets automotive Route 66 nostalgia.

## Color Palette
- **Primary**: Rust brown/burnt orange `#C47335` (Mater's color)
- **Secondary**: Deep teal/turquoise `#4A9B9B` (professional analytics)
- **Accent**: Lightning McQueen red `#E31E24` (CTAs, highlights)
- **Neutrals**: Warm grays `#F5F5F0` (light bg), `#3A3A3A` (text)
- **Data Accent**: Radiator Springs sky blue `#87CEEB` (visualizations)

## Typography
- **Headings**: "Bebas Neue" or "Racing Sans One" (bold, automotive-inspired, all-caps for section titles)
- **Body**: "Inter" or "Open Sans" (clean, 16px base, 1.6 line-height)
- **Code/Data**: "JetBrains Mono" (technical sections, 14px)
- **Hierarchy**: H1 (48px), H2 (36px), H3 (24px), Body (16px)

## Layout System
- **Spacing**: Use Tailwind units 4, 6, 8, 12, 16, 24 for consistency
- **Container**: max-w-7xl with px-6 on mobile, px-12 on desktop
- **Section Padding**: py-16 on mobile, py-24 on desktop
- **Grid**: 12-column system, 3-col cards on desktop, 2-col tablet, 1-col mobile

## Component Library

### Hero Section
- **Layout**: Full viewport height, split 60-40 (left content, right image)
- **Background**: Lightning McQueen wallpaper with dark gradient overlay (black to transparent, 0.7 opacity) for readability
- **Left Side**: Animated heading with typing effect, two CTAs (primary rust brown, secondary teal outline), social icons row
- **Right Side**: Circular headshot (gurdeep_picture_headshot.png) with rust brown border, floating animation, turquoise gradient background
- **Interactive**: Parallax scrolling, gentle upward motion on headshot

### About Section
- **Stats Grid**: 4-column on desktop (2 mobile), large numbers in rust brown, labels in teal
- **Skills Cards**: Interactive cards with proficiency bars (gradient from teal to rust), hover lift effect
- **Soft Skills**: Badge-style tags with rounded corners, teal background, white text

### Projects Showcase
- **Card Design**: Large banner images (Hotel_banner.png, Rapido_Banner.png, Transaction_banner.jpg), gradient overlay on hover
- **Tech Badges**: Small rounded pills, teal background, positioned bottom-left of card
- **Grid**: 3 columns desktop, responsive to 1 column mobile
- **Modal**: Click to expand with full project details, embedded dashboards, code snippets
- **Key Metrics**: Displayed as highlighted stats within cards (rust brown accent)

### Experience Timeline
- **Visual**: Vertical timeline with route-inspired connector (dotted line in rust brown)
- **Cards**: Expandable on hover, company logos/icons, date ranges in teal
- **Route Markers**: Small circular markers at each experience point

### Certifications Grid
- **Layout**: 2 columns desktop, 1 mobile, equal height cards
- **Badge Display**: Provider logos prominent, verification link buttons (teal)
- **Hover State**: Lift with shadow, show "View Certificate" button

### Contact Section
- **Split Design**: 50-50 form and contact cards
- **Form**: Input fields with teal focus states, rust brown submit button
- **Contact Cards**: Icon + text, click-to-copy functionality, subtle map pattern background
- **Background**: Route visualization inspired by Radiator Springs map

### Footer
- **Multi-Column**: 4 columns on desktop (Brand, Quick Links, Social, Resources)
- **Bottom Bar**: Center-aligned copyright with coffee emoji, route marker decorative elements

## Decorative Elements
- **Route Lines**: Subtle dotted lines connecting sections (rust brown, 2px)
- **Mile Markers**: Route 66-style markers at section starts
- **Progress Indicator**: Scroll depth indicator styled as road/route
- **Data Patterns**: Background geometric patterns resembling charts/graphs (low opacity)

## Animations
- **Page Load**: Stagger fade-in for sections
- **Scroll**: Parallax on hero, fade-up on section entry
- **Hover**: Lift + shadow on cards, scale on buttons
- **Typing Effect**: Hero tagline types out character by character
- **Floating**: Gentle vertical motion on headshot image

## Images
**Large Hero Image**: Yes - Lightning McQueen wallpaper (mcqueen-cars-wallpaper-image.jpg) with gradient overlay
- Additional images: gurdeep_picture_headshot.png (hero), Hotel_banner.png, Rapido_Banner.png, Transaction_banner.jpg (projects), cac_Preview_photo.jpg (experience hover)
- All images: WebP format, lazy loading, aspect ratio preserved

## Accessibility
- WCAG 2.1 AA compliance
- Focus states: 2px teal outline with offset
- Alt text for all images
- Keyboard navigation throughout
- Color contrast ratio 4.5:1 minimum

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (full multi-column layouts)