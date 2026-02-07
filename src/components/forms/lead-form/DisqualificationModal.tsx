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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-background p-6 shadow-xl"
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
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl">🏠</span>
              </div>

              <Heading as="h3" className="mb-3">
                Désolé, nous ne pouvons pas vous aider
              </Heading>

              <p className="mb-6 text-muted-foreground">
                Tepio accompagne uniquement les <strong>propriétaires de maison</strong> dans leurs projets de rénovation énergétique.
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
