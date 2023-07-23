import Image from 'next/image'

export const metadata = {
  title: "Olga's Birthday-a-pa-looza",
  description: "Olga's Birthday-a-pa-looza",
}

export default function Olga() {
  return (
    <main style={{ color: "black", backgroundImage: "url('/images/cactus_party.jpg')", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", paddingTop: "2rem", paddingLeft: "5rem", paddingRight: "5rem", textAlign: "center", alignItems: "center" }}>
        <div style={{ width: "75px", height: "75px", position: "relative" }}><iframe src="https://giphy.com/embed/3oriNN5kkARo7ZAhuE" width="100%" height="100%" style={{border: 0}}></iframe></div>
        <h1>You&apos;re invited to Olga&apos;s Prickin&apos; Awesome<br />Birthday-a-pa-looza!</h1>
        <Image src={"/images/olga.jpg"} width={140} height={140} alt="olga party" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h2 style={{ marginTop: "10px" }}>When</h2>
            <p>August 12, 2023 @ 1pm <i>sharp</i></p>
            <h2 style={{ marginTop: "10px" }}>Where</h2>
            <p>5206 E Sierra Sunset Trl<br /> Cave Creek, AZ 85331</p>
            <p>Gate Code #0506</p>
          </div>
        </div>
        <h2 style={{ marginTop: "10px" }}>Getting to the <i>point</i>...</h2>
        <p>
          We will be playing games inside and out. 
        </p>
        <p>
          There will be food and drinks.
        </p>
        <p>
          Wear or bring your swimming suits if you&apos;d like to swim. 
        </p>
        <h3 style={{ marginTop: "10px" }}>
          Please RSVP using this form <br/>by August 5th
        </h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdO_UfS-75tJLNSXYEJuByM_idwnHjr3HICbFRhxgT3K00lug/viewform?embedded=true" 
          height="1100"
          style={{maxWidth: "450px", border: 0}} 
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}