import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';

type Entry = {
  time: string;
  tool: string;
  action: string;
};

const entries: Entry[] = [
{ time: '06:02', tool: 'LinkedIn', action: 'Opened 14 new connections from yesterday' },
{ time: '06:04', tool: 'LinkedIn', action: 'Sent follow-up to 9 who replied' },
{ time: '06:11', tool: 'HubSpot', action: 'Created 9 contacts, filled source + owner' },
{ time: '06:12', tool: 'Gmail', action: 'Drafted intro email, held for approval' },
{ time: '06:15', tool: 'Slack', action: 'Posted the morning summary to #pipeline' }];


export function ActivityLog() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(reduceMotion ? entries.length : 1);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(entries.length);
      return;
    }
    const id = window.setInterval(() => {
      setVisible((n) => n >= entries.length ? 1 : n + 1);
    }, 1500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="overflow-hidden rounded-2xl border border-nightLine bg-night">
      <div className="flex items-center justify-between border-b border-nightLine px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {!reduceMotion &&
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            }
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-canvas/70">
            Pipeline bot · running
          </span>
        </div>
        <span className="font-mono text-xs text-canvas/40">Tue 06:15</span>
      </div>

      <ol className="divide-y divide-nightLine">
        {entries.map((entry, i) => {
          const shown = i < visible;
          return (
            <li key={entry.time} className="px-5 py-3.5">
              <motion.div
                initial={false}
                animate={{ opacity: shown ? 1 : 0.18 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-start gap-3">
                
                <span className="mt-0.5 font-mono text-xs text-canvas/40">{entry.time}</span>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-gold">
                    {entry.tool}
                  </span>
                  <p className="mt-1 text-sm leading-snug text-canvas/85">{entry.action}</p>
                </div>
                <CheckIcon
                  className={`mt-0.5 h-4 w-4 shrink-0 transition-opacity duration-200 ease-out ${
                  shown ? 'text-gold opacity-100' : 'opacity-0'}`
                  }
                  aria-hidden="true" />
                
              </motion.div>
            </li>);

        })}
      </ol>

      <p className="border-t border-nightLine px-5 py-3.5 font-mono text-xs text-canvas/45">
        Your laptop has been shut since 22:40.
      </p>
    </div>);

}