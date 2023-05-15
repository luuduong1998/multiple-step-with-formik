const baseApi = 'https://5e8aba18be5500001689e1bb.mockapi.io/DuogLT9/fakedata';
export const getAllData = async () => {
  const res = await fetch(`${baseApi}/ahook-lib`);
  return res.json();
};
