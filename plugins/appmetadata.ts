import { Plugin } from '@nuxt/types';

const authPlugin: Plugin = async ({ $auth, $axios }) => {
  if (!$auth.loggedIn) {
    return;
  }

  const { email } = $auth.$storage.getUniversal('user');
  const appMetaData = $auth.$storage.getUniversal('appMetaData');
  if (!appMetaData) {
    try {
      const { data } = await $axios.post(`/api/management`, { email });
      $auth.$storage.setUniversal('appMetaData', data, false);
    } catch (err) {
      console.log(err);
    }
  }
};

export default authPlugin;
