import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default function MoviePage({ movie }) {
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt="Movie poster"
        >
        </Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">
              Overview:
            </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">
              Date Released:
            </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">
              Rating:
            </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) { 
  const { query } = context;
  const movieId = query.id;

  try {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    if (!request.ok) {
      throw new Error("Failed to fetch data");
    }

    const response = await request.json();

    return {
      props: {
        movie: response,
        revalidate: 10
      },
    };
  } catch (error) { 
    if (context.res) {
      context.res.writeHead(302, {
        Location: '/_error',
      });
      context.res.end();
    }

    return {
      props: { error: error.message },
    };
  }
}