import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProgressAvatarProps = {
  src: string;
  alt: string;
  fallback: string;
  progress: number;
};

export function ProgressAvatar({
  src,
  alt,
  fallback,
  progress,
}: ProgressAvatarProps) {
  const radius = 54;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset
    = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* SVG Progress Circle */}
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute"
      >
        {/* Base circle (gray) */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle (yellow) */}
        <circle
          stroke="#facc15"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>

      {/* Inner image (profile picture) */}
      <Avatar className="w-24 h-24 rounded-full overflow-hidden relative z-10">
        <AvatarImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
        <AvatarFallback className="flex items-center justify-center w-full h-full bg-slate-200 rounded-full">
          {fallback}
        </AvatarFallback>
      </Avatar>

      {/* Progress Label */}
      <div className="absolute -bottom-0.5 bg-yellow-400 text-black text-xs font-semibold outline-2 outline-surface-container-lowest shadow px-3 py-0.5 rounded-full z-20">
        {`${progress}%`}
      </div>
    </div>
  );
};
