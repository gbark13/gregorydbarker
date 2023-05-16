import Image from 'next/image'

export const metadata = {
  title: "Bella's 5th Birthday Invitation",
  description: "Bella's 5th Birthday Invitation",
}

export default function Bella() {
  return (
    <main style={{ color: "black", backgroundImage: "url('/images/seamless_pattern_with_bees_and_flowers_small.jpeg')" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", backgroundColor: "rgba(225, 225, 225, 0.7)", padding: "2rem" }}>
        <h1>Here is the <i>buzz</i> on Bella&apos;s 5th Birthday Party</h1>
        <Image src={"/images/pool.jpg"} width={300} height={140} alt="pool party" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h2 style={{ marginTop: "10px" }}>When to <i>bee</i></h2>
            <p>June 10, 2023 @ 1pm</p>
            <h2 style={{ marginTop: "10px" }}>Where to <i>bee</i></h2>
            <p>5206 E Sierra Sunset Trl, Cave Creek, AZ 85331 Gate Code #0506</p>
          </div>
          <div>
            <Image src={"/images/bee.gif"} width={130} height={130} alt="bee" />
          </div>
        </div>
        <h2 style={{ marginTop: "10px" }}>No <i>honey</i> business, just fun for the kids</h2>
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
          Please RSVP using this form <br/>by June 1st
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