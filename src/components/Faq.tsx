import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../data/curriculum';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink">
            Questions people ask first
          </h2>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left">
                      
                      <span className="text-lg text-ink">{item.q}</span>
                      <PlusIcon
                        className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-200 ease-out ${
                        isOpen ? 'rotate-45' : ''}`
                        }
                        aria-hidden="true" />
                      
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">
                      
                        <p className="max-w-2xl pb-6 pr-10 text-base leading-relaxed text-graphite">
                          {item.a}
                        </p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}