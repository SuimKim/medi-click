'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      className='min-h-[60px] max-w-[800px] rounded-full border-gray03 bg-white px-6 text-lg'
      placeholder='진료 보실 과목을 입력해주세요.'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default SearchBar;
