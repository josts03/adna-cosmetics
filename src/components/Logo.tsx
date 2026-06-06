export function Logo({ className = "h-8", src = "/logo.png" }: { className?: string; src?: string }) {
  return (
    <img
      src={src}
      alt="Logotip Adna Cosmetics – kozmetični salon Vrhnika"
      className={`object-contain ${className}`}
    />
  );
}
