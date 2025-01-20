import React from "react";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicText,
} from "@prismicio/react";
import Image from "next/image";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import StarBackground from "./StarBackground";
import StylizedLogoMark from "./StylizedLogoMark";
import Bounded from "@/app/components/Bounded";
import background from "./background.jpg";

/**
 * Props for `Integration`.
 */
export type IntegrationProps = SliceComponentProps<Content.IntegrationSlice>;

/**
 * Component for "Integration" Slices.
 */
const Integration = ({ slice }: IntegrationProps): JSX.Element => {
  const icons = {
    cloudflare: <FaCloudflare />,
    digitalocean: <FaDigitalOcean />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />
      <div className="relative">
        <h2 className="max-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <div className="mt-20 flex flex-col items-center md:flex-row">
          {slice.primary.icons.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(slice.primary.icons.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="pulsing-icon schrink-0 border-blue-50-30 flex aspect-square items-center justify-center rounded-full border bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                {item.icon && icons[item.icon]}
              </div>
              {index !== slice.primary.icons.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(slice.primary.icons.length / 2)
                      ? "rotate-100"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Integration;
