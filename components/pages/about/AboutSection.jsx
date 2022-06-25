import MarkdownText from "../../ui/MarkdownText";

export default function AboutSection({ aboutPage }) {
  return (
    <div className="mx-[16px] mt-[30px] mb-[100px] text-[15px] lg:text-base text-justify">
      <div> <MarkdownText>{aboutPage?.History}</MarkdownText> </div>
    </div>
  );
}
