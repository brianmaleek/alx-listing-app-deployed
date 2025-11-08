export interface CardProps {
    title: string;
    city: string;
    checkInType: "self" | "host" | "other";
    rescheduleType: "flexible" | "moderate" | "strict" | "other";
    images: string;
    price: number;
    rating: number;
}

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
}

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
}

export interface PillProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export interface ReviewProps {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ReviewSectionProps {
  propertyId: string;
}
