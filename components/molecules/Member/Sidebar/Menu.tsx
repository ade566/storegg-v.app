import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface SidebarMenuProps {
  title: string;
  href: string;
  image: string;
  active?: boolean;
}

export default function SidebarMenu(props: SidebarMenuProps) {

  const {
    title,
    href,
    image,
    active
  } = props

  const classItem = cx({
    'item': true,
    'mb-30': true,
    active
  })

  return (
    <div className={classItem}>
      <Image src={image} className="icon me-3" width={25} height={25} alt="" />
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">{title}</Link>
      </p>
    </div>
  )
}