const express = require('express');
const

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/mchs';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
