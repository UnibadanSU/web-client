export default function PageIntroWithCover() {
  return (
    <div
      style={{
        height: "300px",
        width: "100%",
      }}
      className="relative"
    >
      <img
        style={{
          borderBottomLeftRadius: "36px",
          height: "300px",
          borderBottomRightRadius: "36px",
          objectFit: "fill",
        }}
        src="/ui.png"
        alt="UI"
        className="absolute top-0 left-0 w-full overflow-hidden"
      />
    </div>
  );
}
