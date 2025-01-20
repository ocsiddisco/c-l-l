import React from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicText,
} from "@prismicio/react";
import Image from "next/image";

import StarBackground from "./StarBackground";
import Bounded from "@/app/components/Bounded";
import background from "./background.jpg";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Integration`.
 */
export type IntegrationProps = SliceComponentProps<Content.IntegrationSlice>;

/**
 * Component for "Integration" Slices.
 */
const Integration = ({ slice }: IntegrationProps): JSX.Element => {
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
        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integration;
