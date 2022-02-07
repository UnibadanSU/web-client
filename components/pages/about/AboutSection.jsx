import Markdown from "markdown-to-jsx";

export default function AboutSection({ aboutPage }) {
  return (
    <div className="mx-[16px] mt-[30px] mb-[100px] text-[15px] lg:text-base text-justify">
      <Markdown
        options={{
          overrides: {
            h2: {
              props: {
                className: "font-bold",
              },
            },
            img: {
              props: {
                className: "w-full",
              },
            },
          },
        }}
      >
        {aboutPage.content}
      </Markdown>
    </div>
  );
}
