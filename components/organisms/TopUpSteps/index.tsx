import Step from "./Step";

export default function TopUpSteps() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <div className="col-lg-4">
            <Step title="1. Start" description="Pilih salah satu game yang ingin kamu top up" image="/img/steps/1.svg" />
          </div>
          <div className="col-lg-4">
            <Step title="2. Fill Up" description="Top up sesuai dengan nominal yang sudah tersedia" image="/img/steps/2.svg" />
          </div>
          <div className="col-lg-4">
            <Step title="3. Be a Winner" description="Siap digunakan untuk improve permainan kamu" image="/img/steps/3.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}