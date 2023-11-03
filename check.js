document.write("js-sync is sync? " + Boolean(globalThis.importJsSyncRun));
document.write("js-async is sync? " + Boolean(globalThis.importJsAyncRun));
document.write("wasm is sync? " + Boolean(globalThis.importWasmRun));
