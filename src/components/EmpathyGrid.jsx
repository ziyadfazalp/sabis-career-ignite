import { useRef } from "react";

const EmpathyGrid = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const comicEpisode = [
    {
      id: 1,
      alt: "Episode 3 panel 1: a student feeling confused about career options",
      img: "/comics/ep3-panel1.png",
    },
    {
      id: 2,
      alt: "Episode 3 panel 2: common career myths creating anxiety",
      img: "/comics/ep3-panel2.png",
    },
    {
      id: 3,
      alt: "Episode 3 panel 3: guidance bringing more clarity",
      img: "/comics/ep3-panel3.png",
    },
    {
      id: 4,
      alt: "Episode 3 panel 4: confidence growing after better understanding",
      img: "/comics/ep3-panel4.png",
    },
  ];

  return (
    <section className="bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Comic Reader
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            Career anxiety is real, and you are not alone. Swipe through this
            4-panel story created to help students and parents feel understood
            and move toward confident decisions.
          </p>
        </div>

        <div className="md:hidden mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-lg font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label="Scroll comic panels left"
          >
            &#8249;
          </button>
          <p className="md:hidden rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
            Swipe to pan
          </p>
          <button
            type="button"
            onClick={scrollRight}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-lg font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label="Scroll comic panels right"
          >
            &#8250;
          </button>
        </div>

        <div
          ref={carouselRef}
          className="mt-6 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Comic reader carousel"
        >
          <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {comicEpisode.map((panel) => (
              <article
                key={panel.id}
                className="w-[87%] shrink-0 snap-center overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm sm:w-[84%] md:w-auto md:min-w-0"
              >
                <img
                  src={panel.img}
                  alt={panel.alt}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
                <div className="border-t border-emerald-50 px-4 py-3">
                  <p className="text-sm font-medium text-slate-700">
                    Panel {panel.id} of {comicEpisode.length}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://forms.gle/Qzq2NMbV8dj8vgPr9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Register for Psychometric Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpathyGrid;
