import Image from "next/image";

export interface PropertyDetailProps {
  property: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    address: {
      city: string;
      country: string;
      state?: string;
      street?: string;
    };
    category?: string[];
    description?: string;
    amenities?: string[];
    bedrooms?: number;
    bathrooms?: number;
    maxGuests?: number;
    host?: {
      name: string;
      avatar?: string;
      joinedDate?: string;
    };
  };
}

export default function PropertyDetail({ property }: Readonly<PropertyDetailProps>) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative h-96 w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.name}
                </h1>
                <p className="text-gray-600 text-lg">
                  {property.address.street && `${property.address.street}, `}
                  {property.address.city}, {property.address.state && `${property.address.state}, `}
                  {property.address.country}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                </p>
                <p className="text-gray-600">per night</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-yellow-500 text-lg font-semibold">
                {property.rating.toFixed(1)} ★
              </span>
              {property.bedrooms && (
                <span className="text-gray-700">
                  {property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}
                </span>
              )}
              {property.bathrooms && (
                <span className="text-gray-700">
                  {property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}
                </span>
              )}
              {property.maxGuests && (
                <span className="text-gray-700">
                  Up to {property.maxGuests} Guests
                </span>
              )}
            </div>

            {/* Category Tags */}
            {property.category && property.category.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {property.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description Section */}
        {property.description && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About this property
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>
        )}

        {/* Amenities Section */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Host Information */}
        {property.host && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hosted by {property.host.name}
            </h2>
            <div className="flex items-center gap-4">
              {property.host.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={property.host.avatar}
                    alt={property.host.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900">{property.host.name}</p>
                {property.host.joinedDate && (
                  <p className="text-gray-600 text-sm">
                    Joined {property.host.joinedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}