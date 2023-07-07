import cx from "classnames";

interface MemberTransactionButtonTabProps {
  title: string;
  active?: boolean;
  filter: '*' | 'pending' | 'success' | 'failed';
}

export default function MemberTransactionButtonTab(props: MemberTransactionButtonTabProps) {

  const {
    title, filter, active
  } = props

  const hrefClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active ? true : false,
  })

  return (
    <a data-filter={filter} href="#" 
      className={hrefClass}>
      {title}
    </a>
  )

}
