import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";

const urls = [
  "/ditosMain.jpg",
  "/ditosMain.jpg",
  "/ditosMain.jpg",
  "/ditosMain.jpg",
  "/ditosMain.jpg",
];

export default function ImageSlider() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: {
        perView: isSmallScreen ? 1 : 2,
        spacing: isSmallScreen ? 0 : 15,
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 400);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 500);
  }, []);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        className="navigation-wrapper"
        sx={{ height: "100%", width: "100%" }}
      >
        {
          <Box
            ref={sliderRef}
            className="keen-slider"
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            {urls.map((url, index) => {
              return (
                <Box className="keen-slider__slide number-slide1" key={index}>
                  <Image
                    src={url}
                    alt="image"
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Box>
              );
            })}
          </Box>
        }
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </Box>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(
              instanceRef.current.track.details.slides.length - 1
            ).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </Box>
  );
}

function Arrow(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
