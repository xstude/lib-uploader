// 校验conf是否合法
export const validateConf = (conf) => {
    if (!conf.uploadUrl || !conf.id || !conf.fn) {
        return false;
    }

    return true;
};
// 校验类型
export const validateType = () => {
};
// 校验尺寸
export const validateSize = () => {
};
// 校验文件大小
export const validateCap = () => {
};

// 初始化校验参数
export const init = () => {
};
