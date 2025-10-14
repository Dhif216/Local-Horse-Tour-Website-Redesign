import { ImageWithFallback } from './figma/ImageWithFallback';

interface HorseCardProps {
  name: string;
  age: string;
  personality: string;
  image: string;
}

export function HorseCard({ name, age, personality, image }: HorseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-[#0f1e3d]">{name}</h4>
          <span className="text-sm text-gray-500">{age}</span>
        </div>
        <p className="text-gray-600 text-sm">{personality}</p>
      </div>
    </div>
  );
}
