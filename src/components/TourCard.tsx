import { Clock, Users, Euro } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TourCardProps {
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  onBookNow: () => void;
  onViewDetails: () => void;
  language: 'en' | 'fi';
}

export function TourCard({
  title,
  description,
  duration,
  groupSize,
  price,
  image,
  onBookNow,
  onViewDetails,
  language,
}: TourCardProps) {
  const t = {
    en: {
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      from: 'From',
      perPerson: 'per person',
    },
    fi: {
      bookNow: 'Varaa Nyt',
      viewDetails: 'Katso Lisää',
      from: 'Alkaen',
      perPerson: 'per henkilö',
    },
  };

  const text = t[language];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#1eb3a6] text-white px-3 py-1 rounded-full text-sm">
          {text.from} €{price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Tour Info */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#1eb3a6]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-[#1eb3a6]" />
            <span>{groupSize}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={onBookNow}
            className="flex-1 bg-[#1eb3a6] hover:bg-[#18998e] text-white"
          >
            {text.bookNow}
          </Button>
          <Button
            onClick={onViewDetails}
            variant="outline"
            className="flex-1 border-[#0f1e3d] text-[#0f1e3d] hover:bg-[#0f1e3d] hover:text-white"
          >
            {text.viewDetails}
          </Button>
        </div>
      </div>
    </div>
  );
}
