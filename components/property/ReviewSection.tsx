import axios from "axios";
import { useState, useEffect } from "react";
import { ReviewProps, ReviewSectionProps } from "@/interfaces/index";

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-center py-4">Loading reviews...</p>;
  
  if (error) return <p className="text-center text-red-600 py-4">{error}</p>;
  
  if (reviews.length === 0) return <p className="text-center text-gray-500 py-4">No reviews yet.</p>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">{review.userName}</p>
              <span className="text-yellow-500">★ {review.rating}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-1">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;