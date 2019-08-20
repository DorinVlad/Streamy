import { createBrowserHistory } from "history";
export default createBrowserHistory();

/*
After upgrading history version 4.7.2 to 4.9.0, we cannot use
history/createBrowserHistory

import createHistory from "history/createBrowserHistory";
export default createHistory();
*/
