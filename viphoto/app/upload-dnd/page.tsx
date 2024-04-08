"use client";
 
import { UploadDropzone } from "../utils/uploadthing";
import { useState } from "react"
import Link from "next/link";
 
export default function UploadDnD() {

  const [images, setImages] = useState<
  {
    url: string;
    key: string;
  }[]>([]);

  const title = images.length ? (
    <>
      <p>Upload Complete!</p>
      <p className="mt-2">{images.length}</p>
    </>
  ): null

  const imgList = (
    <>
      {title}
      <ul>
      {/* {JSON.stringify(images)} */}
      {images.map(image => (
                    <li key={image.url} className="mt-2">
                        <Link href={image.url} target="_blank">
                            {image.url}
                        </Link>
                    </li>
                ))}
      </ul>
    </>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          if(res) {
            setImages(res)
            const json = JSON.stringify(res)
            console.log(json);
          }
          
          // alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imgList}
    </main>
  );
}