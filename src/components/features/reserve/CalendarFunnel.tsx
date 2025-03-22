'use client';

import { useState } from 'react';
import CardContainer from '@/components/layout/CardContainer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getCalendarDate, getSplitDate } from '@/utils/func/getCalendarDate';

interface Props {
  date: string;
  onNext: (date: string) => void;
}

const CalendarFunnel = ({ date, onNext }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    date ? new Date(date) : undefined,
  );

  const handleClick = () => {
    if (selectedDate) {
      onNext(getSplitDate(selectedDate));
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center'>
        <CardTitle className='text-xl'>
          원하는 예약 날짜를 선택해주세요.
        </CardTitle>
        <p className='h-5 text-gray03'>{getCalendarDate(selectedDate)}</p>
      </CardHeader>
      <CardContent className='my-5 flex flex-col items-center justify-center'>
        <Calendar
          mode='single'
          selected={selectedDate}
          onSelect={setSelectedDate}
          className='rounded-md border shadow'
          disabled={(date) => date < new Date()}
        />
      </CardContent>
      <CardFooter className='mt-auto flex justify-evenly'>
        <Button onClick={handleClick}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default CalendarFunnel;
