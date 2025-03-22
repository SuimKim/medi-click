import { Button } from '@/components/ui/button';
import { ScheduleData } from '@/types/components/ui/mypage.schedule';

interface ContentsProps {
  scheduleData: ScheduleData;
}

const ScheduleDetail = ({ scheduleData }: ContentsProps) => {
  const { hospitalName, schedule, status } = scheduleData;

  return (
    <div className='relative m-8 h-[140px] rounded-[15px] border-2 border-main bg-white p-4'>
      <div className='ml-5 flex flex-col gap-4'>
        <div>
          <h3 className='text-2xl font-bold text-deep-blue'>{hospitalName}</h3>
          <p className='text-xl font-medium text-black01'>{schedule}</p>
        </div>
        <p className='text-lg font-medium text-black01'>
          상태: 예약
          {status === 'ok' && ' 확정'}
          {status === 'cancel' && ' 취소'}
          {status === 'waiting' && ' 대기중'}
        </p>
      </div>
      <Button className='absolute right-10 top-12 h-[42px] w-[144px] text-lg font-bold'>
        상세보기
      </Button>
    </div>
  );
};

export default ScheduleDetail;
