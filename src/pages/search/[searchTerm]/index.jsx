import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default function SearchPage({list}) {
  return (
    <div>
      {list && list.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {list && list.length > 0 && <Results results={list} />}
    </div>
  )
}

export async function getServerSideProps(context) { 
  const { query } = context;
  const { searchTerm } = query;

  try {
    const request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false&page=1`);
    if (!request.ok) {
      throw new Error("Failed to fetch data");
    }

    const response = await request.json();
    const limitedResults = response.results.slice(0, 5);

    return {
      props: {
        list: limitedResults,
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