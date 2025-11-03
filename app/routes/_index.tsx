import type { Route } from "./+types/_index";
import { AnimatedThemeSwitcher } from "~/components/elements/animated-theme-switcher";
import { DotPattern } from "~/components/ui/dot-pattern";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "notion",
  "github",
  "gitlab",
  "visualstudiocode",
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Yuji - Portfolio",
    },
    {
      name: "description",
      content:
        "Node.js Full Stack Developer. A developer who produces useless code for fun and strives to make the world better.",
    },
  ];
}

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <main className="relative min-h-screen">
      <DotPattern width={12} height={12} className="inset-0 z-0 opacity-40" />

      <ScrollArea className="h-screen w-full">
        <div className="flex justify-end p-4">
          <AnimatedThemeSwitcher duration={600} />
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-1 flex-col gap-6">
            <Card className="rounded shadow-none">
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis vero voluptate temporibus earum eius. Sunt omnis
                  deleniti enim, fugiat non nam animi alias odio soluta possimus
                  architecto ipsam doloremque reprehenderit?
                </p>
              </CardContent>
            </Card>
            <Card className="rounded shadow-none">
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis vero voluptate temporibus earum eius. Sunt omnis
                  deleniti enim, fugiat non nam animi alias odio soluta possimus
                  architecto ipsam doloremque reprehenderit?
                </p>
              </CardContent>
            </Card>
            <Card className="rounded shadow-none">
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis vero voluptate temporibus earum eius. Sunt omnis
                  deleniti enim, fugiat non nam animi alias odio soluta possimus
                  architecto ipsam doloremque reprehenderit?
                </p>
              </CardContent>
            </Card>
            <Card className="rounded shadow-none">
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis vero voluptate temporibus earum eius. Sunt omnis
                  deleniti enim, fugiat non nam animi alias odio soluta possimus
                  architecto ipsam doloremque reprehenderit?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer>
          <div className="text-muted-foreground mx-auto px-4 py-8 text-center text-sm">
            <p>© {new Date().getFullYear()} INEWSK. All rights reserved.</p>
          </div>
        </footer>
      </ScrollArea>
    </main>
  );
}
