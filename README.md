# MDM Structural and Civil Engineering Website

## Introduction

This repository is the source code for MDM Structural and Civil Engineering's website. It's designed to serve as the online representation of their work in structural and civil engineering projects in London, highlighting their role in enhancing the city's infrastructure since 2017.

## Site Composition

- **Home Page:** A welcoming front that introduces MDM's values, a brief on services, and a portfolio of select projects.
- **Detailed Subpages:**
  - **Services:** In-depth information on the engineering services offered.
  - **About Us:** The history, mission, and vision of MDM.
  - **Projects:** A display of MDM's projects.
  - **Contact:** Easy access to MDM's contact information.

## Design Ethos

The website's design is intentionally straightforward, **adhering to specific guidelines provided by MDM**, including color schemes and font choices, ensuring brand consistency. The user interface is crafted for clarity and ease of use, providing an intuitive experience while maintaining a professional aesthetic that mirrors MDM's industry reputation.

## Tech Stack

- **Next.js 14 & TypeScript:** Chosen for its robustness and type safety in web application development.
- **Tailwind CSS:** Allows for custom design implementation while following the strict design guidelines provided by MDM.
- **Subtle Animations:** Light animations and interactive elements, powered by GSAP and Framer Motion, are included to engage users without distraction.
- **Content Management:** Integrated Sanity CMS enabling easy content updates and management.
- **Mapbox GL:** Implemented to provide interactive and customizable maps, enhancing the visualization of company's location.
- **CookieYes:** A GDPR-compliant cookie consent solution, ensuring the website meets legal requirements in the UK for user consent management and privacy protection.
- **Sentry.io:** Integrated for real-time error tracking and performance monitoring, ensuring the website operates smoothly and efficiently.

## Development Setup

### Prerequisites

- Node.js (v18.17+)
- npm (corresponding version with Node.js)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hubertrh/mdm-structural-and-civil-engineering.git
   ```

2. Navigate into the project directory:

   ```sh
   cd mdm-structural-and-civil-engineering
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
    npm run dev
   ```

## Production

To compile the production build and launch the server:

```sh
npm run build
npm run start
```

## Code Standards

Conduct lint checks to maintain code quality and consistency:

```sh
npm run lint
```

## Contributions

This project is designed for a specific client and is not open for direct public contribution. Should any issues arise, kindly submit them via GitHub issues. The project maintainers will evaluate and address them as needed.

## Proprietary Content

The content of this repository is intended solely for MDM Structural and Civil Engineering. Unauthorized copying, distribution, or usage for commercial purposes is strictly prohibited.
