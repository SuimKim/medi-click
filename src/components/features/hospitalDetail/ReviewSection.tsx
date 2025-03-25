import { REVIEW_TEXTS } from '@/constants/hospitalConstants';
import { getReviewKeywordCounts } from '@/utils/func/getReviewKeywordCounts';
import ProgressBar from './ProgressBar';
export interface ReviewDataType {
  review: (
    | '친절해요'
    | '진료 대기가 없어요'
    | '시설이 좋고 청결해요'
    | '전문적이에요'
    | null
  )[];
}

const ReviewSection = ({ review }: ReviewDataType) => {
  const { total, result } = getReviewKeywordCounts({ review });

  return (
    <div className='mt-[70px]'>
      <div className='mb-5 flex items-center justify-between'>
        <h4 className='text-2xl font-bold'>⭐ 병원 후기</h4>
        <span className='text-xl'>총 {total}개</span>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {total > 0 ? (
          REVIEW_TEXTS.map((e, i) => (
            <ProgressBar
              key={i}
              score={result[i]}
              total={total}
              reviewText={e}
            />
          ))
        ) : (
          <p className='h-52 content-center self-center text-center text-xl'>
            후기가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
