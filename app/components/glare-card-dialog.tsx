"use client";

import { type ReactElement, useState } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";

import { Dialog, DialogPortal, DialogTrigger } from "~/components/ui/dialog";
import { CometCard } from "./ui/comet-card";

type GlareCardDialogProps = {
  renderTrigger?: ReactElement;
};

export function GlareCardDialog({ renderTrigger }: GlareCardDialogProps) {
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
        className="flex w-80 cursor-pointer flex-col items-stretch rounded bg-[#1F2121] p-2 saturate-0 focus-visible:outline-none md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-3/4 w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded bg-[#000000] object-cover contrast-75"
              alt="Invite background"
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Comet Invitation</div>
          <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
        </div>
      </button>
    </CometCard>
  );
}
