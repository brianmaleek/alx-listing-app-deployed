# Milestone 5: API Integration for All Pages

## Overview

In this milestone, learners will enhance their Airbnb clone project by integrating REST APIs to replace hardcoded data with dynamically fetched content. The focus is on connecting property listings, property details, bookings, and reviews to live API endpoints. Learners will implement data fetching, loading and error handling, and dynamic rendering across multiple components. This milestone transforms the project from a static prototype into a fully interactive application that communicates with backend services.

## Learning Objectives

By completing this milestone, learners will be able to:

1. Implement API calls using `axios` in a Next.js application.
2. Fetch data dynamically based on route parameters (e.g., property ID).
3. Handle **loading** and **error** states in React components.
4. Submit form data to an API endpoint (POST requests).
5. Display API-fetched data dynamically in UI components.
6. Connect multiple pages and components to different API endpoints.

## Learning Outcomes

After completing this milestone, learners will be able to:

Replace hardcoded property, booking, and review data with dynamic API calls.
Build reusable components that can handle asynchronous data.
Manage form submission processes with real-time validation and success/error feedback.
Ensure the UI updates correctly when data is loading, successfully fetched, or fails to load.
Use dynamic routing in Next.js to fetch and render data based on route parameters.

## Key Concepts

- **Dynamic Data Fetching** – Loading real data from APIs instead of static files.
- **REST API Integration** – Using GET and POST requests to interact with backend services.
- **Dynamic Routing in Next.js** – Fetching content based on `router.query` parameters.
- **Loading & Error Handling** – Providing user feedback while fetching data or handling failures.
- **Reusable Components** – Designing components that adapt to dynamic data.
- **Form Submission to API** – Sending user input securely to backend endpoints.

## Tools & Libraries

- **Next.js** – For server-side rendering and dynamic routing.
- **React Hooks** (`useState`, `useEffect`) – For managing component state and lifecycle events.
- **Axios** – For making HTTP requests to the API.
- **TypeScript** – For type safety and better development experience.
- **Tailwind CSS** – For styling the components.

## Real-World Use Case

This milestone simulates how modern booking platforms like **Airbnb**, **Booking.com**, or **Expedia** fetch and update their data in real time. Instead of loading static content, these applications request live data from servers for each property, booking, or review. The skills learned here are directly applicable to building production-grade applications that rely on APIs to serve up-to-date information, process reservations, and collect user-generated feedback.

## 📝 Project Assessment (Hybrid)

Your project will be evaluated primarily through **manual reviews**. To ensure you receive your full score, please:

✅ Complete your project on time
📄 Submit all required files
🔗 Generate your review link
👥 Have your peers review your work

An **auto-check** will also be in place to verify the presence of core files needed for manual review.

## ⏰ Important Note

If the deadline passes, you won’t be able to generate your review link—so be sure to submit on time!

## Tasks

### 0. API Integration for the Property Listing Page

**mandatory**

**Objective**
In this milestone, you will modify the pages and components created in Milestone 1, 2, 3, and 4 to integrate with APIs for dynamic data fetching. The goal is to replace hardcoded property, booking, and review data with data fetched from a REST API. You will also handle loading states, errors, and display the data dynamically across all pages. The API integration will make the listing, property detail, booking, and review sections dynamic.

#### Instructions:

1. **Duplicate the Repository**

   - Duplicate the repository alx-listing-app-03
   - Rename it to alx-listing-app-04

2. **API Setup**

    Assume that the API provides the following endpoints:

   - `GET /properties` — Fetches the list of properties for the listing page
   - `GET /properties/:id` — Fetches the details of a single property based on its ID
   - `POST /bookings` — Submits booking details to the server
   - `GET /properties/:id/reviews` — Fetches the reviews of a property

    Install axios for API requests:

    ```bash
    npm install axios
    ```

3. Modify the Property Listing Page

    In `pages/index.tsx`:

    - Fetch the property listing data from the API using axios
    - Display it dynamically
    - Use useEffect to make the API call when the component mounts
    - Store the data in the component’s state
    - Handle loading states while the data is being fetched

    ```typescript
    import axios from "axios";
    import { useEffect, useState } from "react";
    import PropertyCard from "@/components/property/PropertyCard"; // Assume this component exists

    export default function Home() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
        try {
            const response = await axios.get("/api/properties");
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
        ))}
        </div>
    );
    }
    ```

4. Modify the PropertyCard Component
    Update `PropertyCard.tsx` component to:

    - Accept dynamic data from the API
    - Display the dynamic data

**Repo**:

- **GitHub repository**: **alx-listing-app-04**
- **File**: [pages/index.tsx](./pages/index.tsx) (Property Listing API integration)

### 1. API Integration for the Property Detail Page

**mandatory**

**Objective**:

Replace the hardcoded property details data with data fetched from the API based on the property ID.

**Instructions**:

#### Modify the Property Detail Page:

- In `pages/property/[id].tsx`, use axios to fetch the details of a property from the API based on the dynamic route ID.
- Use `useEffect` to fetch the property data when the page loads and display it dynamically.
- Handle loading and error states.

```typescript
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
```

**Modify the `PropertyDetail` Component:**

- Ensure that the `PropertyDetail.tsx` component properly accepts the dynamic property data and renders it as before.

**Repo**:

- **GitHub repository**: **alx-listing-app-04**
- **File**: [pages/property/[id].tsx](./pages/property/[id].tsx) (Property Detail API integration)

### 2. API Integration for the Booking Page

**mandatory**

**Objective**:

Submit booking details to the API instead of handling them locally.

#### Instructions:

Modify the Booking Page:

- In `pages/booking/index.tsx`, submit the booking data to the API when the user confirms their booking.
- Use axios to make a `POST` request to the `/bookings` endpoint.
- Handle form validation and display appropriate success or error messages after the booking submission.

```typescript
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
```

**Repo**:

- **GitHub repository**: **alx-listing-app-04**
- **File**: [pages/booking/index.tsx](./pages/booking/index.tsx)

### 3. API Integration for Reviews

**mandatory**

**Objective**:

Fetch the property reviews dynamically from the API based on the property ID.

#### Instructions:

Modify the Review Section:

- In the `ReviewSection.tsx` component, fetch the reviews for the property from the `/api/properties/:id/reviews` endpoint.
- Use `useEffect` to make the API call when the component mounts, and handle loading and error states.
- Display the fetched reviews dynamically.

```typescript
import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
```

**Repo**:

- **GitHub repository**: **alx-listing-app-04**
- **File**: [components/property/ReviewSection.tsx](./components/property/ReviewSection.tsx)
