import Image from "next/image";
import Link from "next/link";

export interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    address: {
      city: string;
      country: string;
    };
    category?: string[];
  };
}

export default function PropertyCard({ property }: Readonly<PropertyCardProps>) {
  return (
    <Link href={`/properties/${property.id}`} className="block">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white h-full">
        {/* Property Image */}
        <div className="relative h-64 w-full">
          <Image
            src={property.image}
            alt={`${property.name} in ${property.address.city}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Property Details */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 truncate" title={property.name}>
            {property.name}
          </h3>
          
          <p className="text-gray-600 text-sm mt-1">
            {property.address.city}, {property.address.country}
          </p>

          {/* Price and Rating */}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-gray-800 font-semibold text-lg">
              ${property.price.toLocaleString()}{" "}
              <span className="text-sm font-normal text-gray-600">/ night</span>
            </p>
            <p className="text-yellow-500 text-sm font-medium" aria-label={`Rating: ${property.rating} out of 5`}>
              {property.rating.toFixed(1)} ★
            </p>
          </div>

          {/* Category Tags */}
          {property.category && property.category.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {property.category.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
