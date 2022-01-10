import Link from "next/link";
import NewsBadge from "../ui/NewsBadge";

const Card = ({ headline }) => {
  return (
    <Link passHref href="/news">
      <a>
        <div className="h-[180px] mt-[12px]">
          <div
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "top center",
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url('/unsplash_1.png')",
            }}
            className="flex flex-row gap-[6px] w-full h-full text-white bg-no-repeat bg-center rounded-[16px] p-[20px]"
          >
            <NewsBadge title="News" />
            <div className="text-[14px] font-bold relative bottom-[4px]">
              {headline}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
