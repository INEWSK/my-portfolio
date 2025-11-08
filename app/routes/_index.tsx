import { Fragment } from "react";

import { Github, Instagram, Mail, Newspaper, Send } from "lucide-react";

import { AnimatedThemeSwitcher } from "~/components/animated-theme-switcher";
import SimpleIconOrbitingCircles from "~/components/skill-orbiting-circles";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { DotPattern } from "~/components/ui/dot-pattern";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Highlighter } from "~/components/ui/highlighter";
import { GlareCardDialog } from "~/components/glare-card-dialog";

const tags = [
  `${new Date().getFullYear() - 1998 - 1} y.o`, // エヘヘ
  "Photographer",
  "Junkcode Developer",
];

const socials = [
  {
    label: "Email",
    href: "mailto:pm@inewsk.me",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/inewsk",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/airlues",
    icon: Instagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/inewsk",
    icon: Send,
  },
  {
    label: "Resume",
    href: "https://cv.inewsk.me/",
    icon: Newspaper,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DotPattern width={16} height={16} className="inset-0 z-0 opacity-40" />

      <ScrollArea className="h-screen w-full">
        <div className="flex justify-end p-4">
          <AnimatedThemeSwitcher duration={600} />
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-6">
            <Card className="relative">
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <GlareCardDialog
                    renderTrigger={
                      <div className="bg-muted/40 size-24 cursor-pointer overflow-hidden">
                        <img
                          src="https://im.inewsk.me/_next/image?url=%2Fassets%2Fimages%2Favatar.jpg&w=1920&q=75"
                          alt="Portrait of Yuji Kurokawa"
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    }
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">Yuji Kurokawa</h1>
                    <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
                      {tags.map((tag, index) => (
                        <Fragment key={tag}>
                          <span>{tag}</span>
                          {tags.length !== index && (
                            <span className="text-muted-foreground/60 px-2">
                              /
                            </span>
                          )}
                        </Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground text-sm">
                  <p className="leading-relaxed">
                    I&apos;m a minimalist frontend engineer who crafts calm,
                    fast interfaces, usually in React or whatever tool fits the
                    idea. Since 2010 I&apos;ve been shipping tiny experiments
                    that stick, guided by
                    <span className="text-accent-foreground px-1">
                      <Highlighter action="underline">大道至簡</Highlighter>
                    </span>
                    (simple stupid) and an obsession with small, joyful details.
                    Off the clock I&apos;m an INFP recharging with rainy-day
                    lofi, sci-fi rabbit holes, and analogue photography. If
                    it&apos;s clean, quick, and a little weird, there&apos;s a
                    good chance I built it.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3 border-t">
                {socials.map(({ label, href, icon: Icon }) => (
                  <Badge key={label} variant="outline" asChild>
                    <a href={href} target="_blank" rel="noreferrer">
                      <Icon className="size-3" />
                      <span>{label}</span>
                    </a>
                  </Badge>
                ))}
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden p-0">
              <CardContent className="relative flex h-[230px] items-center justify-center">
                <SimpleIconOrbitingCircles
                  slugs={[
                    "github",
                    "javascript",
                    "react",
                    "vercel",
                    "docker",
                    "drizzle",
                    "linear",
                    "notion",
                    "hono",
                  ]}
                  iconSize={35}
                />
                <SimpleIconOrbitingCircles
                  slugs={["tailwindcss", "nodedotjs", "nextdotjs"]}
                  iconSize={30}
                  radius={80}
                  reverse
                />
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
