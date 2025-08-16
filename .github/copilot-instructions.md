# MDM Structural and Civil Engineering Website

This is a Next.js 14.1.4 website for MDM Structural and Civil Engineering, built with TypeScript, Tailwind CSS, and Sanity CMS for content management. The site showcases their structural and civil engineering projects in London.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Environment Setup

- Node.js v18.17+ (current environment has v20.19.4 which works perfectly)
- npm (v10+ recommended, current environment has v10.8.2)
- Network access to fonts.googleapis.com and Sanity CMS APIs (may fail in restricted environments)

### Bootstrap and Install Dependencies

**CRITICAL**: Use the exact command sequence below to avoid network-related failures:

```bash
# Install dependencies (handles Sentry CLI network issues)
npm ci --ignore-scripts
```

- **Timing**: Takes 20-30 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- **Expected output**: "added 1215 packages, and audited 1216 packages"
- **Warnings**: 25 vulnerabilities are expected and normal for this project

**DO NOT** use `npm install` as it will fail due to Sentry CLI download issues in restricted network environments.

### Development Workflow

Start the development server:

```bash
npm run dev
```

- **Timing**: Takes 2-3 seconds to start. NEVER CANCEL.
- **Expected output**: "✓ Ready in 2.9s"
- **Access**: Available at http://localhost:3000
- **Network Dependencies**: Requires access to:
  - fonts.googleapis.com (for Montserrat font - has fallback if fails)
  - 4vbs99s3.apicdn.sanity.io (for Sanity CMS content - CRITICAL, no fallback)

### Linting and Code Quality

Always run linting before committing:

```bash
npm run lint
```

- **Timing**: Takes 2-3 seconds. NEVER CANCEL.
- **Expected output**: "✔ No ESLint warnings or errors"
- **Warning**: TypeScript 5.4.3 triggers a compatibility warning but works correctly
- **Requirements**: Must pass with ✔ No ESLint warnings or errors

Format code with Prettier:

```bash
npx prettier --write .
```
- **Timing**: Takes 3-4 seconds. NEVER CANCEL.

### Production Build

**CRITICAL**: Production builds WILL FAIL in network-restricted environments:

```bash
npm run build
```

- **Expected Failure**: Google Fonts download will fail (ENOTFOUND fonts.googleapis.com)
- **Expected Failure**: Sentry sourcemap upload will fail (missing binary)  
- **Error Message**: "Failed to fetch `Montserrat` from Google Fonts" followed by "Build failed because of webpack errors"
- **Timing**: If successful, takes 2-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
- **Note**: Build requires full internet access to succeed - will always fail in restricted environments

Start production server (after successful build):

```bash
npm run start
```

## Validation and Testing

### Manual Validation Requirements

**ALWAYS** manually test after making changes by:

1. **Start Development Server**:

   ```bash
   npm run dev
   ```

2. **Test Core Functionality** (if network allows):

   - Navigate to http://localhost:3000
   - Verify homepage loads without 500 errors
   - Check that content appears (requires Sanity CMS access)
   - Test responsive design at different screen sizes
   - Verify navigation between pages works

3. **Network-Restricted Environment Testing** (Current environment status):

   - **Expected Result**: HTTP 500 status with 12+ second response time
   - **Font Behavior**: Google Fonts fail but fallback works ("Failed to download `Montserrat` from Google Fonts. Using fallback font instead")
   - **CMS Behavior**: Multiple Sanity API errors for homepage content (company info, hero, services, etc.)
   - **Server Logs**: Shows "Internal error: Error: Request error while attempting to reach https://4vbs99s3.apicdn.sanity.io"
   - **Note**: This is expected behavior in restricted networks - the app requires CMS access to function

4. **Sanity Studio Access**:
   ```bash
   # Access admin panel (when network allows)
   # Navigate to http://localhost:3000/admin
   ```
   - **Expected Result**: Will also fail in restricted networks
   - **Purpose**: Content management interface for MDM team

5. **Code Quality Validation**:
   ```bash
   npm run lint
   ```
   Must show "✔ No ESLint warnings or errors"

### Build Failure Scenarios

- **Google Fonts failure**: Expected in restricted networks, has fallback fonts
- **Sentry CLI failure**: Expected during npm install, use --ignore-scripts
- **Sanity CMS failure**: Causes 500 errors in development, requires network access

## Architecture and Navigation

### Key Technologies

- **Next.js 14.1.4**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Sanity CMS**: Headless CMS for content management
- **Sentry**: Error monitoring and performance tracking
- **Vercel**: Hosting platform with analytics

### Important Directories

