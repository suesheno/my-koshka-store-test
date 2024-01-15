import { Metadata } from "next"
import Link from "next/link"
import { SpaceCat } from "@/assets/icons"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl-semi text-gry-900">Page not found</h1>
      <p className="text-small-regular text-gray-700">
        The page you tried to access does not exist.
      </p>
        {/*
        <div className='w-36 h-36'>
            <SpaceCat viewBox="0 0 800 950" style={{width:'100%', height:"100%"}} />
        </div>
        */}
      <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
        Go to homepage
      </Link>
    </div>
  )
}
