const convertMovieType = (type) => {
	switch (type) {
		case 'movie':
			return { main: "Фильмы", secondary: "фильм" };
		case 'tv-series':
               return { main: "Сериалы", secondary: "сериал" };
          case 'cartoon':
               return { main: "Мультфильмы", secondary: "мультик" };
          case 'anime':
               return { main: "Аниме", secondary: "аниме" };
          default: 
               return { main: "", secondary: "" };
	}
}

export default convertMovieType;