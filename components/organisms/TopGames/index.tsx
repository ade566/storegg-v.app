import Game from "@/components/molecules/Game";


export default function TopGames() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
            
          <Game title="Super Mechs" category="Mobile" image="/img/Thumbnail-1.png" href="/detail/1" />

          <Game title="Call of Duty: Modern" category="Mobile" image="/img/Thumbnail-2.png" href="/detail/2" />

          <Game title="Mobile Legends" category="Mobile" image="/img/Thumbnail-3.png" href="/detail/3" />
          
          <Game title="Clash of Clans" category="Mobile" image="/img/Thumbnail-4.png" href="/detail/4" />
          
          <Game title="Valorant" category="Mobile" image="/img/Thumbnail-5.png" href="/detail/5" />
 
        </div>
      </div>
    </section>
  )
}