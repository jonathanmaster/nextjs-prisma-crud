'use client'
import { useRouter } from 'next/navigation'

const TasksCard = ({ task }) => {
  const router = useRouter()
  return (
    <div
      className='p-5 bg-sky-900 hover:bg-slate-800 hover:cursor-pointer'
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`)
      }}
    >
      <h3 className='mb-2 text-xl font-bold'>{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TasksCard
