import Link from "next/link"



function App() {
  return (
    <>
    <div className="flex justify-center gap-10 mt-2 text-2xl">
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/contact'}>Contact</Link>
    </div>
    </>
  )
}

export default App