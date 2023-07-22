import axios from "axios";

class MyUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    console.log("upload");
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const toBase64 = (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });

          return toBase64(file).then((cFile) => {
            return axios
              .post("/api/upload", {
                imageBinary: cFile,
              })
              .then((d) => {
                console.log("then", d);
                if (d.status) {
                  this.loader.uploaded = true;
                  console.log(d.data.url);
                  resolve({
                    default: d.data.url,
                  });
                } else {
                  reject(`Couldn't upload file: ${file.name}.`);
                }
              });
          });
        })
    );
  }
}

// ...

export default function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    console.log(loader);
    return new MyUploadAdapter(loader);
  };
}
