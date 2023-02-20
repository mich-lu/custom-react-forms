import ReactSelect from 'react-select'

type SelectProps = {
    label: string;
    options? : any[];
    field: any;
    error?: string;
}

const MultiselectWithChip = ({options, field, label, error} : SelectProps) => {
  
const { onChange, value } = field;

  return (
   <div className='form-group'>
        <label htmlFor={label} aria-label={label} className="form-label">{label}</label>
        <ReactSelect options={options} value={value} onChange={onChange}
        isMulti getOptionLabel={(options : any) => options['name']} getOptionValue={(options: any) => options['id'].toString()}/>
        {error && <div className='input-field-label-error'>{error}</div>}
  </div>
  )
}

export default MultiselectWithChip