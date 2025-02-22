import {defineStore} from "pinia";
import {useMoviesStore} from "./MovieStore.js";

const url =
    "https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore("searchStore", {
    state: () => ({
        loader: false,
        movies: [],
    }),
    actions: {
        async getMovies(search) {
            this.loader = true;
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            this.movies = data.results;
            this.loader = false;
        },
        addToUserMovies(obj) {
            const moviesStore = useMoviesStore();
            if (moviesStore.movies.findIndex(movie => movie.id === obj.id) === -1) {
                moviesStore.movies.push({...obj, isWatched: false});
                moviesStore.activeTab = 1;
            }
        },
    },
});
