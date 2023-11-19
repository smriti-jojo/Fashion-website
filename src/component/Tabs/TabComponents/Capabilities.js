import React from "react";
import cody_lannom from "../../../images/cody-lannom-G95AReIh_Ko-unsplash.jpeg";

const Capabilities = () => {
  return (
    <div>
      <div class=" flex flex-col md:flex-row md:gap-[5%]">
        <div class="col-lg-7 col-12">
          <img src={cody_lannom} class="img-fluid" alt="" />
        </div>

        <div class="col-lg-5 col-12">
          <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
            <h4 class="mb-3">What can help you?</h4>

            <p>
              Over three years in business, We’ve had the chance on projects
            </p>

            <div class="skill-thumb mt-3">
              <div className="flex justify-between ml-[13%]">
                <strong>Branding</strong>
                <span class="float-end">90%</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    sx={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between">
                <strong>Design & Stragety</strong>
                <span class="float-end">70%</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    sx={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between ml-[5%]">
                <strong>Online Platform</strong>
                <span class="float-end">80%</span>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    sx={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div class="mt-2 mt-lg-auto">
              <a href="products.html" class="custom-link mb-2">
                Explore products
                <i class="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
