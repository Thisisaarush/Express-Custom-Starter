import app from "./app.js"

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(
    `\n 🟢 Server is running on port ${PORT} \n 🌍 Visit http://localhost:${PORT} in your browser \n 🛑 Press Ctrl + C to stop the server \n`
  )
})
