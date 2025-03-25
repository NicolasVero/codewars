// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


function initializeNames(name) {
	const parts = name.split(' ');

	if (parts.length < 3) {
		return name;
	}

	for (let i = 1; i < parts.length - 1; i++) {
		parts[i] = parts[i][0] + '.';
	}

	return parts.join(' ');
}
