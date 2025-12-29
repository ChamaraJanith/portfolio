import fs from 'fs';
import path from 'path';

try {
    const htmlContent = fs.readFileSync('port_backup.html', 'utf8');
    // Look for the specific image tag we saw earlier
    const regex = /src="data:image\/jpeg;base64,([^"]+)"/;
    const match = htmlContent.match(regex);

    if (match && match[1]) {
        const base64Data = match[1];
        const buffer = Buffer.from(base64Data, 'base64');
        const outputPath = path.join('public', 'assets', 'chamara.jpg');
        fs.writeFileSync(outputPath, buffer);
        console.log('Image extracted successfully to ' + outputPath);
    } else {
        console.log('Image base64 data not found in port_backup.html');
    }
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
