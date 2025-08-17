import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  if (loading) return <div className="min-h-screen p-8">Loading...</div>;
  if (error) return <div className="min-h-screen p-8 text-red-500">Error: {error.message}</div>;

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Rick and Morty Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.episodes.results.map((episode: any) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{episode.name}</h2>
            <p className="text-gray-600 mb-1">{episode.episode}</p>
            <p className="text-sm text-gray-500">Aired: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
