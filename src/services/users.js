import { http } from './config';

export default {
  list: () => {
    return http.get('users', 
    { headers: { 'Authorization': `Bearer 6wVrpoko1Iwc2BchxlED92wr06gIpvK_frkt`, } }, );
  },

  save: (user) => {
    return http.post('users', user,
    { headers: { 'Authorization': `Bearer 6wVrpoko1Iwc2BchxlED92wr06gIpvK_frkt`, } }, );
  },
  
}