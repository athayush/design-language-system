export type SpecialityCardProps = {
  url: string,
  image: string,
  title: string
}

function SpecialityCard({ url, image, title }: SpecialityCardProps) {
  return (
    <a href={url} className="flex flex-col items-center gap-2">
      <div className="p-3 flex justify-center size-22 items-center shadow rounded-2xl">
        <img src={image} alt={title} />
      </div>
      <p className="text-center font-semibold text-sm">{title}</p>
    </a>
  )
}

export { SpecialityCard }