
import Link from "next/link"
import Btn from "./components/Btn"



function App() {
  console.log('checking server ')
  return (
    <>
    
    <div className="flex justify-center gap-10 mt-2 text-2xl">
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/contact'}>Contact</Link>
    </div>
    <Btn/>
    </>
  )
}

export default App