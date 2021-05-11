function process(state) {
    this.state = state;
}
const singleton = (function() {
    function processManager() {
        this.numProcess = 0;
    }
    let pManager;

    function createProcessManager() {
        pManager = new processManager();
        return pManager;
    }
    return {
        getProcessManager: () => {
            if (!pManager) pManager = createProcessManager();
            return pManager;
        },
    };
})();
const processManager = singleton.getProcessManager();
const processManager2 = singleton.getProcessManager();
console.log(processManager === processManager2);