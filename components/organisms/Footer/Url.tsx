import Link from "next/link";

interface FooterUrlProps {
  title: string;
  href: string;
  outLink?: boolean;
}

export default function FooterUrl (props: FooterUrlProps) {

  const {
    title,
    href,
    outLink
  } = props

  if (outLink) {
    return (
      <li className="mb-6">
        <a href={href} className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </li>
    )
  } else {
    return (
      <li className="mb-6">
        <Link href={href} className="text-lg color-palette-1 text-decoration-none">{title}</Link>
      </li>
    )
  }

}