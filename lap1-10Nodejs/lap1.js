import express from 'express'
const hostname = '127.0.0.1';
const port = 3000;
const app = express()


app.use("/", (req, res) => {
    res.status(200).send('Hello World')
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
