import React from "react";

const Footer = () => {
  return (
    <div className="row m-0 bg-dark ">
      <div class="d-flex align-items-start mt-2">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            ABOUT US
          </button>
          <button
            class="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            COMPANY PROFILE
          </button>
          <button
            class="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            CAREERS
          </button>
          <button
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            HELP & SUPPORT
          </button>
        </div>
        <div class="tab-content mt-2 text-white " id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            Zoomcar is the leading marketplace for car sharing in emerging
            markets,with over 20,000 cars on its technology-driven platform
            across India, Indonesia, and Egypt. Zoomcar empowers host
            entrepreneurs to safely and easily share their cars to earn
            additional passive income. Guests in the Zoomcar community enjoy a
            diverse, affordable selection of cars to unlock memorable driving
            experiences with friends and family. Founded in 2013 and
            headquartered in Bengaluru, India, Zoomcar employs over 250 people
            and operates in over 45 cities across India, Indonesia, and Egypt.
            Uri Levine, the co-founder of mobility unicorns Waze and Moovit,
            currently serves as Zoomcar's Chairman of the Board. Welcome to the
            Silicon Valley of India, where innovation meets tradition—Bangalore.
            The bustling streets, cultural hubs, and green spaces beckon
            exploration. In a city like this, the need for rental car services
            in Bangalore becomes essential to explore at your own pace and
            convenience.
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            Find more information about press releases here Find more
            information about investor relations here Find more information
            about Zoomcar leadership team here
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            Find more information about Zoomcar Careers here
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            Find more information about Zoomcar Help and Support here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
