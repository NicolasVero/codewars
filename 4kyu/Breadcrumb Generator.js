// As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link to do all the dirty work in my place.

// What might not be so trivial is instead to get a decent breadcrumb from your current url. For this kata, your purpose is to create a function that takes a url, strips the first part (labelling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

// All elements need to be turned to uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper level folder.

// A few examples can be more helpful than thousands of words of explanation, so here you have them:

// generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
// Seems easy enough?

// Well, probably not so much, but we have one last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; a url composed of more words separated by - and equal or less than 30 characters long needs to be just uppercased with hyphens replaced by spaces.

// Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

// Examples:

// generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
// generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
// You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.




function generateBC(url, separator) {
  
    url = sanitizeUrl(url);
    
    let ariane = '';  
    let elements = url.split('/');
    elements = elements.filter((e) => (e.length > 0));
    
    if(elements.length === 1 || elements.length === 2 && elements[1].includes('index')) 
        return '<span class="active">HOME</span>';
    
    let display_elements = elements.map((e) => e.toUpperCase());
    
    if(elements[elements.length - 1].indexOf("index") > -1)
        elements.pop(); 
    
    for(let i = 0; i < elements.length; i++) {
        if(elements[i].length > 30) 
            display_elements[i] = reduceString(elements[i]);
        
        if(i === elements.length - 1) 
            ariane += separator + '<span class="active">' + editString(display_elements[i]) + '</span>';
        else 
            ariane += getLinks(separator, elements, display_elements, i);
    }
    
    return ariane;
    
    
    
    function getLinks(separator, elements, display_elements, i) {
        if(i === 0 && elements.length === 1) return '<span class="active">HOME</span>';
        if(i === 0 && elements.length >   1) return '<a href="/">HOME</a>';
        
        let link = '';
        for(let j = 1; j < i + 1; j++)
            link += '/' + elements[j];
        
        link += '/';
        return separator + '<a href="' + link + '">' + editString(display_elements[i]) + '</a>';
    }
    
    
    function sanitizeUrl(url) {
        if(url.includes('https://'))
        url = url.substring(8, url.length)
        
        if(url.includes('http://'))
            url = url.substring(7, url.length)
    
        for(let i = 0; i < url.length; i++) {
            if(url.charAt(i) === 'w' && url.charAt(i + 2) === 'w')
            url = url.substring(i, url.length);
    
            if(url.charAt(i) === '?')
            url = url.substring(0, i);
        }
        
        return url;
    }
    
    
    function editString(string) {
      
        if(string.indexOf('#') > 0)
            string = string.substring(0, string.indexOf('#'));
        
        string = string.replace(/-/g, ' ');
        
        if(string.indexOf("INDEX") > -1) return ''; 
        if(string.indexOf(".HTML")) return string.split('.')[0];
        if(string.includes('?')) return string.split('?')[0];
        
        return string;
    }
    
    
    function reduceString(string) {
        const excepts  = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
        let words = string.split('-');
        let r_string = '';
        
        words.forEach((word) => {
            if(!excepts.includes(word)) 
            r_string += word.substring(0, 1);
        });
            
        return r_string.toUpperCase();
    }
}