import CountRow from "./Row";

export default function Count() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">

          <CountRow title="Players Top Up" value="290M+" />

          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>

          <CountRow title="Games Available" value="12.500" styleLeft />

          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>

          <CountRow title="Happy Players" value="99,9%" styleLeft />

          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>

          <CountRow title="Rating Worldwide" value="4.7" styleLeft />

        </div>
      </div>
    </section>
  )
}