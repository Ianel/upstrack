import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { profileAvatar, profilePicture, smiley } from "../assets/images";

const Hero = () => {
    return (
        <section className="px-14 bg-[#F0EFE9] h-full flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-4">
                <p>- More than 1000 User Active every day</p>
                <h2 className="text-3xl md:text-5xl font-bold pt-8 md:leading-[4rem]">
                    A New Place to Discover Collect and Sell Easily Your Product{" "}
                </h2>
                <p className="py-8 text-tertiary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam vitae, tenetur ex numquam, autem expedita quae
                    tempore, modi hic quasi adipisci qui laudantium dolor
                    explicabo aliquid dicta mollitia delectus asperiores!
                </p>
                <button className="flex flex-row justify-between items-center gap-x-2 text-white bg-primary px-4 py-2">
                    <span>Create your own</span>
                    <span>
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:pl-4 w-full mt-8 lg:relative">
                <div className="lg:absolute lg:-top-60">
                    <section className="bg-white p-4 w-64 2xl:w-72 h-16 flex flex-row justify-start items-center gap-x-4 rounded-sm">
                        <img
                            src={profileAvatar}
                            className="w-9 h-9 rounded-full object-cover"
                            alt="Avatar"
                        />
                        <div>
                            <p className="font-bold text-sm">Carla Bertine</p>
                            <p className="text-tertiary text-xs">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </section>
                    <section className="bg-white rounded-sm p-4 w-64 2xl:w-72 my-4">
                        <p className="font-bold text-sm">Branch Analytics</p>
                        <div className="flex flex-row items-center gap-x-2">
                            <span className="text-xs text-tertiary mt-2">
                                Engagement
                            </span>
                            <div className="relative">
                                <p className="w-10 h-2 rounded-sm bg-primary absolute top-0 z-10"></p>
                                <p className="w-32 h-2 rounded-sm bg-[#F6F6F6] absolute top-0"></p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <span className="text-xs text-tertiary mt-2">
                                Impression
                            </span>
                            <div className="relative ml-[0.6rem]">
                                <p className="w-16 h-2 rounded-sm bg-secondary absolute top-0 righ z-10"></p>
                                <p className="w-32 h-2 rounded-sm bg-[#F6F6F6] absolute top-0"></p>
                            </div>
                        </div>
                    </section>
                </div>
                <img
                    src={profilePicture}
                    className="object-cover lg:absolute 2xl:w-4/5 lg:right-0 lg:-top-40"
                    alt="Woman Photo"
                />
                <div className="lg:absolute lg:top-40 2xl:top-72 lg:right-0 bg-secondary text-white w-64 p-4 flex flex-row justify-between items-center">
                    <div>
                        <p className="text-sm font-bold">Our Digital</p>
                        <p className="text-xs">Marketing Expertise</p>
                    </div>
                    <img
                        className="object-cover w-5"
                        src={smiley}
                        alt="Smiley"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
