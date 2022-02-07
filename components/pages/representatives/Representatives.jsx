import { v4 as uuid } from "uuid";
import SUProfile from "../../ui/SUProfile";

export default function Representatives({ representatives }) {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 gap-[12px] py-[20px] mb-[40px] align-middle">
        {representatives &&
          representatives.map((representative) => (
            <SUProfile key={uuid()} profile={representative.attributes} />
          ))}
      </div>
    </div>
  );
}
