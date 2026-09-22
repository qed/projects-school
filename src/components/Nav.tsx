import React from 'react';

const links = [
{ label: 'Work', href: '#work' },
{ label: 'Personal', href: '#personal' },
{ label: 'How it works', href: '#program' },
{ label: 'Tuition', href: '#tuition' }];


export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink transition-colors duration-150 ease-out hover:text-accent">
          
          projects<span className="text-accent">.</span>school
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-graphite transition-colors duration-150 ease-out hover:text-ink">
            
              {link.label}
            </a>
          )}
        </nav>

        <a
          href="#apply"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-canvas transition-transform duration-150 ease-out hover:-translate-y-px active:translate-y-0">
          
          Apply
        </a>
      </div>
    </header>);

}