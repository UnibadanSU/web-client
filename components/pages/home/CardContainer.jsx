export default function CardContainer({ children }) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 align-middle gap-[10px] mx-[12px] mt-[10px]">
      {children}
    </div>
  );
}
