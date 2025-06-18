const fs = require('fs');
const path = require('path');

// Function to convert points to linestring
function convertToLineString(inputFile) {
    // Read and parse the input GeoJSON file
    const inputData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    
    // Extract coordinates from each point feature
    const coordinates = inputData.features.map(feature => feature.geometry.coordinates);
    
    // Create new GeoJSON with LineString
    const lineStringGeoJSON = {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: coordinates
            },
            properties: {}
        }]
    };
    
    // Generate output filename
    const dir = path.dirname(inputFile);
    const basename = path.basename(inputFile, '.geojson');
    const outputFile = path.join(dir, `${basename}_linestring.geojson`);
    
    // Write the output file
    fs.writeFileSync(outputFile, JSON.stringify(lineStringGeoJSON, null, 2));
    console.log(`Converted ${inputFile} to LineString format`);
    console.log(`Output saved to: ${outputFile}`);
}

// Get input file from command line argument
const inputFile = process.argv[2];

if (!inputFile) {
    console.error('Please provide an input file path');
    console.error('Usage: node convert_to_linestring.js <input_file.geojson>');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.error(`Error: File ${inputFile} does not exist`);
    process.exit(1);
}

try {
    convertToLineString(inputFile);
} catch (error) {
    console.error('Error processing file:', error.message);
    process.exit(1);
} 