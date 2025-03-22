import ProfileContainer from './ProfileContainer';
import ProfileImage from './ProfileImage';
import SideNav from './SideNav';

interface User {
  user: {
    name: string;
    email: string;
  };
}

const SideBar = ({ user }: User) => {
  const { name, email } = user;
  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage />
        <p className='left-[199px] top-[334px] text-2xl font-bold text-black01'>
          {name}님
        </p>
        <p className='left-[170px] top-[375px] text-base font-bold text-black01'>
          {email}
        </p>
      </ProfileContainer>
      <SideNav />
    </aside>
  );
};

export default SideBar;
