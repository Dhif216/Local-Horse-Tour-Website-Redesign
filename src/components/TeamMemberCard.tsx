import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1">{name}</h3>
        <p className="text-[#1eb3a6] mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}
