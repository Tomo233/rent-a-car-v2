import { ElementType } from "react";
import { SvgIconProps } from "@mui/material";

type FeatureCardProps = {
  icon: ElementType<SvgIconProps>;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex w-full max-w-72 flex-col gap-2">
      <Icon
        className="text-secondary-color box-content rounded-full bg-slate-300 p-3"
        fontSize="large"
      />
      <div>
        <h3 className="text-sm font-medium tracking-wide sm:text-base">
          {title}
        </h3>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
