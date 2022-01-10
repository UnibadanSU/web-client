import { v4 as uuid } from "uuid";
import SUProfile from "../../ui/SUProfile";

export default function Representatives() {
  const representatives = [
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
    {
      name: "Adewole Adeyinka",
      position: "SU President",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-[12px] py-[20px] mb-[40px] align-middle">
        {representatives &&
          representatives.map(({ name, position }) => (
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
