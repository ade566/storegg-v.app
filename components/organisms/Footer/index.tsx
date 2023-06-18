import FooterAboutUs from "./AboutUs"
import FooterUrl from "./Url"

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <FooterAboutUs />
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                  <ul className="list-unstyled">
                    <FooterUrl title="About Us" href="/" />
                    <FooterUrl title="Press Release" href="/" />
                    <FooterUrl title="Terms of Use" href="/" />
                    <FooterUrl title="Privacy & Policy" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                  <ul className="list-unstyled">
                    <FooterUrl title="Refund Policy" href="/" />
                    <FooterUrl title="Unlock Rewards" href="/" />
                    <FooterUrl title="Live Chatting" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                  <ul className="list-unstyled">
                    <FooterUrl title="hi@store.gg" href="mailto: hi@store.gg" outLink />
                    <FooterUrl title="team@store.gg" href="mailto: team@store.gg" outLink />
                    <FooterUrl title="Pasific 12, Jakarta Selata" href="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" outLink />
                    <FooterUrl title="021 - 1122 - 9090" href="tel: 02111229090" outLink />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}