export default function({ name, position }) {
  return (
    <div className="max-w-[219px] mx-auto">
      <img src="/executive.png" alt={name} className="mx-auto rounded-circle" />
      <p className="text-center text-[15px]">{name}</p>
      <p className="text-center text-custom-red text-sm">{position}</p>
    </div>
  );
}
