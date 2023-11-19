import React from "react";
import Navbar from "../component/NavBar/Navbar";
import Slider from "../component/Slider/AwesomeSlider";
import "../css/slick.css";
import "../css/tooplate-little-fashion.css";
import Tabs from "../component/Tabs/Tabs";
import Introduction from "../component/Tabs/TabComponents/Introduction";
import How_we_work from "../component/Tabs/TabComponents/How_we_work";
import Capabilities from "../component/Tabs/TabComponents/Capabilities";
import retail_shop from "../images/retail-shop-owner-mask-social-distancing-shopping.jpg";
import Card from "../component/Card/Card";
import evan_mcdougall from "../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import jordan from "../images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import nature_zen from "../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import team_meeting from "../images/slideshow/team-meeting-renewable-energy-project.jpeg";
import medium_shot_women from "../images/slideshow/medium-shot-business-women-high-five.jpeg";
import two_business_partners from "../images/slideshow/two-business-partners-working-together-office-computer.jpeg";

const Home = () => {
  const tabValue = [
    { index: 0, title: "Introduction", component: <Introduction /> },
    { index: 1, title: "How We Work", component: <How_we_work /> },
    { index: 2, title: "Capabilites", component: <Capabilities /> },
  ];

  const CardValue = [
    {
      title: "Fashion Set",
      info: "Custome Package",
      price: "$35",
      image_src: jordan,
      alert: "Low Price",
    },
    {
      title: "Juice Drinks",
      info: "Nature Made Another World",
      price: "$45",
      image_src: nature_zen,
      alert: "high price",
    },
    {
      title: "Tree Pot",
      info: "Original Package Designed by Home",
      price: "$45",
      image_src: nature_zen,
    },
  ];

  const SliderValue = [
    {
      title: "Cool Fashion",
      info: "Little fashion template comes with total 8 HTML pages provided by Tooplate website.",
      button_info: "Learn more about us",
      image: two_business_partners,
    },
    {
      image: medium_shot_women,
    },
    { image: team_meeting },
  ];

  useEffect(() => {
    console.log("CardValue", CardValue);
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-[4rem]">
        <Slider />
      </div>

      {/* <section className="flex justify-center">
        <h1 className="my-5 mt-">
          Get Started With <span className="#FFA500">Little </span> Fashion
        </h1>
      </section> */}
      <section class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="mb-5">
                Get started with <span>Little</span> Fashion
              </h2>
            </div>
            <Tabs tabValue={tabValue} />
          </div>
        </div>
      </section>
      <section class="front-product">
        <div>
          <div class="container-fluid p-0">
            <div class="flex flex-col md:gap-[5%] md:flex-row">
              <div class="col-lg-6 col-12">
                <img src={retail_shop} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-6 col-12">
                <div class="px-5 py-5 py-lg-0">
                  <h2 class="mb-4">
                    <span>Retail</span> shop owners
                  </h2>

                  <p class="lead mb-4">
                    Credits go to Unsplash and FreePik websites for images used
                    in this Little Fashion by Tooplate.
                  </p>

                  <a href="products.html" class="custom-link">
                    Explore Products
                    <i class="bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="featured-product section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="mb-5">Featured Products</h2>
            </div>

            <div className="flex justify-center flex-wrap gap-5 p-4 ml-[3rem] sm:ml-0 ">
              {CardValue.map((item) => (
                <div>
                  <Card
                    image_src={item.image_src}
                    alert={item.alert}
                    info={item.info}
                    price={item.price}
                    title={item.title}
                  />
                </div>
              ))}
            </div>

            <div class="col-12 text-center">
              <a href="products.html" class="view-all">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer class="site-footer">
        <div class="container">
          <div class="flex justify-around ">
            <div class="mr-3 sm:mr-0">
              <h4 class="text-white mb-3">
                <a href="index.html">Little</a> Fashion
              </h4>
              <p class="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
                Copyright © 2022 <strong>Little Fashion</strong>
              </p>
              <br></br>
              <p class="copyright-text">
                Designed by{" "}
                <a href="https://www.tooplate.com/" target="_blank">
                  Tooplate
                </a>
              </p>
            </div>

            <div class=" ">
              <h5 class="text-white mb-3 mr-3 sm:mr-0">Sitemap</h5>

              <ul class="flex flex-col sm:flex-row sm:gap-[5%] ">
                <div className="flex-col">
                  <li class="footer-menu-item">
                    <a href="about.html" class="footer-menu-link">
                      Story
                    </a>
                  </li>
                  <li class="footer-menu-item">
                    <a href="#" class="footer-menu-link">
                      Contact
                    </a>
                  </li>

                  <li class="footer-menu-item">
                    <a href="#" class="footer-menu-link">
                      Privacy policy
                    </a>
                  </li>
                </div>
                <div className="flex-col">
                  <li class="footer-menu-item">
                    <a href="#" class="footer-menu-link">
                      FAQs
                    </a>
                  </li>
                  <li class="footer-menu-item">
                    <a href="#" class="footer-menu-link">
                      Products
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div class="col-lg-3 col-4">
              <h5 class="text-white mb-3">Social</h5>

              <ul class="social-icon">
                <li>
                  <a href="#" class="social-icon-link bi-youtube">
                    <FacebookIcon />
                  </a>
                </li>

                <li>
                  <a href="#" class="social-icon-link bi-whatsapp">
                    <InstagramIcon />
                  </a>
                </li>

                <li>
                  <a href="#" class="social-icon-link bi-instagram">
                    <YouTubeIcon />
                  </a>
                </li>

                {/* <li>
                  <a href="#" class="social-icon-link bi-skype"></a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
