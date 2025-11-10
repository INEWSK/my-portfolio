import {
  OrbitingCircles,
  type OrbitingCirclesProps,
} from "./ui/orbiting-circles";

interface SimpleIconOrbitingCirclesProps extends OrbitingCirclesProps {
  slugs: string[];
}

export function SimpleIconOrbitingCircles({
  slugs,
  ...props
}: SimpleIconOrbitingCirclesProps) {
  const items = slugs.map((slug: string) => (
    // usage: https://cdn.simpleicons.org/:icon_slug/:color?/:dark_mode_color?
    <img
      key={slug}
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={slug}
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain"
    />
  ));

  return <OrbitingCircles {...props}>{items}</OrbitingCircles>;
}
