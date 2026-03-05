import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function PageHero({ title, subtitle, imageUrl }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      <Image src={imageUrl} alt={title} width={1800} height={800} className="h-[360px] w-full object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
      <div className="absolute bottom-8 left-6 right-6 text-white md:left-10 md:right-10">
        <h1 className="font-display text-3xl md:text-5xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-100 md:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
