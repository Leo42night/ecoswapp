const articles = [
  {
    src: "artikel1",
    title: "Pemanfaatan Sampah Organik dari Sampah Rumah Tangga",
  },
  {
    src: "artikel2",
    title: "Strategi untuk memanfaatkan sampah organik dari sampah",
  },
  {
    src: "artikel3",
    title:
      "Pengolahan secara keseluruhan sampah dan pengecekan manfaat keseluruhan",
  },
];

const Blog = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Rekomendasi Blog</h2>
      <p className="text-sm font-light mt-2">
        Memberi Anda informasi dan pengetahuan tentang sampah
      </p>
      <div className="flex space-x-16 animate-loop-scroll group">
        <div className="flex sm:space-x-8 md:space-x-16 gap-5 mt-4 group-hover:paused">
          {articles.map((article) => (
            <article
              key={article.src}
              className="cursor-pointer max-w-11 sm:max-w-40 self-start min-w-56 md:min-w-96 border-2 border-black border-opacity-10 rounded-md p-2"
            >
              <img
                loading="lazy"
                src={`/real/${article.src}.webp`}
                alt={article.title}
              />
              <h3 className="mt-2 truncate">{article.title}</h3>
            </article>
          ))}
        </div>
        <div
          className="flex sm:space-x-8 md:space-x-16 gap-5 mt-4 group-hover:paused"
          aria-hidden="true"
        >
          {articles.map((article) => (
            <article
              key={article.src}
              className="cursor-pointer max-w-11 sm:max-w-40 self-start min-w-56 md:min-w-96 border-2 border-black border-opacity-10 rounded-md p-2"
            >
              <img
                loading="lazy"
                src={`/real/${article.src}.webp`}
                alt={article.title}
              />
              <h3 className="mt-2 truncate">{article.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
