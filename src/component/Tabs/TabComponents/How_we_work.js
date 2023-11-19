import React from "react";

const How_we_work = () => {
  return (
    <div>
      <div class=" flex flex-col md:flex-row md:gap-[5%] w-[100%] h-[100%]">
        <div class="col-lg-7 col-12 w-[100%] h-[200%]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width={"100%"}
          ></iframe>
        </div>

        <div class="">
          <div class="">
            <h4 class="mb-3">Life at Studio</h4>

            <p>
              Over three years in business, We’ve had the chance to work on a
              variety of projects, with companies
            </p>

            <p>Custom work is branding, web design, UI/UX design</p>

            <div class="mt-2 mt-lg-auto">
              <a href="contact.html" class="custom-link mb-2">
                Work with us
                <i class="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How_we_work;
