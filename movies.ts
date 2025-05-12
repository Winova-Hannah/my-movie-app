export interface Movie {
  id: string; // A unique ID for each movie
  name: string; // The movie’s title
  description: string; // A brief summary of what the movie is about
  genre: string; // The category or type of movie, like Action, Comedy, etc.
  duration: string; // How long the movie is
  releaseDate: string; // When the movie was or will be released
  poster: string; // A link to the movie’s poster image
}

export const movies: Movie[] = [
  {
    id: "1",
    name: "The Journey to The Centre of the Earth",
    description: "An epic journey across mysterious lands.",
    genre: "Adventure",
    duration: "2h 30m",
    releaseDate: "2023-11-10",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSU9sm4ra1gA8UiFRfjU3LnXdKYTDBD_msFg&s"
  },
  {
    id: "2",
    name: "Smurfs",
    description: "A comedic story set in the heart of Paris.",
    genre: "Comedy",
    duration: "1h 50m",
    releaseDate: "2023-12-01",
    poster: "https://i.pinimg.com/736x/51/07/b3/5107b3d7eecbaf0a60009a1b4af52659.jpg"
  },
  {
    id: "3",
    name: "Interstellar",
    description: "Space battles and an epic rebellion.",
    genre: "Sci-Fi",
    duration: "2h 15m",
    releaseDate: "2024-01-20",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
  },
  {
    id: "4",
    name: "The Dark Knight",
    description: "Batman must face his greatest challenge yet, the Joker.",
    genre: "Action",
    duration: "2h 32m",
    releaseDate: "2023-08-10",
    poster: "https://img2.hulu.com/user/v3/artwork/2ce6365a-46e7-43d9-8d77-5b84753a663c?base_image_bucket_name=image_manager&base_image=99f4361c-662b-4693-89d7-7519197f9c40&size=458x687&format=webp"
  },
  {
    id: "5",
    name: "The Pursuit of Happyness",
    description: "A father struggles to create a better life for his son.",
    genre: "Drama",
    duration: "1h 57m",
    releaseDate: "2024-03-05",
    poster: "https://www.tuscaloosanews.com/gcdn/authoring/2006/12/15/NTTN/ghows-DA-10878e94-34c3-4cde-9a38-dabc5908179a-b656aee5.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp"
  },
  {
    id: "6",
    name: "Frozen II",
    description: "Elsa and Anna embark on a dangerous journey to the north.",
    genre: "Animation",
    duration: "1h 43m",
    releaseDate: "2023-12-25",
    poster: "https://cdn.europosters.eu/image/750/80959.jpg"
  },
  {
    id: "7",
    name: "Minecraft: The Movie",
    description: "An adventurous journey through the pixelated world of Minecraft.",
    genre: "Adventure",
    duration: "2h 10m",
    releaseDate: "2024-06-15",
    poster: "https://preview.redd.it/why-is-everyone-liking-the-minecraft-movie-after-the-second-v0-a4pu8ndutofe1.jpeg?width=640&crop=smart&auto=webp&s=dc6a8480329b79084a06f6ab7a7182693fa094e3"
  },
  {
    id: "8",
    name: "Openheimer",
    description: "A gripping historical drama about the life of J. Robert Oppenheimer, the father of the atomic bomb.",
    genre: "Biography/Drama",
    duration: "2h 45m",
    releaseDate: "2024-05-30",
    poster: "https://www.universalpictures.co.uk/tl_files/content/movies/oppenheimer/oppenheimer_header-mobile.jpg"
  }
];
