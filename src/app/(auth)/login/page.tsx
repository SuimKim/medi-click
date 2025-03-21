import Link from 'next/link';
import AuthForm from '@/components/features/auth-form';

const LoginPage = () => {
  return (
    <div className='w-full max-w-md'>
      <div className='rounded-lg bg-white p-8'>
        <h2 className='mb-8 text-center text-xl font-medium'>로그인</h2>

        <AuthForm mode='login' />

        <div className='mt-4 text-center text-sm'>
          <span>아직 계정이 없으신가요? </span>

          <Link href='/signup' className='text-[#71C4EF] hover:text-[#1399DF]'>
            회원가입하러가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
