import { Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  onClick: () => void;
}

export function BlogCard({ title, excerpt, category, date, readTime, image, onClick }: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="aspect-video overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#1eb3a6] text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="mb-2 hover:text-[#1eb3a6] transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
      </div>
    </div>
  );
}
