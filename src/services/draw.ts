import request from '@/utils/request';

interface UserAccount {
  account: string;
  password: string;
}

export const testApi = (): void => {
  request(
    '/api/login/getAccount', //仅为示例，并非真实的接口地址
    { method: 'GET' },
  );
};

export const testApi1 = (data: UserAccount): void => {
  request(
    '/api/login/loginin', //仅为示例，并非真实的接口地址
    { method: 'POST', data },
  );
};
