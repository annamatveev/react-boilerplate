/**
 *
 * Asynchronously loads the component for AuthProvider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
