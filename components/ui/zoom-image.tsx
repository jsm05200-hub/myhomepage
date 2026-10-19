"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2 } from "lucide-react"

type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  imgClassName?: string
  children?: React.ReactNode // overlay content (text on top of the image)
}

// 스크롤하면 떠오르고, 마우스를 올리면 살짝 확대, 누르면 크게 보는 사진. 가일마을 갤러리와 같은 스프링 모션.
export default function ZoomImage({ src, alt, caption, className = "", imgClassName = "object-cover", children }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} 크게 보기`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden text-left ${className}`}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        />
        {children}
        <span className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              initial={{ y: 20, scale: 0.95 }}
              animate={{ y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } }}
              exit={{ y: 20, scale: 0.95 }}
            />
            {caption && <p className="mt-3 text-sm text-white/80">{caption}</p>}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
