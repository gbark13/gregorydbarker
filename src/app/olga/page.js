import Image from 'next/image'

export const metadata = {
  title: "Olga's Birthday-a-pa-looza",
  description: "Olga's Birthday-a-pa-looza",
}

export default function Olga() {
  return (
    <main style={{ color: "black", backgroundImage: "url('/images/cactus_party.jpg')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", paddingTop: "2rem", paddingLeft: "5rem", paddingRight: "5rem", textAlign: "center", alignItems: "center" }}>
        <h1>You&apos;re invited to Olga&apos;s Prickin&apos; Awesome<br />Birthday-a-pa-looza!</h1>
        <Image src={"/images/olga.jpg"} width={150} height={140} alt="olga party" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h2 style={{ marginTop: "10px" }}>When</h2>
            <p>June 10, 2023 @ 1pm <i>sharp</i></p>
            <h2 style={{ marginTop: "10px" }}>Where</h2>
            <p>5206 E Sierra Sunset Trl<br /> Cave Creek, AZ 85331</p>
            <p>Gate Code #0506</p>
          </div>
        </div>
        <h2 style={{ marginTop: "10px" }}>Getting to the <i>point</i>...</h2>
        <p>
          There will be swimming and some outdoor organized games for the kids. We suggest you bring swimsuits, towels, goggles, floatation devices, sunscreen, sunglasses and/or hats for everyone who plans to get in the pool.
        </p>
        <p>
          No set meal time, however food and beverages for the kids will be available throughout the party for when they need to recharge.
        </p>
        <p>
          Adult refreshments will be provided.
        </p>
        <h3 style={{ marginTop: "10px" }}>
          Please RSVP using this form <br/>by August 1st
        </h3>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdzcNCC_mNKL6ax4Yj8MOeRz_qJae0Ra-dxZ-jDs4lfJtOdZg/viewform?embedded=true"
          // width="440" 
          height="700"
          style={{maxWidth: "450px", border: 0}}
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}