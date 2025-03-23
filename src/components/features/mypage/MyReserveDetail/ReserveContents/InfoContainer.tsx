const InfoContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[356px] flex-1 rounded-[15px] border-2 border-gray03'>
      {children}
    </div>
  );
};

export default InfoContainer;
