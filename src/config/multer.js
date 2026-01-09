const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
            
                cb(null, fileName);
            });
        }
    }),

    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'image/svg+xml',
            'image/bmp',
            'image/tiff',
            'image/x-icon',
            'image/heif',
            'image/heic',
            'image/avif',
            'image/jp2',
            'image/jpx',
            'image/jpm',
            'image/vnd.microsoft.icon',
            'image/apng',
            'image/x-xbitmap',
            'image/x-xpixmap',
            'image/x-portable-bitmap',
            'image/x-portable-graymap',
            'image/x-portable-pixmap',
            'image/x-cmu-raster',
            'image/ief'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error('Tipo de arquivo inválido.'))
        }
    },
}