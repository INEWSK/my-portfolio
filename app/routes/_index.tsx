import { Github, HeartIcon, Instagram, Mail, Send } from "lucide-react";
import { Fragment } from "react";

import { DrawLineText } from "~/components/gsap/draw-line-text";
import { SimpleIconOrbitingCircles } from "~/components/skill-orbiting-circles";
import { AnimatedThemeSwitcher } from "~/components/theme-switcher";
import { TiltCardDialog } from "~/components/tilt-card-dialog";
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
                <div className="flex flex-col flex-wrap items-center gap-4 md:flex-row">
                  <TiltCardDialog
                    renderTrigger={
                      <Avatar className="size-20 cursor-pointer">
                        <AvatarImage
                          className="transition-transform duration-600 hover:-rotate-6"
                          src="/images/avatar.jpg"
                          alt="Yuji Kurokawa"
                        />
                        <AvatarFallback>YK</AvatarFallback>
                      </Avatar>
                    }
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <DrawLineText
                      text="Yuji Kurokawa"
                      oneByOne={false}
                      fontSize={24}
                      duration={1.5}
                    />
                    <div className="text-muted-foreground mt-2 text-xs tracking-widest uppercase">
                      {tags.map((tag, index) => (
                        <Fragment key={tag}>
                          <span title={tag}>{tag}</span>
                          {tags.length !== index + 1 && (
                            <span className="text-muted-foreground px-2">
                              /
                            </span>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-muted-foreground text-sm">
                  <p>
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

            <small className="text-muted-foreground self-center py-4">
              Page is under construction.
            </small>
          </div>
        </div>

        <footer>
          <div className="text-muted-foreground mx-auto flex flex-col gap-3 px-4 py-8 text-center">
            <small>
              © {new Date().getFullYear()} INEWSK. All rights reserved.
            </small>
            <small className="flex items-center justify-center gap-2">
              Make with
              <HeartIcon
                fill="#d43f57"
                className="animate-heartbeat size-3 text-[#d43f57]"
              />
              by YK
            </small>
          </div>
        </footer>
      </ScrollArea>
    </main>
  );
}
