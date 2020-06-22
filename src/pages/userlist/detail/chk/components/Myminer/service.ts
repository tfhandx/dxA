import request from '@/utils/request'
// import request from 'umi-request';

export async function querysomething() {
    return request('/api/miner/getall');
};



