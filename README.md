
# Telegram Movie Bot

This is a Telegram bot that allows users to fetch movie details using the OMDB API. The bot can display details of movies and store the last fetched movie's information for later retrieval.

## Features

- **Fetch Movie Details**: Enter the name of a movie to retrieve its details.
- **Retrieve Previous Movie**: Display details of the last searched movie.
- **Instructions**: Get a list of available commands and their usage.

## Commands

1. **/start** or **/menu**:
   - Displays the main menu with available options.

2. **/movie**:
   - Prompts the user to enter the name of a movie.
   - Fetches movie details from the OMDB API and displays them.

3. **/prev**:
   - Shows the details of the last fetched movie.

4. **/instructions**:
   - Provides usage instructions for the bot.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up API Keys**:
   - Replace `YOUR_TELEGRAM_BOT_TOKEN` in the code with your Telegram bot token.
   - Replace `YOUR_OMDB_API_KEY` in the code with your OMDB API key.

4. **Run the Bot**:
   ```bash
   node bot.js
   ```

5. **Interact with the Bot**:
   - Open Telegram and search for your bot.
   - Start a conversation and use the commands.

## Example Usage

- **Command**: `/movie`
  - **Response**:
    ```
    Title: Inception
    Year: 2010
    Rated: PG-13
    Released: 16 Jul 2010
    Runtime: 148 min
    Genre: Action, Adventure, Sci-Fi
    Director: Christopher Nolan
    Plot: A thief who steals corporate secrets through the use of dream-sharing technology...
    ```

- **Command**: `/prev`
  - **Response**:
    ```
    Title: Inception
    Year: 2010
    Rated: PG-13
    ...
    ```

## Dependencies

- [Node.js](https://nodejs.org/)
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [axios](https://github.com/axios/axios)

## Notes

- Ensure your bot token and OMDB API key are valid.
- Keep your API keys secure and do not share them publicly.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

