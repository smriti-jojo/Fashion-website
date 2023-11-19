import React from "react";
import pim_chu from "../../../images/pim-chu-z6NZ76_UTDI-unsplash.jpeg";

const Introduction = () => {
  return (
    <div>
      <div class=" flex flex-col sm:flex-row sm:gap-[5%] w-[100%]">
        <div class="col-lg-7 col-12">
          <img src={pim_chu} class="img-fluid" alt="" />
        </div>

        <div class="col-lg-5 col-12">
          <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
            <h4 class="mb-3">
              Good <span>Design</span> <br></br>Ideas for <span>your</span>{" "}
              fashion
            </h4>

            <p>
              Little Fashion templates comes with{" "}
              <a href="sign-in.html">sign in</a> /{" "}
              <a href="sign-up.html">sign up</a> pages, product listing /
              product detail, about, FAQs, and contact page.
            </p>

            <p>
              Since this HTML template is based on Boostrap 5 CSS library, you
              can feel free to add more components as you need.
            </p>

            <div class="mt-2 mt-lg-auto">
              <a href="about.html" class="custom-link mb-2">
                Learn more about us
                <i class="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
