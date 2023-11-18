interface Props {
  src: string
  href: string
  alt: string
}

export default function ImageLink({ src, href, alt }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} className="logo" alt={alt} />
    </a>
  )
}
