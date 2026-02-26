import Image from "next/image";

const logos = [
  {
    src: "/logo/logo-eco-pret-full-size.png",
    alt: "Éco-prêt à taux zéro",
    width: 169,
  },
  {
    src: "/logo/logo-republique-francaise-full-sie.png",
    alt: "République Française",
    width: 108,
  },
  {
    src: "/logo/logo-cee-full-size.png",
    alt: "CEE — Les certificats d'économies d'énergie",
    width: 138,
  },
  {
    src: "/logo/logo-ma-prime-renov-full-size.png",
    alt: "MaPrimeRénov'",
    width: 206,
  },
];

export function LogoSection() {
  return (
    <section className="border-b border-[#e2e6e6] py-10 px-4 min-[375px]:px-5 min-[395px]:px-6">
      {/* Mobile: 2×2 grid */}
      <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-8 max-w-sm mx-auto">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            <div className="relative h-12 w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: single row */}
      <div className="hidden md:flex items-center justify-between mx-auto w-full max-w-5xl">
        {logos.map((logo) => (
          <div key={logo.alt} className="relative h-[60px]" style={{ width: logo.width }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
