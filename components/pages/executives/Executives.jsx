import { v4 as uuid } from "uuid";
import SUProfile from "../../ui/SUProfile";

export default function Executives({ executives }) {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] py-[20px] mb-[40px] align-middle">
        {executives &&
          executives.map((executive) => (
            <SUProfile key={uuid()} profile={executive.attributes} />
          ))}
      </div>
    </div>
  );
}
