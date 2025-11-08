import {
  OrbitingCircles,
  type OrbitingCirclesProps,
} from "./ui/orbiting-circles";

type Props = {
  slugs: string[];
} & OrbitingCirclesProps;

export default function SimpleIconOrbitingCircles({ slugs, ...props }: Props) {

  const items = slugs.map((slug) => (
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
