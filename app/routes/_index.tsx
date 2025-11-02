import { TextureOverlay } from "~/components/ui/text-overlay";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <TextureOverlay texture="dots" opacity={0.4} />;
}
