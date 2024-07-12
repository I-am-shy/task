import Link from "next/link"

export default function () {
  
  return(
    <div className="flex space-x-4">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/more">more</Link>
      <hr />
    </div>
  )
}