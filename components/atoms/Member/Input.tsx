interface MemberInputProps {
  label: string;
  alias: string;
}

export default function MemberInput(props: MemberInputProps) {

  const {
    label, 
    alias, 
    ...nativeProps
  } = props

  return (
    <>
      <label
        htmlFor={alias}
        className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        className="form-control rounded-pill text-lg"
        id={alias}
        name={alias}
        aria-describedby={alias}
        {...nativeProps}
      />
    </>
  );
}
