import { Github, Instagram, Mail, Newspaper, Send } from "lucide-react";
import { Fragment } from "react";

import { DrawLineText } from "~/components/gsap/draw-line-text";
import { SimpleIconOrbitingCircles } from "~/components/skill-orbiting-circles";
import { AnimatedThemeSwitcher } from "~/components/theme-switcher";
import { TiltCardDialog } from "~/components/tilt-card-dialog";
import Timeline from "~/components/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { DotPattern } from "~/components/ui/dot-pattern";
import { Highlighter } from "~/components/ui/highlighter";
import { MusicToggleButton } from "~/components/ui/music-toggle-button";
import { ScrollArea } from "~/components/ui/scroll-area";

const tags = [
  "1998 - Now", // エヘヘ
  "Junkcode Developer",
  "Photographer",
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
    href: "https://www.instagram.com/inewsk",
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

const timelineItems = [
  {
    date: "2010",
    title: "Started programming",
    description: "I started programming with HTML and CSS.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DotPattern width={16} height={16} className="inset-0 z-0 opacity-40" />

      <ScrollArea className="h-screen w-full">
        <div className="flex justify-end gap-4 p-4">
          <MusicToggleButton />
          <AnimatedThemeSwitcher duration={600} />
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-6">
            <Card className="relative">
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <TiltCardDialog
                    renderTrigger={
                      <Avatar className="size-20 cursor-pointer">
                        <AvatarImage
                          src="/images/avatar.jpg"
                          alt="Yuji Kurokawa"
                        />
                        <AvatarFallback>YK</AvatarFallback>
                      </Avatar>
                    }
                  />
                  <div className="flex flex-col gap-2">
                    <DrawLineText
                      text="Yuji Kurokawa"
                      oneByOne={false}
                      fontSize={24}
                      duration={1.5}
                    />
                    <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
                      {tags.map((tag, index) => (
                        <Fragment key={tag}>
                          <span title={tag}>{tag}</span>
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
                  <p className="leading-7">
                    The dude who ships fullstack Node.js stuff and instantly
                    wishes I tossed in more confetti. Minimalist frontend
                    engineer at heart, crafting calm fast interfaces in React or
                    whatever tool actually fits the idea. Since 2010 I&apos;ve
                    been dropping tiny experiments that somehow stick, all
                    powered by
                    <span className="text-accent-foreground px-1">
                      <Highlighter action="underline">大道至簡</Highlighter>
                    </span>
                    (simple stupid) and a weird obsession with small joyful
                    details. Off the clock I&apos;m pure INFP recharging with
                    rainy-day lofi, sci-fi rabbit holes, and analogue
                    photography. If it&apos;s clean, quick, and a lil weird,
                    there&apos;s a solid chance I built it.
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

            <Card>
              <CardContent>
                <Timeline items={timelineItems} />
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
