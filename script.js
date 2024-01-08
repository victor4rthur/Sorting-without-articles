// Array of band names
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to strip common prefixes from band names for sorting
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sorting the bands alphabetically after stripping common prefixes
const sortedBands = bands.sort(function (a, b) {
    if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});

// Selecting the HTML element with the ID 'bands'
const bandsList = document.querySelector('#bands');

// Creating a list of sorted bands as HTML list items and updating the element's innerHTML
const bandItems = sortedBands.map(band => `<li>${band}</li>`).join('');
bandsList.innerHTML = bandItems;