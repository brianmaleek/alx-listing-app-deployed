# Milestone 4: Booking Detail Page Implementation

## Overview

In this milestone, you will create a fully functional **Booking Detail Page** for a listing application. The page will follow the provided mockup design and will allow users to **enter contact information**, **provide payment details**, **review booking information**, and **confirm the booking**. It will be styled with **Tailwind CSS** and made responsive for different screen sizes. This implementation simulates a core part of real-world travel and accommodation platforms like **Airbnb** and **Booking.com.**

By completing this milestone, you will gain practical experience in **structuring components**, handling **form input layouts**, and presenting **order summaries** while adhering to modern responsive UI/UX principles.

## Learning Objectives

By the end of this milestone, you should be able to:

1. **Understand and implement component-based architecture** in a Next.js project.
2. **Build responsive forms** with Tailwind CSS to collect user contact and payment details.
3. **Integrate an order summary section** that dynamically displays booking details.
4. **Enhance UX** with clear booking information, cancellation policies, and ground rules.
5. **Apply proper folder structuring** for scalability and maintainability in a React/Next.js app.

## Learning Outcomes

After completing this milestone, you will be able to:

- Develop a **Booking Form** component with multiple grouped inputs for contact, payment, and billing details.
- Create an **Order Summary** component that calculates and displays booking fees, subtotal, and total cost.
- Implement **Cancellation Policy** and **Ground Rules** sections for user guidance.
- Build responsive layouts using **Tailwind’s grid system** and utility classes.
- Organize project files according to **best practices in component architecture**.

## Key Concepts

1. **Component-Based Architecture** – Splitting functionality into small, reusable React components.
2. **Responsive Web Design** – Making layouts adapt across devices using Tailwind’s utility classes.
3. **Form Layout & Input Grouping** – Structuring forms to collect detailed information in an organized way.
4. **Dynamic Rendering of Data** – Passing booking details as props to child components.
5. **Pricing Calculation** – Displaying fees and totals in a clear and user-friendly format.

## Tools & Libraries

- **Next.js** – For building the booking page and structuring the application.
- **React** – For component-based UI creation.
- **Tailwind CSS** – For styling, responsive design, and layout control.
- **TypeScript** – For type safety and better development experience.

## Real-World Use Case

The functionality implemented in this milestone directly mirrors **real-world booking platforms** like Airbnb, Expedia, and Booking.com. In a live production environment, the booking detail page would:

- **Validate user input** before payment processing.
- **Integrate with payment gateways** for secure transactions.
- **Display accurate booking summaries** fetched from backend APIs.
- **Show policies and rules** to ensure compliance between guests and hosts.

For example, when a customer books a beach villa on Airbnb, they must review the property details, confirm stay dates, enter payment information, and agree to terms—all in one streamlined interface. This milestone builds the front-end foundation for such a process.

## 📝 Project Assessment (Hybrid)

Your project will be evaluated primarily through **manual reviews**. To ensure you receive your full score, please:

- ✅ Complete your project on time
- 📄 Submit all required files
- 🔗 Generate your review link
- 👥 Have your peers review your work

An auto-check will also be in place to verify the presence of core files needed for manual review.

## ⏰ Important Note

If the deadline passes, you won’t be able to generate your review link—so be sure to submit on time!

## Tasks

### 0. Develop Responsive Booking Detail Page with User Input and Payment Processing

**mandatory**

**Objective**:

In this milestone, you will implement the **Booking Detail Page** based on the provided mockup. The page should allow users to enter their contact and payment details, review their booking information, and confirm the booking. This page will be responsive and styled using **Tailwind CSS**.

By the end of this milestone, you will have created a functional and responsive booking page where users can input details and proceed with the booking process.

**Instructions**:

**Duplicate the Repository**:

- Duplicate the repository `alx-listing-app-00` and rename it to `alx-listing-app-03`.

**Folder Structure**: Ensure that the following folder structure exists in your project:

- `components/booking/BookingForm.tsx`

- `components/booking/OrderSummary.tsx`

**Create the Booking Page**:

- In `pages/booking/index.tsx`, create a static page that renders the booking form and order summary components.

```typescript
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}
```

**Implement the Booking Form Component**:

In `components/booking/BookingForm.tsx`, create a form that allows the user to enter the following details:

- First Name
- Last Name
- Email
- Phone Number
- Payment Information (Card Number, Expiration Date, CVV)
- Billing Address (Street Address, Apt/Suite, City, State, Zip Code, Country)

```typescript
const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
```

**Implement the Order Summary Component**:

In `components/booking/OrderSummary.tsx`, create a component that displays:

- Property name, image, review score.
- Stay details (start date, total nights).
- Breakdown of fees (booking fee, subtotal, grand total).

```typescript
const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <img src="https://example.com/property.jpg" alt="Property" className="w-32 h-32 object-cover rounded-md" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
```

**Add Cancellation Policy and Ground Rules**:

Below the form, include a section that outlines:

- **Cancellation Policy**: Display a notice that users can cancel for a full refund before a certain date, and partial refund after that date.
- **Ground Rules**: Display a list of house rules for guests (e.g., “Follow the house rules” and “Treat your Host’s home like your own”).

```typescript
const CancellationPolicy = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;
```

**Modify Layout to Include All Sections**:

- In `pages/booking/index.tsx`, make sure that the page includes the booking form, order summary, cancellation policy, and ground rules.

**Repo**:

- **GitHub repository**: **alx-listing-app-03**
- **File**: [pages/booking/index.tsx](./pages/booking/index.tsx), [components/booking/BookingForm.tsx](./components/booking/BookingForm.tsx), [components/booking/OrderSummary.tsx](./components/booking/OrderSummary.tsx), [components/booking/CancellationPolicy.tsx](./components/booking/CancellationPolicy.tsx)
