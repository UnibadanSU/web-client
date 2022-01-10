export default function NewsBadge({ title }) {
  return (
    <span className="bg-custom-red font-semibold text-xs px-2 h-[16px] rounded-sm uppercase text-white">
      {title}
    </span>
  );
}
