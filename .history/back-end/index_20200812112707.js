const express = require('express');
const path = require('path');
const MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const hbs = require('hbs');
const authMidlware = require('./midleware/auth');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const mainRouter = require('./routes/main');
const tenderRouter = require('./routes/tender');

const PORT = process.env.PORT || 3000;
const app = express();
