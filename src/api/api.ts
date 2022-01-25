import axios from "axios";

const instance = axios.create({
   baseURL: 'https://prof.world/api/'
});

export const api = {
   getFiles() {
      return instance.get<ResponseType<FilesType>>(`test_json_files/?token=6a06cc0050374e32be51125978904bd8`).then(res => res.data.data)
   }
}

export type FileType = {
   name: string, 
   type: string,
   size: number,
   atime: number,
   mtime: number,
   dev: number
}

export type SortKeysType = keyof FileType

export type FilesType = {
   files: {
      Folder1: FileType[]
      Folder2: FileType[]
      Folder3: FileType[]
   }
}

export type ResponseType<T> = {
   ok: number,
   data: T
}

export type StatusType = {
   isFetching: boolean
   message: string | null
}