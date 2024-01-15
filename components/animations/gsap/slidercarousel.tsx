"use client";

import React, {useState} from "react";
import gsap from 'gsap';
import {Draggable} from 'gsap/all'
import {useGSAP} from "@gsap/react";

import {SliderContainer} from '../comps/slider'

interface Props {
    children:  React.ReactNode;
    swipeDelay?: number;
    swipeDuration?: number;
}

const SliderNav = ({idx}: {idx: number}) => {
    return (
        <div className="flex items-center place-content-center gap-6 -mt-12 h-12 z-50 ">
            <button id="prevButton" type="button"
                    className="flex items-center text-base border-none outline-none text-gray-500 font-semibold !mr-8 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                     className="transition-all fill-gray-500 rotate-90 mr-2" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd" data-original="#000000"></path>
                </svg>
            </button>
            {[...Array(idx)].map(function(object, i){
                return <div key={`stepper-${i}`} id={`stepper-${i}`} className="w-3 h-3 shrink-0 rounded-full bg-gray-200 border-gray-200 border-2 border-opacity-50 z-50" />
            })}
            <button id="nextButton" type="button"
                    className="flex items-center text-base border-none outline-none text-gray-500 font-semibold !ml-8 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                     className="transition-all fill-gray-500 -rotate-90 ml-2" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd" data-original="#000000"></path>
                </svg>
            </button>
        </div>
    )
}


export const Slider = ({children, swipeDelay = 2, swipeDuration = 0.5}: Props) => {
    const [slideCount, setSlideCount] = useState(3)

    useGSAP(() => {
        gsap.registerPlugin(Draggable);

        const slideDelay: number = swipeDelay;
        const slideDuration: number = swipeDuration;
        const wrap: boolean = true;

        const slides: NodeListOf<HTMLElement> = document.querySelectorAll("#slide");
        const prevButton: Element = document.querySelector("#prevButton") as Element;
        const nextButton: Element = document.querySelector("#nextButton") as Element;
        const progressWrap = gsap.utils.wrap(0, 1);

        let currentSlide = 0;
        let previousSlide: number = -1;

        setSlideCount(slides.length);

        gsap.set(slides, {
            xPercent: i => i * 100
        });
        let wrapX = gsap.utils.wrap(-100, (slideCount - 1) * 100);
        let timer: gsap.core.Tween = gsap.delayedCall(slideDelay, autoPlay);

        let animation: gsap.core.Tween = gsap.to(slides, {
            xPercent: "+=" + (slideCount * 100),
            duration: 1,
            ease: "none",
            paused: true,
            repeat: -1,
            modifiers: {
                xPercent: wrapX
            }
        });

        let proxy: HTMLDivElement = document.createElement("div");
        let slideAnimation: gsap.core.Tween = gsap.to({}, {});
        let stepperAnimation: gsap.core.Tween = gsap.to({}, {});
        let slideWidth: number = 0;
        let wrapWidth: number = 0;

        let draggable = new Draggable(proxy, {
            trigger: "#slides-container",
            onPress: updateDraggable,
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            snap: {
                x: snapX
            }
        });

        resize();

        window.addEventListener("resize", resize);

        prevButton.addEventListener("click", function () {
            animateSlides(1);
        });

        nextButton.addEventListener("click", function () {
            animateSlides(-1);
        });

        function updateDraggable() {
            timer.restart(true);
            slideAnimation.kill();
            draggable.update();
        }

        function animateSlides(direction: number) {

            timer.restart(true);
            slideAnimation.kill();
            let p = gsap.getProperty(proxy, "x") as number;
            let x = snapX(p + direction * slideWidth);

            previousSlide = currentSlide
            if ( direction > 0) currentSlide = currentSlide > 0 ? --currentSlide : slideCount - 1
            if ( direction < 0) currentSlide = currentSlide < (slideCount -1) ? ++currentSlide : 0

            stepperAnimation = gsap.to('#stepper-' + previousSlide, {
                clearProps:"all",
                duration: slideDuration / 4
            });
            stepperAnimation = gsap.to('#stepper-' + currentSlide, {
                backgroundColor: '#fff',
                borderColor: '#46B094',
                duration: slideDuration
            });
            slideAnimation = gsap.to(proxy, {
                x: x,
                duration: slideDuration,
                onUpdate: updateProgress
            });
        }

        function autoPlay() {
            if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
                timer.restart(true);
            } else {
                animateSlides(-1);
            }
        }

        function updateProgress() {
            let p = gsap.getProperty(proxy, "x") as number;
            animation.progress(progressWrap(p / wrapWidth));
        }

        function snapX(value: number) {
            let snapped = gsap.utils.snap(slideWidth, value);
            return wrap ? snapped : gsap.utils.clamp(-slideWidth * (slideCount - 1), 0, snapped);
        }

        function resize() {

            let p = gsap.getProperty(proxy, "x") as number;
            let norm = (p / wrapWidth) || 0;

            slideWidth = slides[0].offsetWidth;
            wrapWidth = slideWidth * slideCount;

            wrap || draggable.applyBounds({minX: -slideWidth * (slideCount - 1), maxX: 0});

            gsap.set(proxy, {
                x: norm * wrapWidth
            });

            animateSlides(0);
            slideAnimation.progress(1);
        }

    });
    return (
        <>
        <SliderContainer>
                {children}
        </SliderContainer>
            <SliderNav idx={slideCount} />
        </>
    )
};