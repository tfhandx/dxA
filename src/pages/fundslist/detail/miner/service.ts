// import request from 'umi-request';
import request from '@/utils/request'

export async function querysomething() {
  return request('/api/profile/basic');
}
