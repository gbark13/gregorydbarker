import Image from 'next/image'
import styles from './page.module.css'

export default function Bella() {
  return (
    <main style={{ color: "black", backgroundImage: "url('/seamless_pattern_with_bees_and_flowers_small.jpeg')" }}>
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: "rgba(225, 225, 225, 0.7)", padding: "2rem" }}>
        <h1>Here is the <i>buzz</i> on Bella&apos;s 5th Birthday Party</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h2 style={{ marginTop: "10px" }}>When to <i>bee</i></h2>
            <p>June 10, 2023 @ 1pm</p>
            <h2 style={{ marginTop: "10px" }}>Where to <i>bee</i></h2>
            <p>5206 E Sierra Sunset Trl, Cave Creek, AZ 85331</p>
          </div>
          <div>
            <Image src={"/bee.gif"} width={130} height={130} />
          </div>
        </div>
        <h2 style={{ marginTop: "10px" }}>No <i>honey</i> business, just fun for the kids</h2>
        <p>
          There will be swimming and some outdoor organized games for the kids.
        </p>
        <p>
          No set meal time, however food and beverages for the kids will be available throughout the party for when they need to recharge.
        </p>
        <p>
          Adult refreshments will be provided.
        </p>
        <h3 style={{ marginTop: "10px" }}>
          Please RSVP using this form <br/>by June 1st
        </h3>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdzcNCC_mNKL6ax4Yj8MOeRz_qJae0Ra-dxZ-jDs4lfJtOdZg/viewform?embedded=true"
          // width="440" 
          height="694"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}