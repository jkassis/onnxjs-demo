const fs = require("fs");
const path = require("path");

// copy ONNX.js WebAssembly files to {workspace}/public/ folder
const srcFolder = path.join(__dirname, 'node_modules', 'onnxruntime-web', 'dist');
const destFolder = path.join(__dirname, 'public');
fs.copyFileSync(path.join(srcFolder, 'ort-wasm-threaded.wasm'), path.join(destFolder, 'onnx-wasm.wasm'));
fs.copyFileSync(path.join(srcFolder, 'ort-wasm-threaded.worker.js'), path.join(destFolder, 'onnx-worker.js'));
