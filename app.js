import express from "express"
import moviesroutes from "./router/movies.js"

const app = express();
app.use(express.json());
app.use("/movies", moviesroutes);

const movies = [
    { title: "Titanic", director: "James Cameron", release_date: 1997, oscar: true },
    { title: "Avatar", director: "James Cameron", release_date: 2009, oscar: false },
    { title: "The Terminator", director: "James Cameron", release_date: 1984, oscar: false},
    { title: "The Avengers", director: "Joss Whedon", release_date: 2012, oscar: false}
]

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})