```
src/
├── app/                 # Next.js App Router pages
│   ├── (pages)/        # Page routes
│   ├── (sanity)/       # Sanity Studio admin panel
│   ├── layout.tsx      # Root layout with fonts and metadata
│   └── globals.css     # Global styles
├── components/         # Reusable React components
├── sanity/            # Sanity CMS configuration
│   ├── schemas/       # Content type definitions
│   ├── utils/         # Sanity utilities
│   └── sanity.config.ts # Sanity Studio configuration
├── assets/            # Static assets (fonts, images)
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

### Content Management

- **Sanity Studio**: Access admin panel at `/admin` when running locally
- **Project ID**: 4vbs99s3
- **Dataset**: production
- **Schemas**: Homepage, services, about, contact, company info, projects

### Custom Styling

- **Colors**: Custom green/blue palette for MDM branding
- **Fonts**: Agency FB (local) + Montserrat (Google Fonts)
- **Breakpoints**: Includes custom `xs: 360px` breakpoint
- **Components**: Custom CSS classes for specific layouts

## Common Tasks and Troubleshooting

### Network-Related Issues

**Problem**: npm install fails with Sentry CLI download error  
**Solution**: Use `npm ci --ignore-scripts`

**Problem**: Development server shows 500 errors  
**Cause**: Cannot reach Sanity CMS APIs (4vbs99s3.apicdn.sanity.io)  
**Solution**: This is expected in restricted networks. App requires CMS data to function.

**Problem**: Build fails with Google Fonts error  
**Cause**: Cannot reach fonts.googleapis.com  
**Solution**: Expected in restricted environments. Use development server for testing instead.

**Problem**: "Failed to download Montserrat from Google Fonts"  
**Solution**: Normal in restricted networks. System fonts used as fallback.

### Development Issues

**Problem**: TypeScript errors after schema changes  
**Solution**: Update types in `src/types/` to match Sanity schema changes

**Problem**: Tailwind classes not working  
**Solution**: Check `tailwind.config.ts` for custom configurations and whitelist

**Problem**: Pages not updating after changes  
**Solution**: Restart dev server if hot reload fails

**Problem**: Linting fails with prettier conflicts  
**Solution**: Run `npx prettier --write .` before `npm run lint`

### Content Updates

- Access Sanity Studio at http://localhost:3000/admin (when dev server running)
- Content changes appear immediately in development
- Production requires rebuild and redeploy

### Environment Variables

No special environment variables required for basic development. Sentry configuration uses hardcoded DSN.

### Performance Considerations

- Images optimized through Sanity CDN (cdn.sanity.io)
- Fonts preloaded with Next.js font optimization
- Bundle analysis available through Next.js built-in tools

## Development Best Practices

### Complete Workflow Example
**Scenario**: A coding agent needs to make changes and test them

```bash
# 1. Fresh setup (if needed)
npm ci --ignore-scripts

# 2. Start development environment  
npm run dev

# 3. Make code changes to components/pages

# 4. Validate changes
npm run lint

# 5. Format code
npx prettier --write .

# 6. Test manually at http://localhost:3000
# Note: Expect 500 errors in restricted networks
```

### Common Development Scenarios

**Adding New React Component**:
- Create in `src/components/` following existing structure
- Use TypeScript (.tsx extension)
- Import required types from `src/types/`
- Follow Tailwind CSS utility patterns
- Test responsive behavior

**Modifying Existing Pages**:
- Page components in `src/app/(pages)/`
- Layout changes affect `src/app/layout.tsx`
- Test font loading and fallback behavior
- Verify metadata and SEO updates

**Updating Styles**:
- Prefer Tailwind utilities over custom CSS
- Custom colors defined in `tailwind.config.ts`
- Test across mobile/tablet/desktop breakpoints
- Check design system consistency

**Content Schema Changes**:
- Modify schemas in `src/sanity/schemas/`
- Update corresponding TypeScript types
- Test in Sanity Studio (when network allows)
- Consider data migration needs

### Before Making Changes

1. Always run `npm ci --ignore-scripts` first
2. Start development server with `npm run dev`
3. Test basic functionality manually
4. Run `npm run lint` to check existing code quality

### After Making Changes

1. Test changes in development server
2. Verify responsive design if UI changes made
3. Run `npm run lint` to ensure code quality
4. Test navigation and core user flows
5. Check browser console for JavaScript errors

### Component Development

- Use TypeScript for all new components
- Follow existing Tailwind CSS patterns
- Ensure responsive design (mobile-first approach)
- Use custom CSS classes sparingly (prefer Tailwind utilities)

### Content Schema Changes

- Modify schemas in `src/sanity/schemas/`
- Test changes in Sanity Studio
- Update TypeScript types in `src/types/` accordingly
- Consider data migration needs for existing content

**CRITICAL REMINDER**: This application requires network connectivity to function properly. In restricted environments, expect Google Fonts and Sanity CMS failures. Always test with `npm run dev` and validate core functionality manually.
