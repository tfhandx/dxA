let api = {
    assetSummary: '/api/asset/summary', // 资产汇总
    assetDetail: '/api/asset/detail', // 资产详情
    weighAddeth: '/api/weigh/addeth', // 添加账户地址
    weighWeleteAddress: '/api/weigh/deleteAddress',
    weighDone: '/api/weigh/done',  // 完成转账
    weighStatus: '/api/weigh/status', // 查询称重状态
    weighRewards: '/api/weigh/rewards', // 查询称重奖励
    weighDeleteAddress: '/api/weigh/deleteAddress', // 删除称重奖励
    registerEmail: '/api/register/email', // 邮箱注册
    verifyEmail: '/api/common/verify/email', // 邮箱验证码
    verifyPhone: '/api/common/verify/phone', // 手机验证码
    registerPhone: '/api/register/phone', // 邮箱注册
    loginPhone: '/api/login/phone',//手机登录
    loginEmail: '/api/login/email', //邮箱登录
    resetpasswordPhone: '/api/resetpassword/phone', //忘记密码手机
    resetpasswordEmail: '/api/resetpassword/email', //忘记密码邮箱
    existPhone: '/api/register/exist/phone', //验证手机号是否存在
    existEmail: '/api/register/exist/email', //验证邮箱是否存在
    verifyInvitaionCode: '/api/common/verify/invitaionCode', //邀请码验证
    inviteDetail: '/api/invite/detail',//邀请页列表
    inviteSummary: '/api/invite/summary', //邀请人数
    inviteLink: '/api/invite/link', //邀请页面邮箱邀请
    profileGet: '/api/profile/get',//基本信息页面数据
    profileUpdate: '/api/profile/update',//修改基本信息数据
    profileResetPassword: '/api/profile/resetPassword',//重置密码
    loginForgetPassword: '/api/login/forgetPassword',//手机忘记密码
    checkinStatus: '/api/checkin/status', //签到查询
    checkinDo: '/api/checkin/do', // 签到点击
    announceAdd: '/api/announce/add', // 新增公告
    announceGet: '/api/announce/get', //查询公告
    announceDelete: '/api/announce/delete', //删除公告
    announceUpdate: '/api/announce/update', //更新公告
    announceGetOne: '/api/announce/getOne', // 查询公告详情
    stat: '/api/stat/line', // dashboard管理员数据看板
    dposLog: '/api/asset/erc20/log', //充提币记录查询
    dposWithdraw: '/api/dpos/erc20/withdraw', // 提币接口
    //投票接口
    authorityPassword: '/api/profile/verifyPayPassword', // 校验密码
    authoritygetcode: '/api/profile/verify/transfer/phone', // 获取验证码
    dposTransfer: '/api/dpos/account/transfer', // 账户划转
    resetPayPassword: '/api/profile/resetPayPassword', // 更新支付密码
    createPayPassword: '/api/profile/createPayPassword', // 创建支付密码
    assetChk: '/api/asset/chk', // 流水账户查询
    assetSavings: '/api/asset/savings', // 储蓄账户查询
    profileSynctoken: '/api/profile/synctoken', // 信息同步
    minerGetall: '/api/miner/getall', // 获取矿机
    //节点信息页面接口
    candidateInfo: '/api/dpos/candidate/get',//获取候选人信息
    genposter: '/api/dpos/candidate/genposter',//获取海报链接
    getvotesNumber: '/api/prevote/get',//获取票数详情
    doprevote: '/api/prevote/do',//预头票
    minerVote: '/api/miner/vote',//矿机给超级节点投票
    appendPrevote: '/api/prevote/append',//预头票

    deletePreVoteRecord: '/api/prevote/delete',
    candidateApply: '/api/dpos/candidate/apply',//申请成为节点
    prevotelog: '/api/prevote/log',//预投票日志记录
    minersVoteResult: '/api/miner/voteresult',//矿机投票结果
    cancelMinerVote: 'api/miner/cancelvote',//取消矿机投票
    prevotelogResult: '/api/prevote/voteresult',//预投票当前结果

    checknickname: '/api/dpos/candidate/checknickname',//申请成为节点
    configGet: '/api/config/get',//获取可配置的投票周期倒计时的开始结束时间
    candidateListapi: '/api/dpos/candidate/getall',//获取候选人排名情况
    assetDeposit: '/api/asset/deposit', // 质押账户资产详情
    minerGenaddress: '/api/miner/genaddress', // 生成主网地址
    minerView: '/api/miner/view', //单个矿机查询
    minerDeposit: '/api/miner/deposit', //单个矿机充值
    minerWithdraw: '/api/miner/withdraw', // 单个矿机提现
    minerOrderview: '/api/miner/orderview', //交易执行情况
    candidateGetall: '/api/review/candidate/getall', //审核投票列表查询
    candidateGet: '/api/review/candidate/get', // 审核投票详情
    candidateCommit: '/api/review/candidate/commit', // 提交审批投票
    minerCount: '/api/miner/prevote/count', // 查看数量
    assetSyncxt: '/api/asset/syncxt', //同步西亭资产
    prevoteGetall: '/api/miner/prevote/getall', // 新矿机信息
    minerOnerewardlist: '/api/miner/onerewardlist', //单个矿机收益详情
    minerRewardlist: '/api/miner/rewardlist', // 所有矿机收益详情
    supernodeVote: '/api/supernode/vote', // 当前得票
    supernodeElection: '/api/supernode/election', // 周期选举结果
    supernodeInfo: '/api/supernode/info', // 超级节点我的奖励
    supernodeReward: '/api/supernode/reward', // 我的奖励详情
    assetTotaldeposit: '/api/asset/totaldeposit', //质押账户资产查询
    minerTotalreward: 'api/miner/totalreward', //矿机我的奖励
    assetBatchcreateaddrt: '/api/asset/batchcreateaddr ', //生产主网地址
    withdrawAddressbook: '/api/withdraw/addressbook', // 查询新增删除常用地址
    dposWithdrawfee: '/api/dpos/withdraw-fee', //手续费查询
    dpos24withdraw: '/api/dpos/24-hour-withdraw', //24小时额度查询
    dposDeposiSstatus: '/api/dpos/erc20/deposit-status', //是否充过值
    dposWithdrawals: '/api/dpos/recent-withdrawals', //最新提现记录
    dposeWithdrawinfo: '/api/dpos/erc20/withdraw-info', // 提现成功详情
    dposeMinnerWithdrawinfo: '/api/miner/order', // 提现成功详情
    assetWithdrawals: '/api/asset/erc20/withdrawals', //提现记录
    minnerDeposit: '/api/miner/deposit-order',//矿机充值记录
    minnerWithdraw: '/api/miner/withdraw-order',//矿机提现记录
    profilePhone: '/api/profile/verify/phone', //重置密码短信
}
export default api