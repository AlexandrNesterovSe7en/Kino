const useThrottle = () => {
    function throttle(ms, fc) {
        var isThrottled = false;
        var savedArgs;
        var savedThis;

        return function wrapper(){
            if (isThrottled) {
                savedArgs = arguments;
                savedThis = this;
                return;
            }

            isThrottled = true;

            fc.apply(this, arguments);

            setTimeout(() => {
                if(savedArgs){
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
                isThrottled = false;
            }, ms)
        }
    }

    return throttle;
};

export default useThrottle;