import { v4 as uuid } from "uuid";
import SUProfile from "../../ui/SUProfile";

export default function Executives() {
  const executives = [
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka (MASCOT)",
      position: "SU President",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-[12px] py-[20px] mb-[40px] align-middle">
        {executives &&
          executives.map(({ name, position }) => (
            <SUProfile
              key={uuid()}
              name={name}
              position={position}
            />
          ))}
      </div>
    </div>
  );
}
