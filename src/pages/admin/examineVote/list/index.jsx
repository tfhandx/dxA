import { dynamic } from 'umi';

export default dynamic({
    async loader () {
        // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
        const { default: ExamineVoteList } = await import(/* webpackChunkName: "external_A" */ './dynamic');
        return ExamineVoteList;
    },
});