"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../libs/fetchMovies";
import { FaPlay, FaClock } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies("movie/popular");
      setMovies(data?.results || []); // <- fallback to empty array
    };
    loadMovies();
  }, []);

  useEffect(() => {
    if (!movies.length) return; // only start interval if movies exist
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  // optional chaining to prevent crash if index is out of range
  const movie = movies[index];

  if (!movie) return null; // in case movies is empty initially

  const bgImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="relative h-[85vh] bg-cover bg-center text-white flex items-center px-10 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-xl mt-60">
        <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>
        <p className="text-gray-200 mb-5 line-clamp-4">{movie.overview}</p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition">
            <FaPlay /> Play
          </button>
          <button className="flex items-center gap-2 bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            <FaClock /> Watch Later
          </button>
        </div>
      </div>
      <div className="absolute right-10 bottom-10 z-10">
        <Link
          href="/Movies"
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
