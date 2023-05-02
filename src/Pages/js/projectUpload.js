import React,{useState} from 'react'
import axios from 'axios'

function ProjectUpload() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [redirect,setRedirect] = useState('')
    const [image,setImage] = useState('')

    const submitHandler = async (e) => {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("redirect_url", redirect)
        formData.append("project_img", image)
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/v1/project/create',formData)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='project-wrapper'>

    <form onSubmit={(e)=>submitHandler(e)} className='project-form' encType="multipart/form-data" >
        <input type="text" placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='enter description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <input type="text" placeholder='enter redirect url' value={redirect} onChange={(e)=>setRedirect(e.target.value)} />
        <input name='project_img'
          onChange={e => setImage(e.target.files[0])} 
          type="file" 
          accept="image/*" />
        <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default ProjectUpload;