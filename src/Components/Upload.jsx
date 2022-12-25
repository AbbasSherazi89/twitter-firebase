import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { AiFillCamera } from "react-icons/ai";
const Upload = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [progress, setprogress] = useState(0);

  const handleFileChange = (event) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + event.target.files[0].name);
    const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
        });
      }
    );
  };
  return (
    <>
      <label>
        {progress < 1 ? (
          <>
            <input
              type="file"
              id="input-file"
              className="form-control "
              onChange={handleFileChange}
            />
            {/* <AiFillCamera size={30} /> <br /> */}
            {/* <progress value={progress} max="100" /> */}
          </>
        ) : (
          <img src={fileUrl} alt="..." />
        )}
      </label>
    </>
  );
};

export default Upload;
