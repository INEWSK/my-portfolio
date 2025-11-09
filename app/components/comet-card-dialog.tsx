import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { type ReactElement, useState } from "react";

import { Dialog, DialogPortal, DialogTrigger } from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

import { CometCard } from "./ui/comet-card";

type GlareCardDialogProps = {
  renderTrigger?: ReactElement;
};

export function CometCardDialog({ renderTrigger }: GlareCardDialogProps) {
  const [open, setOpen] = useState(false);

  if (!renderTrigger) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{renderTrigger}</DialogTrigger>

      <DialogPortal forceMount>
        <AnimatePresence>
          {open ? (
            <>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  className="bg-background/50 fixed inset-0 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Title>Glare Card</DialogPrimitive.Title>

              <DialogPrimitive.Content>
                <motion.div
                  className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, rotateX: -12, rotateY: 18, y: 90 }}
                  animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: 8, rotateY: -12, y: 120 }}
                  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <DialogContent />
                </motion.div>
              </DialogPrimitive.Content>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
}

function DialogContent() {
  return (
    <CometCard translateDepth={0}>
      <button
        type="button"
        className={cn(
          "flex w-80 cursor-pointer flex-col items-stretch rounded p-2 saturate-[1.2] focus-visible:outline-none md:p-4",
          "bg-[#222]",
        )}
        aria-label="View Lune Rousse"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
        }}
      >
        <div className="flex-1 p-2">
          <div className="relative aspect-3/4">
            <img
              loading="lazy"
              className="absolute inset-0 size-full rounded-xl object-cover contrast-75"
              alt="Lune Rousse"
              src="/images/lune-rousse.jpeg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              }}
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-between p-4 font-mono">
          <div className="text-xs text-white">Blood Moon</div>
          <div className="text-muted-foreground text-xs opacity-50">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date("2025-09-07"))}
          </div>
        </div>
      </button>
    </CometCard>
  );
}
