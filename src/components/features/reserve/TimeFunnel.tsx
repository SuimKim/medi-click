'use client';

import { useState } from 'react';
import CardContainer from '@/components/layout/CardContainer';
import TimeButtonContainer from '@/components/layout/TimeButtonContainer';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  date: string;
  time: string;
  onNext: (time: string) => void;
  onPrev: (date: string) => void;
}

// 임시 데이터
const morning = [
  '09:00',
  '09:20',
  '09:40',
  '10:00',
  '10:20',
  '10:40',
  '11:00',
  '11:20',
  '11:40',
  '12:00',
  '12:20',
  '12:40',
];
const afternoon = [
  '14:00',
  '14:20',
  '14:40',
  '15:00',
  '15:20',
  '15:40',
  '16:00',
  '16:20',
  '16:40',
  '17:00',
  '17:20',
  '17:40',
];

const TimeFunnel = ({ date, time, onNext, onPrev }: Props) => {
  const [selectedTime, setSelectedTime] = useState(time);
  const handleTimeButton = (t: string) => {
    setSelectedTime(t);
  };

  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>
          원하는 예약 시간을 선택해주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className='mt-10 flex h-fit flex-col items-center justify-center gap-10'>
        <TimeButtonContainer timeZone='오전'>
          {morning.map((m) => (
            <Button
              key={crypto.randomUUID()}
              variant={selectedTime === m ? 'default' : 'time'}
              size='time'
              onClick={() => handleTimeButton(m)}
            >
              {m}
            </Button>
          ))}
        </TimeButtonContainer>
        <TimeButtonContainer timeZone='오후'>
          {afternoon.map((a) => (
            <Button
              key={crypto.randomUUID()}
              variant={selectedTime == a ? 'default' : 'time'}
              size='time'
              onClick={() => handleTimeButton(a)}
            >
              {a}
            </Button>
          ))}
        </TimeButtonContainer>
      </CardContent>
      <CardFooter className='mt-16 flex w-full justify-evenly gap-5'>
        <Button onClick={() => onPrev(date)}>이전으로</Button>
        <Button onClick={() => onNext(selectedTime)}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default TimeFunnel;
