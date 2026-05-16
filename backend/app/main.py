from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.upload import router as upload_router

app = FastAPI(title='Procurement Work AI')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(upload_router)

@app.get('/')
def home():
    return {
        'status': 'running',
        'application': 'Procurement Work AI',
        'frontend': 'https://procurement-work-ai.vercel.app',
        'backend': 'https://procurement-work-ai.onrender.com'
    }
