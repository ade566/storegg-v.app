import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MemberTransactionRowProps {
  image: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
}

export default function MemberTransactionRow(props: MemberTransactionRowProps) {

  const { image, title, category, item, price, status } = props

  const statusClass = cx({
    'float-start icon-status': true,
    'pending': status === 'Pending' ? true : false,
    'success': status === 'Success' ? true : false,
    'failed': status === 'Failed' ? true : false,
  })

  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <Image className="float-start me-3 mb-lg-0 mb-3" src={image} width={80} height={60} alt="" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}</p>
        </div>
      </td>
      <td>
        <Link 
          href="/member/transactions/detail/1"
          className="btn btn-status rounded-pill text-sm">
          Details
        </Link>
      </td>
    </tr>
  )
}
