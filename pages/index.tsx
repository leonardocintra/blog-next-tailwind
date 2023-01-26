import { Inter } from '@next/font/google'
import LayoutFormat from '../layout/format'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutFormat>
      <h1>Ronaldo</h1>
    </LayoutFormat>
  )
}
