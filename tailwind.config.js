module.exports = {
  content: [
    "./public/bookmarker/index.html",
    "./public/portfolio/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Bookmarker
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",

        // Portfolio
        "body": "#17171F",
        "selected-text": "#A3A3FF",
        "theme": "#3F3FFF",
        "nav": "#404053",
        "secondary": "#9191A4",
        "badge": "#3F3F51",
        "input-border": "#565666",
        "input": "#2A2A35"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: []
}