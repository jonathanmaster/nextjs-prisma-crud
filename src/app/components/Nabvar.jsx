import Link from 'next/link'

const Nabvar = () => {
  return (
    <nav className='flex justify-between p-3  bg-sky-900'>
      <h3 className='text-xl font-bold'>
        <Link href={'/'}>Next Crud</Link>
      </h3>
      <ul className='flex mr-2 gap-x-2'>
        <li className='hover:text-sky-500'>
          <Link href={'/new'}>New</Link>
        </li>

        <li className='hover:text-sky-500'>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nabvar
