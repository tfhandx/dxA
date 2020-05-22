import request from '@/utils/request'

export async function querysomething() {
    return request('/api/profile/basic');
}
