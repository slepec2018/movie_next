const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";

export default function Home({ list }) {
  return (
    <div>
      <Results results={list} />
    </div>
  );
}

export async function getServerSideProps(context) { 
  const { query } = context;
  const genre = query.genre || "fetchTrending";

  const request = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`);
  if (!request.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await request.json();

  return {
    props: {
      list: response.results,
      revalidate: 10
    },
  };
}
