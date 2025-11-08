# Milestone 2: Responsive Listing Page

## Project Description

This project involves building a responsive property listing page using React, TypeScript, and Tailwind CSS. The application will display a collection of luxury properties with filtering capabilities, a hero section, and proper layout organization. The page will be fully responsive, adapting to different screen sizes while maintaining a clean, user-friendly interface.

## Learning Objectives

By completing this project, you will:

1. Implement responsive web design principles using Tailwind CSS
2. Create reusable React components for layout (Header, Footer, Layout)
3. Work with TypeScript interfaces for type safety
4. Structure a Next.js application with proper component organization
5. Render dynamic data from an array of objects
6. Implement filtering functionality for property listings
7. Practice best practices in component composition and styling
8. Learn to break down UI mockups into logical components

## Requirements

### Technical Requirements

- Use Next.js as the React framework
- Implement TypeScript for type checking
- Style components exclusively with Tailwind CSS
- Create responsive layouts that work on mobile, tablet, and desktop
- Structure components in a logical folder hierarchy
- Use functional components with proper TypeScript typing

## Functional Requirements

1. **Layout Components**

   - Header with navigation, logo, and search
   - Footer with relevant links and information
   - Layout wrapper for consistent page structure

2. **Home Page**

   - Hero section with background image and call-to-action text
   - Filter section with clickable filter pills
   - Property listing grid displaying all properties from the sample data
   - Responsive property cards showing key information

3. **Data Management**

   - Properly typed property data interface
   - Sample data array with complete property information

### Best Practices

1. **Component Organization**

   - Follow a consistent folder structure
   - Separate layout components from page components
   - Keep components small and focused

2. **Styling**

   - Use Tailwind’s utility classes effectively
   - Implement responsive design with mobile-first approach
   - Maintain consistent spacing and typography

3. **TypeScript**

   - Define clear interfaces for all props
   - Type all components and functions properly
   - Use TypeScript to catch potential errors early

4. **Performance**

   - Optimize images for web
   - Implement proper loading states
   - Consider lazy loading for non-critical components

5. **Accessibility**

      - Use semantic HTML
      - Ensure proper contrast ratios
      - Include alt text for images
      - Make interactive elements keyboard-navigable

### Expected Outcomes

- A fully responsive property listing page
- Clean, maintainable code with proper TypeScript typing
- Reusable layout components
- Properly structured property data
- Functional filter components
- Visually appealing UI with consistent styling

**📝 Project Assessment (Hybrid)**
Your project will be evaluated primarily through manual reviews. To ensure you receive your full score, please:

## Tasks

### 0. Build Responsive Listing Page with Tailwind CSS

**mandatory**

**Objective:**

The goal of this milestone is to break down the provided [mockup](https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=1-4&p=f&t=hhUYVWcYaZn1ieWo-0) into sections and build the structure of a responsive listing page for the application. You will create key components such as the `Header`, `Footer`, and `Layout` using **Tailwind CSS** for styling, ensuring that the page is responsive and well-organized. You will also implement the hero section, filters, and listing section using a set of property data.

By the end of this task, you will have a complete responsive layout that dynamically renders property listings and handles user filters.

**Instructions:**

**Project Setup:**

Duplicate the repository:

- Duplicate the `alx-listing-app` repository and rename it to `alx-listing-app-00`.

Create the following folder structure:

- Create `components/layout/Header.tsx`.

- Create `components/layout/Footer.tsx`.

- Create `components/layout/Layout.tsx`.

**Add Property Listing Data:**

- In `constants/index.ts`, create and export a constant `PROPERTYLISTINGSAMPLE` which is an array of property data (provided in the instruction). This array contains details of properties such as name, address, rating, category, price, offers, and image URL.

```typescript
export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image4.jpg",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://example.com/image5.jpg",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://example.com/image6.jpg",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image7.jpg",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://example.com/image8.jpg",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image10.jpg",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }
];
```

**Create Interface for Property Data:**

- In `interfaces/index.ts`, define a `PropertyProps` interface that describes the structure of each property in the `PROPERTYLISTINGSAMPLE`. This interface will help with TypeScript type-checking when rendering the property data.

**Implement Layout Components:**

- In `components/layout/Header.tsx`, create a functional component that renders the header content, including search bar, sign and sign up , Types of accommodation (e.g. Rooms, Mansion, Countryside, etc.) and a logo.

- In `components/layout/Footer.tsx`, create a functional component that renders the footer content.

- In `components/layout/Layout.tsx`, create a layout component that wraps the header, footer, and main content as follows:

```typescript
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
```

**Modify Application Root:**

- In `pages/_app.tsx`, update the main structure of your app to wrap all pages with the `Layout` component. This will ensure that the `Header` and `Footer` are present on every page.

```typescript
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

**Hero Section Implementation:**

- In `pages/index.tsx`, implement the hero section. This section should include a background image and a heading with the text: **“Find your favorite place here!” and “The best prices for over 2 million properties worldwide.”**.

- Make sure to import your background image into your constants before using it here

**Filter Section Implementation:**

- Implement a filter section that uses a set of predefined filters (e.g., `Top Villa`, `Self` `Checkin`, etc.).

- Create a `Pill` component that accepts filter props and renders them as clickable pills.

- Use the Pill component to map over an array of filter labels and display them.

**Listing Section Implementation:**

- In `pages/index.tsx`, implement the listing section that maps over `PROPERTYLISTINGSAMPLE` to render individual property cards.

- Each property card should display the image, name, price, and rating of the property.

**Repo:**

- **GitHub repository**: **alx-listing-app-00**
- **File**: [pages/index.tsx](./pages/index.tsx), [components/layout/Header.tsx](./components/layout/Header.tsx), [components/layout/Footer.tsx](./components/layout/Footer.tsx), [components/layout/Layout.tsx](./components/layout/Layout.tsx), [interfaces/index.ts](./interfaces/index.ts), [constants/index.ts](./constants/index.ts)
