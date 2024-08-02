import {defineStore} from "pinia";

export const useMoviesStore = defineStore('movieStore', {
    state: () => ({
        movies: [],
        activeTab: 1,
    }),
    getters: {
        watchedMovies() {
            return this.movies.filter(movie => movie.isWatched)
        },
        totalCountMovies() {
            return this.movies.length;
        }
    },
    actions: {
        setActiveTab(id) {
            this.activeTab = id;
        },
        toggleWatched(id) {
            const idx = this.movies.findIndex((el) => el.id === id);
            this.movies[idx].isWatched = !this.movies[idx].isWatched
        },
        deleteMovie(id) {
            const idx = this.movies.findIndex((el) => el.id === id);
            this.movies = this.movies.filter(movie => movie.id !== id);
        },
    },
    watch: {

    },
});
