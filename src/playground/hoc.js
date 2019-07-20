//Higher Order Component (HOC) - a component(HOC) that renders another component

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated ? (
        <p>Please login to view the info</p>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo info="These are the details" isAuthenticated={true} />,
  document.getElementById("app")
);
