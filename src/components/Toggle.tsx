import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type ToggleProps = {
    label: string;
    field: any;
}

export default function Toggle({field, label} : ToggleProps) {

  const { onChange, value } = field;

  return (
    <Switch.Group>
        <div className="flex items-center">
            <Switch.Label className="mr-4">{label}</Switch.Label>
            <Switch
            checked={value}
            onChange={onChange}
            className={classNames(
                value === true ? 'bg-primary' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
            )}
            >
            <span className="sr-only">{label}</span>
            <span
                aria-hidden="true"
                className={classNames(
                value === true  ? 'translate-x-5 bg-primary-darkest' : 'translate-x-0 bg-secondary-lightest',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out'
                )}
            />
            </Switch>
        </div>
    </Switch.Group>
  )
}
