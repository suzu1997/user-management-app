import { memo, VFC } from "react";
import { Route, Switch } from "react-router";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templetes/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { homeRoutes } from "./HomeRoutes";

//Routingに関するコードを記述
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        {/* /Home配下のルーティングを設定 */}
        {/* { match: { url } }のurlには、/homeが入ってくる */}
        <Route path="/home" render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route 
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))};
          </Switch>
          )} 
        />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
