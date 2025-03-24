import { toast } from 'react-toastify';
import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
}

export const signUp = async ({
  email,
  password,
  name,
  phone,
  birth,
}: FormData) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    toast.error('이미 사용 중인 이메일입니다.', {
      position: 'top-center',
      autoClose: 3000,
    });
    return;
  }

  const { error: insertError } = await supabase.from('users').insert({
    id: user?.id,
    email,
    name,
    phone_number: phone,
    birth,
  });

  if (insertError) throw insertError;
  toast.success('회원가입이 완료되었습니다.', {
    position: 'top-center',
    autoClose: 3000,
  });
};

export const login = async ({ email, password }: FormData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const getSession = async (setIsLogin: (value: boolean) => void) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log('SESSION =>', session); // 로그인이 되어있는지 상태 확인용
    setIsLogin(!!session);
  } catch (error) {
    console.error('세션 확인 중 오류 발생:', error);
    setIsLogin(false);
  }
};
