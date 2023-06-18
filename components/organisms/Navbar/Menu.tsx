import cx from 'classnames'
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export function Menu(props: Partial<MenuProps>) {

  const {
    title, 
    active = false, 
    href = '/'
  } = props

  const classTitle = cx({
    'nav-link': true,
    active
  })

  return (
    <li className="nav-item my-auto">
      <Link href={href} className={classTitle} aria-current="page">
        {title}
      </Link>
    </li>
  )
}