'use client'

import Link from "next/link";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import '../scroll/style.css'

export default function Scroll() {
  return (
    <div 
    className="justify-center items-center mx-auto px-12"
    style={{ height: '300vh' }}> {/* 스크롤을 위해 충분한 높이 제공 */}
      <Scrollytelling.Root>
        <Scrollytelling.Pin childHeight={100} pinSpacerHeight={'100vh'} top={0}>
          <section className="section">
            <div className="wrapper itmes-center">
              <h1>Layered pinning 1</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin childHeight={100} pinSpacerHeight={'100vh'} top={0}>
          <section className="section orange">
            <div className="wrapper">
              <h1>Layered pinning 2</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin childHeight={100} pinSpacerHeight={'100vh'} top={0}>
          <section className="section">
            <div className="wrapper">
              <h1>Layered pinning 3</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin childHeight={100} pinSpacerHeight={'100vh'} top={0}>
          <section className="section orange">
            <div className="wrapper">
              <h1>Layered pinning 4</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin childHeight={100} pinSpacerHeight={'100vh'} top={0}>
          <section className="items-center justify-center flex flex-col min-h-screen bg-white">
            <div className="wrapper">
              <Link href="/">
                <h1>
                  Home
                </h1>
              </Link>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </div>
  )
}