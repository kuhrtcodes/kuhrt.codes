import { Middleware } from '@nuxt/types';

const permissions: Middleware = ({ app, redirect }) => {
  if (app.$auth.loggedIn) {
    const appMetaData = app.$auth.$storage.getUniversal('appMetaData');
    if (appMetaData.role !== 'admin') {
      return redirect('/');
    }
  }
};

export default permissions;
