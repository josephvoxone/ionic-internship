const SESSION_KEY = "user";

const sessionService = {
  getID() {
    return this.getSession().id;
  },

  getSession() {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || ({} as any));
  },

  saveSession(result: any) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(result));
  },

  removeSession() {
    localStorage.removeItem(SESSION_KEY);
  },
};

export default sessionService;
