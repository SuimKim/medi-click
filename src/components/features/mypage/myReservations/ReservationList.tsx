'use client';

import Loading from '@/components/common/Loading';
import Text from '@/components/ui/Text';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMyPageDataQuery } from '@/hooks/tanstackQuery/useMyPageDataQuery';
import { getReservationList } from '@/utils/api/reservation';
import ScheduleDetail from '../ScheduleDetail';

const ReservationList = ({ userId }: { userId: string | undefined }) => {
  const {
    isError: isReservationsError,
    isPending: isReservationsPending,
    error: getReservationsError,
    data: reservationList,
  } = useMyPageDataQuery(QUERY_KEY.RESERVATIONS, () =>
    getReservationList(userId),
  );

  if (isReservationsPending)
    return (
      <div className='relative top-20'>
        <Loading size={50} />
      </div>
    );

  if (isReservationsError) throw getReservationsError;
  if (!reservationList) return;

  if (reservationList.length === 0)
    return (
      <div className='mt-[100px] flex items-start justify-center justify-items-center'>
        <Text size='xl' isBold>
          예약하신 병원 일정이 없습니다.
        </Text>
      </div>
    );

  return (
    <>
      {reservationList.map((item) => (
        <ScheduleDetail key={item.id} reservation={item} />
      ))}
    </>
  );
};

export default ReservationList;
