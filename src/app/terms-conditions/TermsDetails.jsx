import termConditionImg from '../../assets/images/terms-conditions-image.png'
import ulStartImg from "../../assets/images/ul-star.svg";
import Image from 'next/image'
import React from 'react'

const TermsDetails = () => {
  return (
    <>  <div className="container">
    <div className="conditions-image">
      <Image
        src={termConditionImg}
        alt=""
        height = "100%"
        width = "100%"
        // style="height: 100%; width: 100%"
      /> 
    </div>
    <div className="conditions-detail-text mt-5">
      {/* <!-- Delivery of Product Section --> */}
      <p className="mb-0 product-para blur-text">
        Welcome to www.emaadinfotech.com. This website is developed, owned
        and operated by Emaad Infotech and may be utilized for informational
        purposes only. By using our site or downloading any content from the
        site, you accept the terms and conditions written in this notice &
        also provided by E-mail which is sent to you once confirm to start
        project with us. If you do not agree with these terms and conditions
        please do not use the website or download any content from our
        website. We hold rights to change or modify any of Terms &
        Conditions anytime without prior notice to users. This site is the
        property of Emaad Infotech and is copyrighted and protected by
        worldwide copyright laws. You agree to obey all copyright laws
        worldwide in use of our website and to prevent any unauthorized
        copying of the texts/images. You can not copyright the script
        purchased from Emaad Infotech, unless you changed it fully or whole
        design part of the website.
      </p>
      <p className="mb-0 mt_30 product-para blur-text">
        Emaad Infotech does not violate rights under any patents, trademarks
        or copyrights. If by mistake any texts / images / copyrighted
        materials belong to you, kindly write to us about violation of
        rights and we will delete it immediately.
      </p>
      <div className="product-section">
        <div className="section">
          <div className="section-title">
            <Image
              src={ulStartImg}
              height='100%'
              width='100%'
              alt="Delivery Icon"
              className="section-icon"
            />
            <h3 className="mb-0">Delivery of Product</h3>
          </div>
          <p className="mb-0 blur-text">
            If the payment is made during weekdays (i.e. Monday to Friday)
            Between 10 AM to 6 PM IST, the product will handover within 24
            hours. If payment is made during weekends (i.e. Saturday &
            Sunday) or during any Indian National Holidays, the same will be
            delivered within 48 hours of payment.
          </p>
        </div>

        {/* <!-- Limited License Section --> */}
        <div className="section">
            <div className="section-title">
              <Image
              src={ulStartImg}
                alt="License Icon"
                className="section-icon"
              />
              <h3 className="mb-0">Limited License</h3>
            </div>
            <p className="mb-0 blur-text">
              Subject to the terms and conditions & rules set in these Terms
              of Use. You agree not to interfere or try to interfere with the
              content or operation of the site in any way.
            </p>
            <ol className="decimal-list  mt_25 blur-text">
              <li>
                The sold script, which is issued to a designated user, enables
                such designated user to install and use script only as single
                domain.
              </li>
              <li>
                We are not responsible for any damages including any general,
                special, incidental damages arising out of the changes done by
                other companies or developers or hackers or by any means to
                the code or arising out of the faulty use or inability to use
                the program.
              </li>
              <li>
                We reserve rights to provide only encrypted code in some
                cases.
              </li>
              <li>We can deliver only source code as per deal.</li>
              <li>
                We may place visible/non-visible link to Emaad Infotech in
                www.emaadinfotech.com in footer as per deal which you can
                remove after purchasing the script.
              </li>
            </ol>
          </div>
        {/* <!-- No Warranties Section --> */}
        <div className="section">
          <div className="section-title">
            <Image
              src={ulStartImg}
              alt="Warranty Icon"
              className="section-icon"
            />
            <h3 className="mb-0">No Warranties</h3>
          </div>
          <p className="mb-0 blur-text">
            This site, the provided information and content on the site, and
            any software made available on the site, are provided "as it is"
            without any representation or warranty. As much as possible we
            provide security to our site but there is also no warranty that
            this site will be free of any computer viruses/bugs. We are not
            where responsible for loss of information or programs or other
            important data on your information handling machine/system.
          </p>
        </div>

        {/* <!-- Permit To Use Section --> */}
       
      </div>
    </div>
  </div></>
  )
}

export default TermsDetails