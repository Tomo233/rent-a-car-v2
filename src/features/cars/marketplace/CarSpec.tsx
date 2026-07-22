import { SvgIconComponent } from "@mui/icons-material";

type SpecItemProps = {
  icon: SvgIconComponent;
  text: string;
};

const CarSpec = ({ icon: Icon, text }: SpecItemProps) => (
  <div className="flex items-center gap-1 text-sm text-gray-600">
    <Icon className="text-secondary-color" fontSize="small" />
    <span>{text}</span>
  </div>
);

export default CarSpec;
