import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addLook, uploadImage, addToWardrobe } from '../../api/apiService';
import Spinner from '../Spinner/Spinner';
import SuccessModal from '../SucessModal/SucessModal';

interface FormData {
  type: string;
  category: string;
  tags?: string;
  description: string;
  imageUrl: File;
}


export default function Modal() {
  const { register, handleSubmit, formState: { errors, isSubmitted, isSubmitting }, reset } = useForm<FormData>();
  const [file, setFile] = useState<any>();

  const onSubmit = async (data: FormData) => {
    const { type, category, tags, description } = data;
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'looks');
      // Upload image to GCP and get the URL
      const { url } = await uploadImage(formData);
      const item = {
        description: description,
        category: category,
        tags: tags,
        imageUrl: url,
        likes: 0,
      }
      if (type === 'Look') {
        await addLook(item);
      } else {
        await addToWardrobe(item);
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
    setFile(selectedFile);
    }
  }

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center font-bold text-gray-700'>Publish</h1>
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                <select {...register("type")} id="type" className="select w-full max-w-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                  <option selected>Item</option>
                  <option>Look</option>
                </select>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                  <input type="text" id="category" {...register("category", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  {errors.category && <p className="text-red-500 text-xs italic">Category is required.</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags</label>
                  <input type="text" id="tags" {...register("tags")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                  <textarea id="description" {...register("description", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                  {errors.description && <p className="text-red-500 text-xs italic">Description is required.</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2"></label>
                  <input type="file" id="imageUrl" {...register("imageUrl", { required: true })} onChange={handleFileChange} className="file-input w-full max-w-xs" />
                  {errors.description && <p className="text-red-500 text-xs italic">Image is required.</p>}
                </div>
                <div className="flex items-center justify-center p-10">
                {isSubmitting ? <Spinner /> : 
                <button type="submit" className="btn btn-wide mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               }
                </div>
              </form>
            </label>
          </label>
        </div>) : 
        (<SuccessModal />)}
    </div>
  )
};

