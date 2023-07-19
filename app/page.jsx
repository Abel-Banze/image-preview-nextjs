'use client'

import {useState} from "react"
import Image from "next/image"

export default function Home() {
  const [files, setFiles] = useState([])

  const selectFiles = (e) => {
    const imgs = Array.from(e.target.files)

      setFiles((old)=>{
        const newFiles = [...old]
        for(let i=0; i < imgs.length; i++){
          newFiles.push(imgs[i])
        }

        return newFiles;
      })
  }

  const removeImg = (index)=>{
    setFiles((old)=>{
      const newImgs = [...old]
      newImgs.splice(index,1)
      return newImgs
    })
  }

  

  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap justify-center mt-5 pt-5">
        <div className="w-1/2 border mt-5 rounded border-gray-700 text-center border-trashed p-5 relative">
          <h5 className="font-bold">Browser your files here</h5>
          <input type="file" onChange={(e)=> selectFiles(e)} title="Selecione seus ficheiros" multiple className="w-full h-full z-[9] absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"/>
        </div>

        <div className="w-2/3 flex flex-row flex-wrap justify-center gap-3 mt-5">
          {files.length > 0 && files.map((img,index)=> (
            <div  key={index} >
                <div className="w-1/12 cursor-pointer position-absolute px-2 bg-white text-black rounded-full top-5 right-0 text-center" onClick={()=>removeImg(index)}>x</div>
                <Image 
                  src={URL.createObjectURL(img)}
                  width={250}
                  height={250}
                  alt="uploaded img"
                />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
