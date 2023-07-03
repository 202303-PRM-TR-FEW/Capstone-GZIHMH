import Image from 'next/image';
import Page from './courses/page'

export default function Intro() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      
      <div>
        <div>
          {/* <h1>this is a font test</h1> */}
          <Page/>
        </div>
        <div>

        </div>
      </div>
    </main>
  )
}
