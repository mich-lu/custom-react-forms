
export type Props = {
  option: any;
  field? : any;
  name: string;
}

export default function Radio({ option, field, name}: Props) {
    const {onChange} = field;
    return (
      <div>
        <input
        id={option}
        name={name}
        type="radio"
        className="radio-field"
        onChange={onChange}
        value={option}
        />
        <label htmlFor={option}>
            {option}
        </label>
    </div>
   );
}
  