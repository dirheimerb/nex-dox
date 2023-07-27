import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-4">
        <SearchDialog />
        <div className="flex items-center justify-center space-x-4">
          <div className="opacity-75 transition hover:opacity-100 cursor-pointer"></div>
        </div>
      </div>
    </main>
  )
}
