interface MemberTopTitleProps {
  title: string;
}

export default function MemberTopTitle(props: MemberTopTitleProps) {

  const {
    title
  } = props

  return (
    <h2 className="text-4xl fw-bold color-palette-1 mb-30">{title}</h2>
  )
}
