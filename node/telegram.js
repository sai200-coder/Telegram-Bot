const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your Telegram bot token
const token = '6043093938:AAHpoRUJ_xcE29aSSdjBl_TwDEp0tmyB0ZE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const API_KEY = '11620869'; // Replace with your OMDB API key
const MOVIE_API_URL = 'http://www.omdbapi.com/';
let previousMovieDetails = {};

// Handle '/start' and '/menu' command
bot.onText(/\/start|\/menu/, (msg) => {
  const chatId = msg.chat.id;
  const menu = `
Welcome to the Movie Bot! Please select an option:
/movie - Get details of a movie
/prev - Show previous movie details
/instructions - Show instructions
`;
  bot.sendMessage(chatId, menu);
});

// Handle '/movie' command
bot.onText(/\/movie/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Please enter the name of the movie:');
  
  bot.once('message', (msg) => {
    const movieName = msg.text;
    axios.get(`${MOVIE_API_URL}?t=${movieName}&apikey=${API_KEY}`)
      .then(response => {
        const movie = response.data;
        if (movie.Response === 'True') {
          previousMovieDetails = movie;
          const movieDetails = `
Title: ${movie.Title}
Poster:${movie.Poster}
Year: ${movie.Year}
Rated: ${movie.Rated}
Released: ${movie.Released}
Runtime: ${movie.Runtime}
Genre: ${movie.Genre}
Director: ${movie.Director}
Writer: ${movie.Writer}
Actors: ${movie.Actors}
Plot: ${movie.Plot}
Language: ${movie.Language}
Country: ${movie.Country}
Awards: ${movie.Awards}
Ratings: ${movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}
Metascore: ${movie.Metascore}
imdbRating: ${movie.imdbRating}
imdbVotes: ${movie.imdbVotes}
imdbID: ${movie.imdbID}
Type: ${movie.Type}
DVD: ${movie.DVD}
BoxOffice: ${movie.BoxOffice}
Production: ${movie.Production}
Website: ${movie.Website}
          `;
          bot.sendMessage(chatId, movieDetails);
        } else {
          bot.sendMessage(chatId, 'Movie not found. Please try another title.');
        }
      })
      .catch(error => {
        console.error(error);
        bot.sendMessage(chatId, 'An error occurred while fetching movie details.');
      });
  });
});

// Handle '/prev' command
bot.onText(/\/prev/, (msg) => {
  const chatId = msg.chat.id;
  if (previousMovieDetails.Title) {
    const movie = previousMovieDetails;
    const movieDetails = `
Title: ${movie.Title}
Poster:${movie.Poster}
Year: ${movie.Year}
Rated: ${movie.Rated}
Released: ${movie.Released}
Runtime: ${movie.Runtime}
Genre: ${movie.Genre}
Director: ${movie.Director}
Writer: ${movie.Writer}
Actors: ${movie.Actors}
Plot: ${movie.Plot}
Language: ${movie.Language}
Country: ${movie.Country}
Awards: ${movie.Awards}
Ratings: ${movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}
Metascore: ${movie.Metascore}
imdbRating: ${movie.imdbRating}
imdbVotes: ${movie.imdbVotes}
imdbID: ${movie.imdbID}
Type: ${movie.Type}
DVD: ${movie.DVD}
BoxOffice: ${movie.BoxOffice}
Production: ${movie.Production}
Website: ${movie.Website}
    `;
    bot.sendMessage(chatId, movieDetails);
  } else {
    bot.sendMessage(chatId, 'No previous movie details found.');
  }
});

// Handle '/instructions' command
bot.onText(/\/instructions/, (msg) => {
  const chatId = msg.chat.id;
  const instructions = `
Instructions:
1. Use /movie to get details of a specific movie. You will be prompted to enter the movie name.
2. Use /prev to see the details of the last movie you searched for.
3. Use /menu to see the main menu.
  `;
  bot.sendMessage(chatId, instructions);
});

console.log('Bot is running...');
