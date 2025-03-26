'use client';
import ReservationsPage from '@/components/features/mypage/hospitalReservations/Reservations';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ReservationList from '@/components/features/mypage/myReservations/ReservationList';
import { useAccountStore } from '@/utils/zustand/useAccountStore';

const ReserveListClientPage = () => {
  const isHospitalAccount = useAccountStore((state) => state.isHospitalAccount);

  return (
    <>
      {!isHospitalAccount ? (
        <MainContentsContainer>
          <MainContentsTitleBox title='내 예약 목록' />
          <ReservationList />
        </MainContentsContainer>
      ) : (
        <ReservationsPage />
      )}
    </>
  );
};

export default ReserveListClientPage;
