import type { Children } from '@/types/children';
import { Card } from '../ui/card';

const CardContainer = ({ children }: Children) => {
  return (
    <div className='flex max-h-fit min-h-screen w-full justify-center bg-gray01 py-10'>
      <Card className='relative min-h-fit w-[650px] rounded-lg p-6 shadow-lg'>
        {children}
      </Card>
    </div>
  );
};

export default CardContainer;
