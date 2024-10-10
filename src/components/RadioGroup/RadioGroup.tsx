import React, { useState } from 'react';
import { Radio, RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { decode } from 'html-entities';

export type RadioGroupProps = {
  values: string[];
  onChangeProp: (value: string) => void;
  initialValue?: number;
};

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { values, onChangeProp, initialValue } = props;
  const [selectedValue, setSelectedValue] = useState(initialValue ? values[initialValue] : '');

  return (
    <HeadlessRadioGroup
      value={selectedValue}
      onChange={(newValue: string) => {
        setSelectedValue(newValue);
        onChangeProp(newValue);
      }}
      aria-label="Server size"
      className="space-y-2"
    >
      {values.map((value: string) => (
        <Radio
          key={value}
          value={value}
          className="group relative flex cursor-pointer py-1 px-3 text-left border border-solid rounded-md border-base-content border-opacity-20 w-80 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary data-[checked]:bg-base-200"
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-sm">
              <p className="font-semibold">{decode(value)}</p>
            </div>
            <CheckCircleIcon className="size-6 fill-primary opacity-0 transition group-data-[checked]:opacity-100" />
          </div>
        </Radio>
      ))}
    </HeadlessRadioGroup>
  );
};

export default RadioGroup;
