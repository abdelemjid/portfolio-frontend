import type { IconType } from "react-icons";

interface Props {
  fieldTitle: string;
  Icon: IconType;
}

const FieldTitle = ({ fieldTitle, Icon }: Props) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      {/* Icon */}
      <div className="rounded-md p-2 bg-neutral-100/10">
        <Icon className="text-xl" />
      </div>
      {/* Title */}
      <h1 className="text-xl text-neutral-100 font-semibold my-10">
        {fieldTitle}
      </h1>
    </div>
  );
};

export default FieldTitle;
