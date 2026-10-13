type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-9 w-9" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="36" height="36" rx="10" className="fill-brand" />
      <path
        d="M11 13.5C11 11.57 12.57 10 14.5 10H25.5C27.43 10 29 11.57 29 13.5V21.5C29 23.43 27.43 25 25.5 25H20L15 30V25H14.5C12.57 25 11 23.43 11 21.5V13.5Z"
        fill="white"
        fillOpacity="0.18"
      />
      <path d="M15 17H23" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M21 14L24 17L21 20"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
