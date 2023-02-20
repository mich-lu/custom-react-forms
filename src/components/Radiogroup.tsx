import { Controller } from "react-hook-form";
import  Radio  from "./Radio";

export interface Props {
  options?: any[]
  label: string
  error? : string;
  control: any;
  name: string;
}

const Radiogroup = ({ options, label, error, control, name,  ...props }: Props) => {

    return (
      <div className="form-group">
        <label htmlFor={name} className="form-label">{label}</label>
        <fieldset>
          <div  {...props}>
            <Controller 
                control={control}
                name={name}
                render = {({field}) => { return (<div>
                {options && options.map((option, index) => (
                <div key={index} className="radio-group-wrapper">
                    <Radio field ={field} name={name} option={option}/>
                </div>))
                }</div>)}}/>
          </div>
        </fieldset>
        {error && (
          <div className='input-field-label-error'>
            {error}
          </div>)}
      </div>
   );
}

export default Radiogroup;
  