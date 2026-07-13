import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/Mortgage_Rockstar_Logo1.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-block ${className}`}
      aria-label="Mortgage Rockstar home"
    >
      <img
        src={logoAsset.url}
        alt="Mortgage Rockstar"
        className="h-12 w-auto"
      />
    </Link>
  );
}
