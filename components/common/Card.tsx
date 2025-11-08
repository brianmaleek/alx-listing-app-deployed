import { CardProps } from "../../interfaces/";
import React from "react";

export default function Card({
    title,
    city,
    checkInType,
    rescheduleType,
    images,
    price,
    rating,
}: Readonly<CardProps>) {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={images}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{city}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">${price}/night</span>
          <span className="text-yellow-500">★ {rating}</span>
        </div>
        
        <div className="mt-2 text-sm text-gray-500">
          <p>Check-in: {checkInType}</p>
          <p>Cancellation: {rescheduleType}</p>
        </div>
      </div>
    </div>
  );
}
