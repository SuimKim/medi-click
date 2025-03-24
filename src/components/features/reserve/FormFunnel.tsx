'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { PATH } from '@/constants/routerPath';
import { insertReservationInfo } from '@/utils/api/reservation';
import {
  getCalendarDate,
  getReservationTime,
} from '@/utils/func/getCalendarDate';
import {
  getLocalStorage,
  updateLocalStorage,
} from '@/utils/func/getLocalStorage';

interface Props {
  name: string;
  id: string;
  onPrev: () => void;
}

const FormFunnel = ({ name, id, onPrev }: Props) => {
  const [value, setValue] = useState(() => {
    const storageData = getLocalStorage();
    return storageData.reason || '';
  });
  const router = useRouter();

  const { date, time } = getLocalStorage();

  // 임시 데이터
  const reservationInfo = [
    { title: '성함', value: '이지은' },
    { title: '생년월일', value: '1900년 3월 20일' },
    { title: '예약 병원', value: `${name}` },
    {
      title: '예약 날짜',
      value: `${getCalendarDate(new Date(date))} ${getReservationTime(time)}`,
    },
  ];

  useEffect(() => {
    updateLocalStorage('reason', value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    // 임시 데이터(zustand store에서 받아올 예정입니다)
    const reservationInfo = {
      time: time,
      status: 'waiting',
      user_id: '1ca622a0-68e5-49f2-b98c-5dcbd167b4cd',
      date: date,
      memo: value,
      hospital_id: id,
    };

    try {
      const error = await insertReservationInfo(reservationInfo);
      if (error) {
        throw error;
      }
      toast.success('예약되었습니다!');
      router.push(PATH.RESERVATIONS);
    } catch (error) {
      toast.error('예약 과정에서 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <CardContainer>
      <CardHeaderContainer>방문 사유를 입력해주세요.</CardHeaderContainer>
      <CardContent className='my-5 flex h-3/5 flex-col items-start justify-center gap-5'>
        <Card className='flex w-full flex-col gap-3 px-10 py-7 shadow-none'>
          {reservationInfo.map((info) => (
            <div className='flex flex-col gap-2' key={crypto.randomUUID()}>
              <p className='font-bold text-gray04'>{info.title}</p>
              <p className='text-gray04'>{info.value}</p>
            </div>
          ))}
        </Card>
        <div className='flex w-full flex-col gap-2'>
          <label htmlFor='reason' className='font-bold'>
            방문 사유
          </label>
          <Textarea
            id='reason'
            value={value}
            onChange={handleChange}
            placeholder='방문 사유를 간단하게 적어주세요...'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            개인정보 제 3자 제공 동의
          </label>
        </div>
      </CardContent>
      <CardFooter className='mt-10 flex justify-evenly'>
        <Button onClick={() => onPrev()}>이전으로</Button>
        <Button onClick={handleSubmit}>예약 완료하기</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default FormFunnel;
