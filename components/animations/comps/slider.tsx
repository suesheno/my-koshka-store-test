import React from "react";

interface Props {
    children:  React.ReactNode;
}
export const SliderContainer = ({ children }: Props) => {
    return (
        <div className='flex relative flex-col w-full h-full'>
            <div id='slides-container' className="flex flex-1 relative overflow-hidden">
                <div className="relative overflow-hidden w-full h-full">
                    { children }
                </div>
            </div>
        </div>
    )
}

export const Slide = ({ children }: Props) => {
    return  <div id="slide" className="flex absolute items-center justify-center h-full w-full">{ children }</div>
}