export const APPOINTMENT_STYLES = {
  container: 'overflow-hidden rounded-lg border-2 border-gray03 text-xl',
  tableHeader: 'rounded-lg bg-deep-blue',
  tableHeaderCell: 'border-b-2 px-6 py-6 text-center font-semibold text-white',
  tableRow: 'hover:bg-gray-50',
  tableCell: 'whitespace-nowrap px-6 py-6',
  statusWaiting:
    'inline-flex rounded-full px-10 py-2 text-xl font-medium text-black02 cursor-pointer !bg-gray03',
  statusConfirmed:
    'inline-flex items-center justify-center rounded-full bg-main px-10 py-2 text-xl font-medium text-white',
  statusCancel:
    'inline-flex items-center justify-center rounded-full bg-red px-10 py-2 text-xl font-medium text-white',
  dateNavContainer:
    'flex min-h-20 flex-wrap justify-evenly rounded-[15px] border-2 border-gray03 p-5 leading-6',
  dateNavItem: 'flex items-center gap-4',
};

export const STATE_WRAPPER_STYLE =
  'flex h-[calc(100vh-80px)] w-full items-center justify-center';
