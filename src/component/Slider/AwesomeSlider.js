import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import team_meeting from "../../images/slideshow/team-meeting-renewable-energy-project.jpeg";
import medium_shot_women from "../../images/slideshow/medium-shot-business-women-high-five.jpeg";
import two_business_partners from "../../images/slideshow/two-business-partners-working-together-office-computer.jpeg";
import { Button } from "@mui/material";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (props) => {
  return (
    <AutoplaySlider
      cancelOnInteraction={false}
      interval={3000}
      play={true}
      // animation="fallAnimation"
      className="!h-[700px] "

      // sx={{ height: "50px" }}
    >
      <div
        data-src={two_business_partners}
        className="h-[700px] relative w-full "
      >
        <div className="absolute top-[250px] left-[100px] ">
          <h1 className="text-white">Cool Fashion</h1>
          <p className="text-white">
            Little fashion template comes with total 8 HTML pages provided by
            Tooplate website.
          </p>
          <Button
            className=" !bg-black !rounded-2xl !py-2 mt-[1rem]"
            variant="contained"
          >
            Learn more about us
          </Button>
        </div>
      </div>
      <div data-src={medium_shot_women} className="h-[700px]" />
      <div data-src={team_meeting} className="h-[700px]" />
      {/* <div data-src={sliderPage4} className="h-[300px]" /> */}
    </AutoplaySlider>
  );
};
export default Slider;
