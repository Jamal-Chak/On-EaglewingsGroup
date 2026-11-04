import type { ReactNode } from 'react';
import Image from 'next/image';

export default function PageHero({
  children,
  image,
}: {
  children: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-black py-24">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="z-0 object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/90"
          />
        </>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-[3] h-72 w-[min(90vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
