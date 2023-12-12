const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;
const comicRouter = require('./routers/ApiComicRouter');
const userRouter = require('./routers/ApiUserRouter');
const commentRouter = require('./routers/ApiCommentRouter');


app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(`mongodb://localhost:27017/comic`)
    .then(() => {
        console.log('connet thanh cong')
    })
    .catch((err) => {
        console.log(`connet that bai ${err}`)
    })

app.use('/Api', comicRouter);
app.use('/Api', userRouter);
app.use('/Api', commentRouter);


app.use(express.static(path.join(__dirname,'./public')))

app.engine('.hbs', expressHbs.engine({
    extname: ".hbs"
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'./sources/views'));

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

