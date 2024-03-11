/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DELETE } from '../api/tasks/[id]/route'

const NewPage = () => {
  const router = useRouter()
  const params = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title)
          setDescription(data.description)
        })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    router.push('/')
    router.refresh()
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className='p-10 bg-slate-800 w-96 '>
        <label htmlFor='title' className='text-sm font-bold'>
          Title of tha task
        </label>
        <input
          type='text'
          id='title'
          className='w-full p-2 mb-4 font-medium text-black border border-gray-400'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor='description'>Description of the task</label>
        <textarea
          id='description'
          rows='3'
          className='w-full p-2 mb-4 font-medium text-black border border-gray-400'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className='flex justify-between'>
          <button
            className='px-4 py-2 font-bold text-white rounded bg-sky-500 hover:bg-sky-900'
            type='submit'
          >
            Crear
          </button>

          {params.id && (
            <button
              className='px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-900'
              type='button'
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: 'DELETE',
                })
                router.push('/')
                router.refresh()
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewPage
