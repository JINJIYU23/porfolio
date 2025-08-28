import type { ReactNode } from "react";

interface SectionLayoutProps {
  title?: string;
  children: ReactNode;
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <section
      className="
        w-full
        max-w-[1200px] mx-auto
        px-4 sm:px-4 md:px-8 lg:px-[60px]
        flex flex-col justify-center items-center
        mt-[100px] sm:mt-[150px] lg:mt-[250px]
      "
    >
      {title && (
        <h1 className="text-[24px] md:text-[32px] text-[var(--main-color-1)] py-[30px] sm:py-[40px] lg:py-[50px] text-center">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}
