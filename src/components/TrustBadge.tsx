import { Award, Heart, Shield, Sparkles } from 'lucide-react';

interface TrustBadgeProps {
  icon: 'award' | 'heart' | 'shield' | 'sparkles';
  text: string;
}

export function TrustBadge({ icon, text }: TrustBadgeProps) {
  const icons = {
    award: Award,
    heart: Heart,
    shield: Shield,
    sparkles: Sparkles,
  };

  const Icon = icons[icon];

  return (
    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
      <Icon className="w-4 h-4 text-[#1eb3a6]" />
      <span className="text-sm text-[#0f1e3d]">{text}</span>
    </div>
  );
}
