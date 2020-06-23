import request from '@/utils/request'

export function getList(page = 1, pageSize = 10) {
    return request({
        url: '/api/cates',
        method: 'get',
        params: {
            page,
            pageSize
        }
    })
}