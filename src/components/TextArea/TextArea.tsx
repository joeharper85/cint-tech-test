import { Textarea } from '@headlessui/react';
import React, { useRef } from 'react';

export type TextAreaProps = {
  onChangeProp: (value: string) => void;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { onChangeProp } = props;
  const debouncerRef = useRef<NodeJS.Timeout>();

  return (
    <Textarea
      className="resize-none textarea textarea-bordered w-80"
      rows={3}
      onChange={(e) => {
        clearTimeout(debouncerRef.current);
        debouncerRef.current = setTimeout(() => onChangeProp(e.target.value), 300);
      }}
    />
  );
};

export default TextArea;
