// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){    
    
    ['http://','https://','www.'].map((element) => {
        url = url.replaceAll(element, '');
    });
      
    return url.slice(0, get_slice_index(url))
}
  
function get_slice_index(url) {
    
    const slash = (url.indexOf('/') == -1) ? Infinity : url.indexOf('/');
    const dot   = (url.indexOf('.') == -1) ? Infinity : url.indexOf('.');
    
    return Math.min(slash, dot) || 0;
}