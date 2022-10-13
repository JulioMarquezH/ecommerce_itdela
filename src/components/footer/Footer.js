import React from "react"
import FooterBrand from "./footerBrand/FooterBrand"
import FooterCahs from "./footerCahs/FooterCahs"
import FooterCategory from "./footerCategory/FooterCategory"
import FooterNetworks from "./footerNetworks/FooterNetworks"
import FooterResponsive from "./footerResponsive/FooterResponsive"
import "./styles-footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer">
        <FooterResponsive />
        <FooterNetworks />
        <FooterCategory />
        <FooterBrand />
        <FooterCahs />
      </div>
      <aside>
        <p>Copyright © ITDELA. 2022. All rights reserved.</p>
      </aside>
    </footer>
  )
}

export default Footer
