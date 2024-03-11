import { prisma } from '@/libs/prisma'
import TasksCard from './components/TasksCard'

async function loadTasks() {
  //obteniendo de la base de datos
  const tasks = await prisma.task.findMany()
  return tasks

  //------------
  // haciendo una peticion http
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()
}

// export const revalidate = 60
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const tasks = await loadTasks()

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}
