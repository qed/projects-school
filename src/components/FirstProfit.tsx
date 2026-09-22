import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

export function FirstProfit() {
  return (
    <section id="first-profit" className="bg-night">
      <div className="mx-auto max-w-page px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-gold">
              A separate school, for your kid
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-canvas sm:text-5xl lg:text-[3.5rem]">
              Their first <span className="text-gold">$10,000</span> of profit,
              <br className="hidden sm:block" /> before they finish school.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-canvas/70">
              If you have a teen or pre-teen who is into entrepreneurship, First Profit is where
              they launch a real business — one that takes real money from real customers. Same
              method, different student.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <a
              href="https://firstprofit.school"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-night transition-transform duration-150 ease-out hover:-translate-y-px active:translate-y-0">
              
              Visit firstprofit.school
              <ArrowUpRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true" />
              
            </a>
            <p className="mt-5 text-sm leading-relaxed text-canvas/50">
              Runs on its own schedule and its own tuition. Parents are welcome to sit in.
            </p>
          </div>
        </div>
      </div>
    </section>);

}