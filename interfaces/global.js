import React from 'react';

declare module CSSModule {
  declare var exports: { [key: string]: string };
}

declare module OfflinePlugin {
  declare function install(): any;
}

declare interface System {
    static import: (module: string) => Promise<{
        default: any,
        inc: number,
    }>
};

declare module 'react-router' {
  declare interface ReactRouter extends React.Component<*, *, *> {
    IndexRoute: React.Component<*, *, *>;
    Link: React.Component<*, *, *>;
    Redirect: React.Component<*, *, *>;
    IndexRedirect: React.Component<*, *, *>;
    Route: React.Component<*, *, *>;
    Router: React.Component<*, *, *>;
    browserHistory: any;
    hashHistory: any;
    useRouterHistory: (historyFactory: Function) => (options: ?Object) => Object;
    match: Function;
    RouterContext: React.Component<*, *, *>;
    createRoutes: (routes: React$Element<*>) => Array<Object>;
    formatPattern: (pattern: string, params: Object) => string;
    withRouter: any;
  }
  declare var exports: ReactRouter;
}

declare module 'react-router/lib/PatternUtils' {
  declare var exports: any;
}

declare module 'history/lib/createBrowserHistory' {
  declare var exports: any;
}
