import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

export function TestimonialCard({ name, location, rating, comment, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        {image && (
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div className="flex-1">
          <h4 className="text-[#0f1e3d]">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-[#1eb3a6] text-[#1eb3a6]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-600 italic">&ldquo;{comment}&rdquo;</p>
    </div>
  );
}
