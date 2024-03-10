// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: logX A + logX B


function logs(base, A, B) {

    const logA = Math.log(A) / Math.log(base);
    const logB = Math.log(B) / Math.log(base);

    return logA + logB;
}