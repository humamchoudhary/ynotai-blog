// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FirebaseApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
const storage = getStorage();

export default function handler(req, res) {
  try {
    let url = null;
    const storageRef = ref(storage, `images/${v4()}`);
    const base64Image = req.body.imageBinary;
    if (!base64Image) {
      return res.status(400).json({ error: "No image provided" });
    }

    uploadString(storageRef, base64Image, "data_url").then((snapshot) => {
      console.log("Uploaded a data_url string!");
      console.log(snapshot.ref);
      getDownloadURL(snapshot.ref).then((_) => {
        return res.status(200).json({ url: _ });
      });
    });
   
  } catch (error) {
    console.error("Error handling image upload:", error);
    return res.status(500).json({ error: "Failed to upload image" });
  }
}
