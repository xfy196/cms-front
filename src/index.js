import dva from 'dva';
import {createBrowserHistory} from "history"
import './index.css';

// 1. Initialize
const app = dva({
    history: createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/usermodel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
