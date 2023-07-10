interface TransactionLabelValueProps {
  label: string;
  value: string;
}

export default function TransactionLabelValue(props: TransactionLabelValueProps) {

  const {
    label, value
  } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className="purchase-details">{value}</span>
    </p>
  )
}
