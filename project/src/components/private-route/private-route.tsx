import {Navigate} from 'react-router-dom';
import {AppPagesRoute, AuthStatus} from '../../const';
import { PrivateRouteProps } from '../../types/types';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppPagesRoute.SignIn} />
  );
}

export default PrivateRoute;
