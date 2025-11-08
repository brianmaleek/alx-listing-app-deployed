import type { NextApiRequest, NextApiResponse } from "next";

const reviewsData = {
  "1": [
    {
      id: "1",
      userName: "John Doe",
      userAvatar: "/avatars/user1.jpg",
      rating: 5,
      comment: "Perfect beachside stay. The view was absolutely stunning!",
      date: "2024-10-15",
    },
    {
      id: "2",
      userName: "Sarah Smith",
      rating: 4.5,
      comment: "Very relaxing and beautiful view. Would definitely come back.",
      date: "2024-09-20",
    },
  ],
  "2": [
    {
      id: "1",
      userName: "Michael Brown",
      rating: 5,
      comment: "Luxury villa with everything you need. Highly recommended!",
      date: "2024-10-01",
    },
  ],
  "3": [
    {
      id: "1",
      userName: "Emily Johnson",
      rating: 4.8,
      comment: "Amazing apartment, very cozy! Great location and amenities.",
      date: "2024-09-25",
    },
    {
      id: "2",
      userName: "David Wilson",
      userAvatar: "/avatars/user2.jpg",
      rating: 4.5,
      comment: "Loved the location and facilities. Perfect for families.",
      date: "2024-08-30",
    },
  ],
};

/**
 * @param {Object} req - Next.js API request object
 * @param {Object} res - Next.js API response object
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Invalid property ID" });
  }

  const reviews = reviewsData[id as keyof typeof reviewsData] || [];
  res.status(200).json(reviews);
}