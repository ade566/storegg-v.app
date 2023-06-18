import cx from 'classnames'

interface RowProps {
  value: string;
  title: string;
  styleLeft?: boolean;
}

export default function CountRow(props: RowProps) {

  const {
    value,
    title,
    styleLeft = false,
  } = props

  const classDiv = cx({
    'me-lg-35': true,
    'ms-lg-35': styleLeft
  })


  return (
    <div className={classDiv}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{value}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
    </div>
  )
}