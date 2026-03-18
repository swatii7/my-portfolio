export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`py-10 md:py-20 px-6 lg:px-20 scroll-mt-24 max-w-7xl mx-auto w-full ${className}`}
    >
      {(eyebrow || title || description) && (
        <div className="flex items-center gap-4 mb-12">
          {eyebrow && (
            <span className="font-mono text-primary text-xl">{eyebrow}</span>
          )}
          {title && (
            <>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-color uppercase">
              {title}
            </h2>
            <div className="h-0.5 flex-1 bg-border"></div>
            </>
          )}
        </div>
      )}

      {children}
    </section>
  );
}

