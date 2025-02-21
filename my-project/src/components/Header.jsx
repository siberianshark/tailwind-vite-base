// src/components/Header.jsx
import 'react'

const Header = () => {
  return (
    <header className="bg-white dark:bg-darkBackground text-zinc dark:text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My Store</div>
      <nav>
        <ul className="flex space-x-6 justify-between items-center">
          <li><a href="#" className="hover:text-neonGreen">Home</a></li>
          <li><a href="#" className="hover:text-neonGreen">Catalog</a></li>
          <li><a href="#" className="hover:text-neonGreen">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
