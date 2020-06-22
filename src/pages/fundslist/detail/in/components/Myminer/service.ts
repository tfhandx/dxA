import request from '@/utils/request'
import api from '@/utils/api'
// import request from 'umi-request';

export async function querysomething() {
    return request('/api/miner/getall');
}

