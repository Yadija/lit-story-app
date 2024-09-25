import CheckUserAuth from './auth/check-user-auth';

const About = {
  async init() {
    CheckUserAuth.checkLoginState();
  },
};

export default About;
