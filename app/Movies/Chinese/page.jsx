import MovieSection from "../components/MovieSection";


export default function ChineseMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="Chinese Movies" endpoint="chinese/movie/week" />
    </main>
  );
}
