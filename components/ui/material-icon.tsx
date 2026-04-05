interface MaterialIconProps {
  name: string
  className?: string
  fill?: boolean
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
}

export function MaterialIcon({
  name,
  className,
  fill = false,
  weight = 300,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
