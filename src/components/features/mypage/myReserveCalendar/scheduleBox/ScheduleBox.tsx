'use client';

import Loading from '@/components/common/Loading';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMyPageData } from '@/hooks/tanstackQuery/useMyPageData';
import { getReservationList } from '@/utils/api/reservation';
import ScheduleDetail from '../../ScheduleDetail';
import ScheduleContainer from './ScheduleContainer';
import ScheduleTitleBox from './ScheduleTitleBox';

const ScheduleBox = () => {
  const {
    isError: isReservationsError,
    isPending: isReservationsPending,
    error: getReservationsError,
    data: reservationList,
  } = useMyPageData(QUERY_KEY.RESERVATION, getReservationList);

  if (isReservationsError) throw getReservationsError;
  if (isReservationsPending) return <Loading size={100} />;
  if (!reservationList) return;

  return (
    <ScheduleContainer>
      <ScheduleTitleBox />
      <ScheduleDetail reservation={reservationList[0]} />{' '}
      {/*임시로 넣어둔 데이터*/}
    </ScheduleContainer>
  );
};

export default ScheduleBox;
