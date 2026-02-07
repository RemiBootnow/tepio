"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";

interface DisqualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisqualificationModal({
  isOpen,
  onClose,
}: DisqualificationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />

          {/* Modal - Bottom sheet on mobile, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 w-full rounded-t-2xl bg-background p-6 shadow-xl md:inset-auto md:left-1/2 md:top-1/2 md:w-full md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="size-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <Heading as="h3" className="mb-3">
                Propriétaires de maison uniquement
              </Heading>

              <p className="mb-6 text-muted-foreground">
                Tepio accompagne uniquement les propriétaires de maison dans leurs projets de rénovation énergétique.
              </p>

              <Button onClick={onClose} className="w-full">
                J'ai compris
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
