export const SectionHeader = ({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase text-sm tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-3xl font-serif md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-white/60 text-center mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </>
  );
};
