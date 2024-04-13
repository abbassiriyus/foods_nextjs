class GlobalStore {
    static instance;
    GLOBAL_VAR = 0;
  
    static getInstance() {
      if (!GlobalStore.instance) {
        GlobalStore.instance = new GlobalStore();
      }
     
      return GlobalStore.instance;
    }
  }
  
  export default GlobalStore.getInstance();