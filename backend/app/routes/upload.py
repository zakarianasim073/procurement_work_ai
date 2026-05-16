from fastapi import APIRouter, UploadFile, File
import os
import shutil

router = APIRouter(prefix='/api')

UPLOAD_DIR = 'uploads'
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post('/upload')
async def upload_tender(file: UploadFile = File(...)):
    filepath = os.path.join(UPLOAD_DIR, file.filename)

    with open(filepath, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        'success': True,
        'filename': file.filename,
        'path': filepath
    }
